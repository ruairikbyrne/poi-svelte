import axios from "axios";
import {user} from "../stores";

export class POIService {
    poiList = [];
    categoryList = [];
    baseUrl = "";

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async getLocations() {
        try {
            const response = await axios.get(this.baseUrl + "/api/location")
            this.poiList = response.data;
            return this.poiList;
        } catch (error) {
            return [];
        }
    }

    async getCategories() {
        try {
            const response = await axios.get(this.baseUrl + "/api/category")
            this.categoryList = response.data;
            console.log("hit getCategories");

            return this.categoryList;
        } catch (error) {
            console.log("hit error in getCategories", error);
            return [];
        }
    }

    async login(email, password) {
        try {
            console.log("Email " + email);
            console.log("Password " + password);
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
            return response.status == 200;
        } catch (error) {
            return false;
        }
    }
    async addLocation(name, description, longitude, latitude, url, public_id, category) {
        try {
            console.log("URL value: ", url);
            const location = {
                name: name,
                description: description,
                longitude: longitude,
                latitude: latitude,
                imageurl: url,
                imageid: public_id,
                category: category,
            };
            const response = await axios.post(this.baseUrl + "/api/location" , location);
            return response.status == 201;
        } catch (error) {
            console.log("Add Location Error:", error)
            return false;

        }
    }

    async addCategory(categoryName) {
        try {
            const newCategory = {
                categoryName: categoryName,
            };
            console.log("newCategory: ", newCategory);
            const response = await axios.post(this.baseUrl + "/api/category", newCategory);
            console.log("Response tp add: ", response);
            return response.status == 201;
        } catch (error) {
            console.log("Add Category Error:", error)
            return false;

        }
    }

    async updateSettings(firstName, lastName, email, password, id) {
        try {
            const userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                _id: id
            };
            console.log(userDetails);
            const response = await axios.put(`${this.baseUrl}/api/users/${id}`, userDetails);
            const newUser = await response.data;
            user.set(newUser);
            return true;
        } catch (error) {
            return false;
        }
    }

}