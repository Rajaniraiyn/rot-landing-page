<script lang="ts">
    export let noBorder = false;
    export let hasIcon = false;
</script>

<button class:no-border={noBorder} class:has-icon={hasIcon}>
        <slot />
</button>

<style>
    button {
        margin: auto;
        position: relative;
        padding: 1em;
        box-sizing: border-box;
        color: #fff;
        background-color: #0f0b30;
        background-clip: padding-box;
        border: solid 0.25em transparent;
        border-radius: 5em;
    }
    .no-border {
        border: 0;
        background-color: transparent;
    }
    button:not(.no-border):before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: -1;
        margin: -0.25em;
        border-radius: inherit;
        background: linear-gradient(
            90deg,
            rgba(0, 240, 255, 1) 0%,
            rgba(87, 115, 255, 1) 46.88%,
            rgba(255, 0, 122, 1) 100%
        );
    }
    .has-icon {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1em;
    }
</style>
