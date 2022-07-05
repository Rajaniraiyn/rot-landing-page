<script lang="ts">
  import UpcommingTournments from "./components/UpcommingTournments.svelte";

  let moneyStructure = {
    inr: 25000,
    rotCoins: 10,
  };
</script>

<div class="display">
  <div class="wallet">
    <h1>Wallet</h1>
    <div>
      <p><big>INR balance:</big> ₹{moneyStructure.inr}</p>
      <p><big>ROT coins:</big> {moneyStructure.rotCoins}</p>
    </div>
  </div>

  <div>
    <UpcommingTournments />
  </div>
</div>

<style>
  .display {
    display: grid;
  }

  big {
    font-weight: bolder;
  }
  .wallet {
    padding: 3rem;
    display: grid;
    place-items: start;
  }

  .wallet > h1 {
    font-size: 3em;
    font-weight: bold;
    background: linear-gradient(
      90deg,
      #00f0ff 0%,
      #5773ff 46.87%,
      #ff007a 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .wallet > div {
    display: flex;
    align-items: flex-start;
    gap: 10rem;
  }
</style>
