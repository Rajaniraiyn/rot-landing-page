<script lang="ts">
    import down from "../assets/icons8-down.gif"
</script>

<header>
    <span>A dedicated platform for</span>
    <span class="gradient">Competitive gaming</span>
    <p>A PLATFORM FOR ALL GAMERS TO CONNECT, INTRACT AND WIN MORE </p>
    <button>Let's go</button>
    <img src={down} alt="">
</header>

<style>
    header {
        font-family: sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1em;
        margin: 10em;
        font-weight: 700;
        letter-spacing: 0.05em;
    }
    .gradient{
        text-transform: uppercase;
        font-weight: 800;
        font-size: 35px;
        background-image: linear-gradient(90deg,#00F0FF,#5773FF,#FF007A);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    span{
        text-transform: capitalize;
    }

    img {
        mix-blend-mode: multiply;
    }
</style>
