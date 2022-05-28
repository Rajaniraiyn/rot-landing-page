<script lang="ts">
    export let content: string;
    export let profilePic: string;
    export let profileName: string;
    export let profileDetails: string;
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
        box-sizing: border-box;
        padding: clamp(2em, 50%, 5vw);
        border-radius: 1.25em;
        border: 1px solid #ffffff;
        --color-bg: #0f0b30;

        background: linear-gradient(90deg, var(--color-bg), var(--color-bg))
                padding-box,
            linear-gradient(
                    90deg,
                    rgb(0, 240, 255) 0%,
                    rgb(87, 115, 255) 46.88%,
                    rgb(255, 0, 122) 100%
                )
                border-box;
        border: 4px solid transparent;
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
