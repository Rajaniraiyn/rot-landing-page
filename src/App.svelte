<script lang="ts">
  import NavBar from "./components/NavBar.svelte";
  import Main from "./components/Main.svelte";
  import Bg from "./assets/bg.png";
</script>

<div>
  <NavBar />
  <Main />
  <img src={Bg} alt="background" id="bg">
</div>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      color: white;
  }
  div, #bg {
    position: absolute;
    inset: 0;
  }

  #bg {
    z-index: -99999;
    width: 100vw;
    height: 100vh;
  }
</style>
