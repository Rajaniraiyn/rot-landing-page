<script lang="ts">
    import AboutBanner from "./AboutBanner.svelte";
    import EsportsPic from "../../../../assets/Esports.svg";
    import GamersPic from "../../../../assets/Gamers.svg";
    const about = [
        {
            title: "About",
            subtitle: "Esports and Events",
            content:
                "ROT offers a stabilized platform to conduct and participate in the Esports events and other competitive gaming event categories like Speed running , PvP etc... .Esports is a form of competition using video games. Esports often takes the form of organized, multiplayer video game competitions, particularly between professional players, individually or as teams. ",
            learnMoreLink: "#",
            image: EsportsPic,
        },
        {
            title: "You can also get",
            subtitle: "Gamers for Teams",
            content:
                "ROT provides talented individuals who are experienced in their domain game to establish themselves in their field by getting paid to play for a team. Teams who are looking for skilled players in their esports team can approach these professional players verified by the ROT Inc. ROT also provides VoIP facilities to communicate between players",
            learnMoreLink: "#",
            image: GamersPic,
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
