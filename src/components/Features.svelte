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

<section>
    <h2 class="gradient">Explore the features!</h2>
    <div>
        {#each features as feature}
            {@const { icon, content } = feature}
            <Feature {icon} {content} />
        {/each}
    </div>
</section>

<style>
    div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .gradient{
        text-transform: uppercase;
        font-weight: 800;
        font-size: 35px;
        background-image: linear-gradient(90deg, rgba(0,240,255,1) 0%, rgba(87,115,255,1) 20%, rgba(255,0,70,1) 88%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>
