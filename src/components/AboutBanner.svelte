<script lang="ts">
    import Line from "../assets/line.png";
    export let title;
    export let subtitle;
    export let content;
    export let learnMoreLink;
    export let image;
</script>

<div>
    <article>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{content}</p>
        <a href={learnMoreLink}>Learn More..</a>
    </article>
    <img src={image} alt="" />
</div>

<style>
    div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1.5rem;
    }
    article {
        border-left: solid 0.25rem #ffffff;
        border-radius: 5px;
    }

    img {
        width: 50%;
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
