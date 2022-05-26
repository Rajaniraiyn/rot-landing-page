<script lang="ts">
  import { Route, router } from "tinro";
  import NavBar from "./components/NavBar.svelte";
  import Main from "./components/Main.svelte";
  import Bg from "./assets/bg.png";
  import Banner from "./components/Banner.svelte";
  import Features from "./components/Features.svelte";
  import VideoBanner from "./components/VideoBanner.svelte";
  import AboutSection from "./components/AboutSection.svelte";
  import Host from "./components/Host.svelte";
  import Testimonials from "./components/Testimonials.svelte";
  import ContactUs from "./components/ContactUs.svelte";
  import Footer from "./components/Footer.svelte";
  import Profile from "./components/Profile.svelte";

  router.mode.hash( )
</script>

<Route path="/">
  <main>
    <NavBar />
    <Main />
    <Banner />
    <Features />
    <VideoBanner />
    <AboutSection />
    <Host />
    <Testimonials />
    <ContactUs />
  </main>
  <Footer />
</Route>
<Route path="/profile">
  <Profile />
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
  }

  main {
    margin-inline: 5em;
    display: grid;
    gap: 5em;
  }

  div,
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

  ::-webkit-scrollbar-thumb:hover {
    background-color: #b0b0b0;
  }

  ::-webkit-scrollbar-thumb:active {
    background-color: gray;
  }
</style>
