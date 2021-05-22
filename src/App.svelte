<script>
  import {setContext} from "svelte";
  import {POIService} from "./services/poi-service";
  import Main from "./pages/Main.svelte";
  import POIs from "./pages/pois.svelte";
  import Login from "./pages/Login.svelte"
  import Navigator from "./components/Navigator.svelte";
  import AddLocation from "./pages/AddLocation.svelte";
  import Categories from "./pages/Categories.svelte";
  import Reviews from "./pages/Reviews.svelte";
  import Settings from "./pages/Settings.svelte";
  import Signup from "./pages/Signup.svelte";
  import Router from "svelte-spa-router";

  setContext("POIService", new POIService("https://tranquil-hamlet-82612.herokuapp.com/"))

  let routes = {
    "/": Main,
    "/location": POIs,
    "/login": Login,
    "/signup" : Signup,
    "/logout": Main,
    "/addlocation": AddLocation,
    "/categories": Categories,
    "/reviews": Reviews,
    "/settings" : Settings,
  }

</script>

<div class="uk-container">
  <Navigator/>
  <Router {routes} />
</div>