<script lang="ts">
    import Button from "./Button.svelte";
</script>

<div>
    <h2>Become a Host and Host Your Events With Ease</h2>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit est ac
        nulla faucibus proin nisl augue. Vestibulum sem scelerisque suspendisse
        praesent pretium non. At mattis bibendum ut sed praesent. Nam at id
        elementum gravida.
    </p>
    <Button>Learn More</Button>
</div>

<style>
    div {
        margin: 10em 15em;
        padding: 3em 10em;
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
</style>
