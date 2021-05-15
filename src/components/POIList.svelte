<script>
    import {onMount, getContext} from 'svelte'
    const poiService = getContext("POIService");

    let poiList;
    onMount(async () => {
        poiList = await poiService.getLocations()

    })
</script>

<h3 class="uk-heading-divider">
    Points of Interest
</h3>
<div class="uk-table uk-table-divider">
    <table class="uk-table">
        <thead>
        <th>
            Name
        </th>
        <th>
            Description
        </th>
        <th>
            Category
        </th>
        <th>
            Longitude
        </th>
        <th>
            Latitude
        </th>

        </thead>
        <tbody class="uk-text-left">
            {#if poiList}
                {#each poiList as poi}
                    <tr>
                        <td>{poi.name}</td>
                        <td>{poi.description}</td>
                        <td>{poi.category.categoryName}</td>
                        <td>{poi.latitude}</td>
                        <td>{poi.longitude}</td>

                    </tr>
                {/each}
            {/if}
        </tbody>
    </table>
</div>