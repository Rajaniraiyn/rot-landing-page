<script lang="ts">
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
  import Footer from "./components/Footer.svelte"
</script>

<div>
  <NavBar />
  <Main />
  <Banner />
  <Features />
  <VideoBanner />
  <AboutSection />
  <Host />
  <Testimonials />
  <ContactUs />
  <Footer />
</div>
<img src={Bg} alt="background" id="bg" />

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: white;
    background-color: #0f0b30;
    overflow-x: hidden;
  }
  
  div {
    margin-inline: 5em;
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
</style>
