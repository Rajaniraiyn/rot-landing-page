<script lang="ts">
    export let content: string;
    export let profilePic: string;
    export let profileName: string;
    export let profileDetails: string;
</script>

<div class="container">
    <p>{content}</p>
    <div class="about">
        <img src={profilePic} alt="" />
        <h3>{profileName}</h3>
        <p>{profileDetails}</p>
    </div>
</div>

<style>
    .container {
        display: grid;
        grid-template-rows: 1fr auto;
        gap: 2em;
        align-items: center;
    }

    .container {
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

    .about {
        display: grid;
        grid-template-areas: "img name"
        "img bio";
        grid-template-columns: auto 1fr;
        gap: 0.5em;
        font-size: 1em;
        place-items: center;
    }

    .about img {
        grid-area: img;
    }

    .about h3 {
        grid-area: name;
    }

    .about p {
        grid-area: bio;
        width: max-content;
    }

    img {
        max-width: 60px;
        aspect-ratio: 1;
        border-radius: 50%;
    }
</style>
