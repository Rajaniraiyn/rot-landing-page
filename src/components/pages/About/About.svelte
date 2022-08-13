<script lang="ts">
  import Bg from "../../../assets/company/companybg.jpg";

  // Component Imports
  import Footer from "../Home/components/Footer.svelte";
  import NavBar from "../Home/components/NavBar.svelte";

  const content = `The Region of Tournaments was founded by a group of three enthustiastic web developers and passionate programmers from Kumaraguru College of Technology, Jenin Immanuel, Rajanirayin and Siyam Sundar who are doing their freshman year in KCT. The main motive of the developers is to develop a social media platform for gamers to showcase their skills and talents through eSports and tournmaents. This project is part of the PBL framework in our college, as our annual project.`;
</script>

<div class="main">
  <div class="background">
    <img class="img" src={Bg} alt="" />
  </div>
  <NavBar />
  <div class="header-section">
    <h2 class="team">Region Of Tournaments</h2>
    <h3>About Us</h3>
  </div>
  <div class="content-section">
    <p class="abtus">{content}</p>
    <img src={Bg} alt="" />
  </div>
  <div>
    <Footer bgColor="transparent" />
  </div>
</div>

<style>
  .main {
    display: grid;
    gap: 3em;
    width: 100vw;
  }

  .background {
    overflow-y: hidden;
    height: 100vh;
    position: absolute;
    z-index: -99;
  }

  .background > img {
    width: 100vw;
    height: 100vh;
    opacity: 0.1;
    mix-blend-mode: screen;
  }

  .header-section,
  .content-section {
    display: grid;
    gap: 3em;
  }
  .header-section {
    padding: 0 10em;
  }

  h2 {
    font-size: 3.75em;
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

  h3 {
    font-size: 2.5em;
    font-weight: bold;
  }

  .content-section {
    grid-template-columns: 1.1fr 0.9fr;
    padding: 2em;
  }

  .content-section > img {
    width: 500px;
    height: 350px;
    border: 10px solid black;
    border-radius: 20px;
    transition: transform 0.4s ease-in-out;
  }

  .abtus {
    padding: 0 5em;
    font-size: 1.5em;
  }

  .content-section > img:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
</style>
