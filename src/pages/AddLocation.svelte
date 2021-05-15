<script>
    import crest1 from "/src/assets/crest1.jpg";
    import {navBar, mainBar, subTitle, title} from "../stores"
    import AddLocationForm from "../components/AddLocationForm.svelte";

    title.set("Visit Wexford.");
    subTitle.set("Add a location");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <img width="300" src="{crest1}" alt="Wexford">
        </div>
    </div>
    <div class="uk-width-1-2@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <AddLocationForm/>
        </div>
    </div>
</div>