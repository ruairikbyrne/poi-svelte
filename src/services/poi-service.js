import axios from "axios";
import {user} from "../stores";

export class POIService {
    poiList = [];
    categoryList = [];
    reviewList = [];
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
            return this.categoryList;
        } catch (error) {
            console.log("hit error in getCategories", error);
            return [];
        }
    }

    async getReviews(id) {
        try {
            console.log("Passed In ID: ", id);
            const response = await axios.get(this.baseUrl + "/api/reviews/{id}", id);
            this.reviewList = response.data;
            return this.reviewList;
        } catch (error) {
            console.log("hit error in getReviews", error);
            return [];
        }
    }

    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
            console.log("login response: ", response)
            return response.status == 200;
        } catch (error) {
            console.log("Svelte Login Error: ", error);
            return false;
        }
    }

    //async addLocation(name, description, longitude, latitude, url, public_id, category) {
    async addLocation(name, description, longitude, latitude, category) {
        try {
            //console.log("URL value: ", url);
            const location = {
                name: name,
                description: description,
                longitude: longitude,
                latitude: latitude,
                //imageurl: url,
                //imageid: public_id,
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
            const response = await axios.post(this.baseUrl + "/api/category", newCategory);
            return response.status == 201;
        } catch (error) {
            console.log("Add Category Error:", error)
            return false;
        }
    }

    async addReview(reviewDetails, selected, locationid, userid) {
        try {
            const newReview = {
                reviewDetail: reviewDetails,
                rating: selected,
                location: locationid,
                user: userid,
            };
            console.log("newReview: ", newReview);
            const response = await axios.post(this.baseUrl + "/api/reviews", newReview);
            console.log("Response to review add: ", response);
            return response.status == 201;
        } catch (error) {
            console.log("Add Review Error:", error)
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
            const response = await axios.put(`${this.baseUrl}/api/users/${id}`, userDetails);
            const newUser = await response.data;
            user.set(newUser);
            return true;
        } catch (error) {
            return false;
        }
    }

    async signup(firstName, lastName, email, password) {
        try {
            const userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            };
            const response = await axios.post(this.baseUrl + "/api/users", userDetails);
            const newUser = await response.data;
            user.set(newUser);
            return true;
        } catch (error) {
            return false;
        }
    }

}