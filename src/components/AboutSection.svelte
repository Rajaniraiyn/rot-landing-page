<script lang="ts">
    import AboutBanner from "./AboutBanner.svelte";
    import EsportsPic from "../assets/Esports.svg";
    const about = [
        {
            title: "About",
            subtitle: "Esports and Evenets",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quam sit scelerisque enim in sed diam nec, blandit. Amet tellus massa sed iaculis. Mauris, curabitur scelerisque sagittis posuere mollis. In dolor neque et vitae lectus vulputate pellentesque luctus.",
            learnMoreLink: "#",
            image: EsportsPic,
        },
        {
            title: "You can also get",
            subtitle: "Gamers for Teams",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quam sit scelerisque enim in sed diam nec, blandit. Amet tellus massa sed iaculis. Mauris, curabitur scelerisque sagittis posuere mollis. In dolor neque et vitae lectus vulputate pellentesque luctus.",
            learnMoreLink: "#",
            image: EsportsPic,
            alternate: true,
        },
    ];
</script>

<div>
    {#each about as item}
        {@const { title, subtitle, content, learnMoreLink, image, alternate } =
            item}
        <AboutBanner
            {alternate}
            {title}
            {subtitle}
            {content}
            {learnMoreLink}
            {image}
        />
    {/each}
</div>

<style>
    div {
        display: grid;
        grid-template-rows: 1fr 1fr;
        gap: 2em;
        margin-inline: 5em;
    }
</style>
