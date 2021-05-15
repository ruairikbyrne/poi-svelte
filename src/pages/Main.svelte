<script>
    import {title, subTitle, navBar, welcomeBar} from "../stores"
    import ancientEast from "/src/assets/ancient_east.jpg";
    title.set("Visit Wexford");
    subTitle.set("Sign up or Log in");

    navBar.set({
        bar: welcomeBar
    });
</script>

<div class="uk-text-center" uk-grid>
    <div class="uk-width-1-2@m">
        <img width="200" src="{ancientEast}" alt="Ancient East">
    </div>
    <div class="uk-width-1-2@m ">
        <div class="uk-width-2xlarge">
            <h3 class="uk-heading-small uk-flex"> Visit Wexford, the sunny south east!  </h3>
            <p> Part of Ireland's Ancient East </p>
        </div>
    </div>
</div>