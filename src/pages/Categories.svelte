<script>
    import CategoryList from "../components/CategoryList.svelte";
    import crest1 from "/src/assets/crest1.jpg";
    import {navBar, mainBar, subTitle, title} from "../stores"


    title.set("Visit Wexford");
    subTitle.set("All Current Categories");
    navBar.set({
        bar: mainBar
    });


</script>

<div class="uk-text-center" uk-grid>
    <div class="uk-width-auto@m ">
        <img width="150" src="{crest1}" alt="Wexford">
    </div>
    <div class="uk-width-expand@m">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <CategoryList/>
        </div>
    </div>
</div>