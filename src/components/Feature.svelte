<script lang="ts">
    export let content;
    export let icon;
</script>

<div>
    <img src={icon} alt="" />
    <p>{content}</p>
</div>

<style>
    div{
        display: grid;
    }
</style>
