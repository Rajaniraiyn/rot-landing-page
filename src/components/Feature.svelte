<script lang="ts">
    export let content;
    export let icon;
</script>

<div>
    <img src={icon} alt="" />
    <p>{content}</p>
</div>

<style>
    div {
        display: grid;
        justify-items: center;
        text-align: center;
        padding: 2em;
        gap: 1em;
        border-radius: 1em;
        backdrop-filter: blur(10px);
        --color-bg: #3a346e;
        width: clamp(5em, 30%, 20vw);
        background: linear-gradient(var(--color-bg), var(--color-bg))
                padding-box,
            linear-gradient(
                90deg,
                rgba(0, 240, 255, 1) 0%,
                rgba(87, 115, 255, 1) 46.88%,
                rgba(255, 0, 122, 1) 100%
            ) border-box;
        border: 4px solid transparent;
    }
</style>
