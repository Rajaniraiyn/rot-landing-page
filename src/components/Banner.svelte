<script lang="ts">
    import Bot from "../assets/bot.svg";
</script>

<div>
    <img src={Bot} alt="bot" />
    <p class="gradient">
        A simplified Application to handle all of your events and meet gamers of
        your kind
    </p>
</div>

<style>
    div {
        display: grid;
        place-items: center;
        grid-template-columns: 1fr 1fr;
        margin-inline: 2em;
        gap: 4em;
        max-width: 1000px;
        margin: auto;
    }
    div img {
        max-width: 50vw;
    }
    div p {
        font-size: 2.5rem;
        font-weight: bold;
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
