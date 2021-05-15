<script>
  import {setContext} from "svelte";
  import {POIService} from "./services/poi-service";
  import Main from "./pages/Main.svelte";
  import POIs from "./pages/pois.svelte";
  import Login from "./pages/Login.svelte"
  import Navigator from "./components/Navigator.svelte";
  import AddLocation from "./pages/AddLocation.svelte";
  import Categories from "./pages/Categories.svelte";
  import Settings from "./pages/Settings.svelte";
  import Router from "svelte-spa-router";

  setContext("POIService", new POIService("http://localhost:4000"))

  let routes = {
    "/": Main,
    "/location": POIs,
    "/login": Login,
    "/logout": Main,
    "/addlocation": AddLocation,
    "/categories": Categories,
    "/settings" : Settings,
  }

</script>

<div class="uk-container">
  <Navigator/>
  <Router {routes} />
</div>