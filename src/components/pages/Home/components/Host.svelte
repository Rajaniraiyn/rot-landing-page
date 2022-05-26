<script lang="ts">
    import Button from "./Button.svelte";
</script>

<div>
    <h2>Become a Host and Host Your Events With Ease</h2>
    <p>
        ROT offers various tournament hosts to host their tournaments with ease.
        ROT focuses on developing a peaceful and a competitive environment among
        gamers and hosts minimizing most of the difficulties tournament hosts
        face while hosting on other platforms. It has improved security to avoid
        unethical players from the tournament. Manage all your tournaments in
        one place whatever their structures and matches formats. Decide how
        players participate in your tournaments.
    </p>
    <Button>Learn More</Button>
</div>

<style>
    div {
        margin: 10em clamp(6em, 50%, 10vw);
        padding: 3em 6em;
        border: 0.5em solid #ffffff;
        border-radius: 4em;
        position: relative;
        box-sizing: border-box;
        background-clip: padding-box;
        background-color: #0f0b30bf;
        border: solid 0.25em transparent;
    }

    div:before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: -1;
        margin: -0.25em;
        border-radius: inherit;
        --deg: 90deg;
        background: linear-gradient(
            var(--deg),
            rgba(0, 240, 255, 1) 0%,
            rgba(87, 115, 255, 1) 46.88%,
            rgba(255, 0, 122, 1) 100%
        );
    }

    h2 {
        font-size: 3em;
        font-weight: bold;
        background: linear-gradient(
            90deg,
            #00f0ff 0%,
            #5773ff 46.87%,
            #ff007a 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 2rem;
    }

    p {
        margin-bottom: 2rem;
    }
</style>
