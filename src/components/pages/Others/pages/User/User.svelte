<script lang="ts">
    import UpcommingTournments from "./components/UpcommingTournments.svelte";
</script>

<div class="display">
    <div class="wallet">
        <h1>Wallet</h1>
        <p>INR balance</p>
        <p>ROT coins</p>
    </div>

    <div>
        <UpcommingTournments />
    </div>
</div>

<style>
    .display {
        display: grid;
    }
</style>
