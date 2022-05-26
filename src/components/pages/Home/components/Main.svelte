<script lang="ts">
    // import down from "../../../../assets/icons8-down.gif";
    import down from "../../../../assets/down.webp";
    import RightArrow from "../../../../assets/right-arrow.svg";
    import Button from "./Button.svelte";
</script>

<header>
    <span>A dedicated platform for</span>
    <span class="gradient">Competitive gaming</span>
    <p>A Platform For All Gamers To Connect, Interact And Win More</p>
    <Button hasIcon>
        Let's go
        <img src={RightArrow} alt="right arrow" />
    </Button>
    <img src={down} alt="" class="scroll-to-down" />
</header>

<style>
    header {
        font-family: sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1em;
        /* margin: 10em; */
        font-weight: 700;
        letter-spacing: 0.05em;
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
    }

    p {
        font-size: 1.2em;
        margin: 0;
    }
    span {
        text-transform: capitalize;
    }

    .scroll-to-down {
        mix-blend-mode: lighten;
        -webkit-user-drag: none;
    }
</style>
