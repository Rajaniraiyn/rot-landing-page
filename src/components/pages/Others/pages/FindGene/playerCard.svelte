<script lang="ts">
  export let playerBanner: any;
  export let playerName: string;
  export let playerGame: string;
</script>

<div class="container">
  <div class="content-overlay" />
  <img src={playerBanner} alt="" />
  <div>
    <div class="tooltip">{playerName}</div>
    <div class="tooltip">{playerGame}</div>
  </div>
</div>

<style>
  .container {
    position: relative;
    width: 90%;
    max-width: 400px;
    margin: auto;
  }
  img {
    inset: 0;
    border: none;
    border-radius: 10px;
    height: 25vh;
    width: 100%;
    transition: all 0.4s ease-in-out 0s;
  }
  .container:hover {
    cursor: pointer;
  }
  .content-overlay {
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    border-radius: 10px;
    height: 100%;
    width: 100%;
    inset: 0;
    opacity: 0;
    transition: all 0.4s ease-in-out 0s;
  }
  .tooltip {
    height: 99%;
    position: absolute;
    text-align: center;
    padding-left: 1em;
    padding-right: 1em;
    width: 100%;
    top: 60%;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease-in-out 0s;
  }
  .container:hover .tooltip {
    top: 80%;
    left: 50%;
    opacity: 1;
  }
  .container:hover .tooltip:last-child {
    top: 100%;
  }
  .container:hover .content-overlay {
    opacity: 1;
  }
  .tooltip {
    color: #fff;
    font-weight: 500;
    letter-spacing: 0.15em;
    margin-bottom: 0.5em;
    text-transform: uppercase;
  }
</style>
