<script lang="ts">
    export let content;
    export let profilePic;
    export let profileName;
    export let profileDetails;
</script>

<div>
    <p>{content}</p>
    <section>
        <img src={profilePic} alt="" />
        <h3>{profileName}</h3>
        <p>{profileDetails}</p>
    </section>
</div>

<style>
    div {
        padding: 4em;
        border-radius: 1.25em;
        border: 1px solid #ffffff;
    }
    p,
    h3 {
        font-size: 1em;
    }
    section {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: 1fr 2fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        margin-top: 1.5em;
    }

    img {
        grid-area: 1 / 1 / 4 / 2;
    }

    h3 {
        grid-area: 1 / 2 / 2 / 3;
    }

    p {
        grid-area: 2 / 2 / 3 / 3;
    }
</style>
