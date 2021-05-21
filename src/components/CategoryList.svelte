<script>
    import {getContext, onMount} from 'svelte'


    const poiService = getContext("POIService");

    let categoryName = "";
    let categoryList = [];
    let errorMessage = "";


    onMount(async () => {
        categoryList = await poiService.getCategories();
    });

    async function addCategory() {
        const success = await poiService.addCategory(categoryName)
        console.log("Success output:", success);
        if (success) {
            categoryList = await poiService.getCategories();
        } else {
            errorMessage = "Adding new Category not completed - some error occurred";
        }
    }


</script>

<div class="uk-margin uk-width-2xlarge uk-margin-auto uk-card uk-card-primary uk-card-body uk-box-shadow-large">
    <h3 class="uk-card-title">Category Maintenance</h3>
    <form on:submit|preventDefault={addCategory} class="uk-form-stacked uk-text-left">
        <div class="uk-grid uk-grid-stack">
            <div class="uk-width-1-2@m">
                <div class="uk-margin">
                    <label class="uk-form-label" for="form-stacked-text">Enter category</label>
                    <div class="uk-form-controls">
                        <input bind:value={categoryName} class="uk-input" id="form-stacked-text" type="text" name="categoryName" placeholder="Category">
                    </div>
                </div>
                <div class="uk-margin">
                    <button  class="submit uk-button uk-button-primary uk-button-large uk-width-1-1">Add Category</button>

                </div>
                {#if errorMessage}
                    <div class="uk-text-left uk-text-small">
                        {errorMessage}
                    </div>
                {/if}
            </div>
        </div>

    </form>
</div>
<div class="uk-table uk-table-divider">
    <table class="uk-table">
        <thead>
        <th>
            Description
        </th>
        </thead>
        <tbody class="uk-text-left">
        {#if categoryList}
            {#each categoryList as c}
                <tr>
                     <td>{c.categoryName}</td>
                </tr>
            {/each}
        {/if}
        </tbody>
    </table>
</div>
