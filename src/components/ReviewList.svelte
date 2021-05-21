<script>
    import {getContext, onMount} from 'svelte'
    import {selectedLocation} from "../stores";


    const poiService = getContext("POIService");

    let reviewDetails = "";
    let reviewList = [];
    let selectedRating;
    let errorMessage = "";

    console.log("Selected Location id: ", $selectedLocation);
    onMount(async () => {
        reviewList = await poiService.getReviews();
        console.log("Reviews found", reviewList);
    });

    async function addReview() {
        const success = await poiService.addReview(reviewDetails, selectedRating, $selectedLocation)
        console.log("Success output:", success);
        if (success) {
            reviewList = await poiService.getReviews();

        } else {
            errorMessage = "Adding new review not completed - some error occurred";
        }

    }


</script>

<div class="uk-margin uk-width-2xlarge uk-margin-auto uk-card uk-card-primary uk-card-body uk-box-shadow-large">
    <h3 class="uk-card-title">Location Review</h3>
    <form on:submit|preventDefault={addReview} class="uk-form-stacked uk-text-left">
        <div class="uk-grid uk-grid-stack">
            <div class="uk-width-1-2@m">
                <div class="uk-margin">
                    <label class="uk-form-label" for="form-stacked-text">Enter Review</label>
                    <div class="uk-form-controls">
                        <input bind:value={reviewDetails} class="uk-input" id="form-stacked-text" type="text" name="reviewDetails" placeholder="Review Details">
                    </div>
                </div>

                <div class="uk-margin">
                    <label class="uk-form-label" for="form-stacked-text">Rating</label>

                    <select bind:value={selectedRating}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div class="uk-margin">
                    <button  class="submit uk-button uk-button-primary uk-button-large uk-width-1-1">Add Review</button>

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
        <th>Review</th>
        <th>Rating</th>
        <th>Reviewer</th>
        <th>Review Date</th>
        </thead>
        <tbody class="uk-text-left">
        {#if reviewList}
            {#each reviewList as r}
                <tr>
                    <td>{r.reviewDetail}</td>
                    <td>{r.rating}</td>
                    <td>{r.user.firstName}, {r.user.lastName}</td>
                    <td>{r.reviewDate}</td>
                </tr>
            {/each}
        {/if}
        </tbody>
    </table>
</div>
