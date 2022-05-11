<script lang="ts">
    import Feature from "./Feature.svelte";
    import f1 from "../assets/f1.svg";
    const features = [
        {
            icon: f1,
            content: "Connect with Various Events Around the World",
        },
        {
            icon: f1,
            content: "Explore a Variety of Games",
        },
        {
            icon: f1,
            content: "Become a Verified Tournament Host",
        },
        {
            icon: f1,
            content: "Connect with Gamers Around the World",
        },
        {
            icon: f1,
            content: "Advanced Leaderboard To Boost Up the Competitive Spirit",
        },
    ];
</script>

<div>
    <h2>Explore the features!</h2>
    {#each features as feature}
        {@const { icon, content } = feature}
        <Feature {icon} {content} />
    {/each}
</div>
