<script lang="ts">
    import Bot from "../assets/bot.svg";
</script>

<div>
    <img src={Bot} alt="bot" />
    <p>
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
</style>
