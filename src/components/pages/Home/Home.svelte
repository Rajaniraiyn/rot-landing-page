<script lang="ts">
  import NavBar from "./components/NavBar.svelte";
  import Main from "./components/Main.svelte";
  import Banner from "./components/Banner.svelte";
  import Features from "./components/Features.svelte";
  import VideoBanner from "./components/VideoBanner.svelte";
  import AboutSection from "./components/AboutSection.svelte";
  import Host from "./components/Host.svelte";
  import Testimonials from "./components/Testimonials.svelte";
  import ContactUs from "./components/ContactUs.svelte";
  import Footer from "./components/Footer.svelte";
</script>

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

<style>
  main {
    margin-inline: clamp(1rem, -1.8571rem + 9.1429vw, 5rem);
    display: grid;
    gap: 5em;
    place-items: center stretch;
    justify-content: center;
  }
</style>
