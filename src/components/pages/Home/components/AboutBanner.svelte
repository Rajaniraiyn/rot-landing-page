<script lang="ts">
    import Button from "./Button.svelte";
    export let title: string;
    export let subtitle: string;
    export let content: string;
    export let learnMoreLink: string;
    export let image: string;
    export let alternate: boolean;
</script>

<div class:alternate>
    {#if alternate}
        <img src={image} alt="" />
        <article>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>{content}</p>
            <a href={learnMoreLink}>
                <Button>Learn More..</Button>
            </a>
        </article>
    {:else}
        <article>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>{content}</p>
            <a href={learnMoreLink}>
                <Button>Learn More..</Button>
            </a>
        </article>
        <img src={image} alt="" />
    {/if}
</div>

<style>
    div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5em;
        /* justify-items: center;
        align-items: center; */
        place-items: center;
        margin-bottom: 1.5em;
    }

    article {
        border-left: solid 0.25rem #ffffff;
        padding-left: 2em;
    }

    img {
        width: 100%;
        height: auto;
    }

    h3,
    h2 {
        font-size: clamp(1em, 10%, 3em);
        font-weight: bold;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1em;
        margin-bottom: 1rem;
    }

    a {
        font-size: 1em;
        font-weight: bold;
        color: #fff;
        text-decoration: none;
        margin-top: 1rem;
    }

    h3 {
        font-size: 3em;
        font-weight: bold;
        background: linear-gradient(
            90deg,
            #00f0ff 0%,
            #5773ff 46.87%,
            #ff007a 100%
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>
