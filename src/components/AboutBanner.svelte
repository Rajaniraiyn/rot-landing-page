<script lang="ts">
    import Button from "./Button.svelte";
    export let title;
    export let subtitle;
    export let content;
    export let learnMoreLink;
    export let image;
    export let alternate;
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
        gap: 1.5rem;
        justify-items: center;
        align-items: center;
    }

    article {
        border-left: solid 0.25rem #ffffff;
        padding-left: 2.5em;
    }

    img {
        padding-inline: 5em;
    }

    h3,
    h2 {
        font-size: 1.5em;
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
</style>
