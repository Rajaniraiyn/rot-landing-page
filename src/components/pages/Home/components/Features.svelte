<script lang="ts">
    import Feature from "./Feature.svelte";
    import f1 from "../../../../assets/f1.svg";
    import f2 from "../../../../assets/f2.svg";
    import f3 from "../../../../assets/f3.svg";
    import f4 from "../../../../assets/f4.svg";
    import f5 from "../../../../assets/f5.svg";
    const features = [
        {
            icon: f1,
            content: "Connect with Various Events Around the World",
        },
        {
            icon: f2,
            content: "Explore a Variety of Games",
        },
        {
            icon: f3,
            content: "Become a Verified Tournament Host",
        },
        {
            icon: f4,
            content: "Connect with Gamers Around the World",
        },
        {
            icon: f5,
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
    section {
        display: flex;
        flex-direction: column;
    }

    div {
        display: flex;
        gap: 1.5rem;
        flex-wrap: wrap;
        justify-content: center;
        flex-grow: 1;
    }

    .gradient {
        text-transform: uppercase;
        font-weight: 800;
        font-size: 35px;
        background-image: linear-gradient(
            90deg,
            rgba(0, 240, 255, 1) 0%,
            rgba(87, 115, 255, 1) 20%,
            rgba(255, 0, 70, 1) 88%
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        /*Subjected to Change*/
        margin: 0.5em 1.5rem;
    }
</style>
