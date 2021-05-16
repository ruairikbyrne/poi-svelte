<script> //lang="ts"
    import { onMount, getContext } from "svelte";
    const poiService = getContext("POIService");

    let categoryList;
    let name = "";
    let description = "";
    let longitude = 0;
    let latitude = 0;
    let url = "";
    let public_id = "";
    let selected;
    let errorMessage = "";
    let files = [];

    onMount(async () => {
        categoryList = await poiService.getCategories();

    });



    async function addLocation() {
        const success = await poiService.addLocation(name, description, longitude, latitude, files[0], public_id, selected)
        console.log("Selected Category: ", selected);
        console.log("File object", files[0]);
        if (success) {

        } else {
            errorMessage = "Location not added - some error occurred";
       }
    }
</script>



<form on:submit|preventDefault={addLocation} class="uk-form-stacked uk-text-left">
    <div class="uk-grid uk-grid-stack">
        <div class="uk-width-expand@m">
            <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Add Point of Interest</label>
                <div class="uk-form-controls">
                    <input bind:value={name} class="uk-input" id="form-stacked-text" type="text" name="name" placeholder="Location Name">
                </div>
            </div>

            <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Add Point of Interest</label>
                <div class="uk-form-controls">
                    <input bind:value={description} class="uk-input" id="form-stacked-text" type="text" name="description" placeholder="Description">
                </div>
            </div>

            <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Category</label>

                <select bind:value={selected}>
                    {#if categoryList}
                    {#each categoryList as c}
                        <option value={c._id}>{c.categoryName}</option>

                    {/each}
                    {/if}
                </select>
            </div>

            <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Longitude</label>
                <div class="uk-form-controls">
                    <input bind:value={longitude} class="uk-input" id="form-stacked-text" type="number" name="longitude" placeholder="Longitude">
                </div>
            </div>

            <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Latitude</label>
                <div class="uk-form-controls">
                    <input bind:value={latitude} class="uk-input" id="form-stacked-text" type="number" name="latitude" placeholder="Latitude">
                </div>
            </div>

            <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Select Image</label>
                <div class="uk-form-controls">
                    <input bind:files type="file" class="uk-input" name="imagefile" accept="image/png, image/jpeg">
                </div>
            </div>

        </div>
            <div class="uk-margin">
                <button class="submit uk-button uk-button-primary uk-button-large uk-width-1-1">Add Location</button>
            </div>
            {#if errorMessage}
                <div class="uk-text-left uk-text-small">
                    {errorMessage}
                </div>
            {/if}
        </div>

</form>