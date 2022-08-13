<script lang="ts">
  import { Route, router } from "tinro";
  import Bg from "./assets/bg.png";
  import Home from "./components/pages/Home/Home.svelte";
  import Others from "./components/pages/Others/Others.svelte";
  import About from "./components/pages/About/About.svelte"

  router.mode.hash();
</script>

<Route path="/">
  <Home />
</Route>
<Route path="/profile/*">
  <Others />
</Route>
<Route path="/company/*">
   <About />
</Route>

<img src={Bg} alt="background" id="bg" />

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: white;
    background-color: #0f0b30;
    overflow-x: hidden;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
    font-size: clamp(0.5rem, 0.1429rem + 1.1429vw, 1rem);
  }

  #bg {
    position: absolute;
    inset: 0;
  }

  #bg {
    z-index: -99999;
    width: 100vw;
    height: 100vh;
    -webkit-user-drag: none;
    pointer-events: none;
  }

  :root::-webkit-scrollbar {
    width: 0.85rem;
  }

  :root::-webkit-scrollbar-thumb {
    background: #c2bcbc;
    background-clip: padding-box;
    border: 0.25rem solid transparent;
    border-radius: 0.5rem;
    box-shadow: none;
    min-height: 50px;
  }

  :root::-webkit-scrollbar-track {
    border: 0;
    background-color: #0f0b30;
  }

  :root::-webkit-scrollbar-thumb:hover {
    background-color: #b0b0b0;
  }

  :root::-webkit-scrollbar-thumb:active {
    background-color: gray;
  }
</style>
