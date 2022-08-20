<script lang="ts">
  import Bg from "../../../assets/company/companybg.jpg";
  import Team from "../../../assets/team.jpg"

  // Component Imports
  import Footer from "../Home/components/Footer.svelte";
  import NavBar from "../Home/components/NavBar.svelte";

  const content = `The Region of Tournaments was founded by a group of three enthustiastic web developers and passionate programmers from Kumaraguru College of Technology, Jenin Immanuel, Rajaniraiyn and Siyam Sundar who are doing their freshman year in KCT. The main motive of the developers is to develop a social media platform for gamers to showcase their skills and talents through eSports and tournmaents. This project is part of the PBL framework in our college, as our annual project.`;
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
    <div class="content"><p class="abtus">{content}</p></div>
    <div class="content-img"><img src={Team} alt="" /></div>
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
    gap: 3em;
  }

  .header-section {
    display: grid;
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
    display: flex;
    justify-content: space-around;
    padding: 2em 0;
  }

  .content-section div {
    width: 30vw;
  }

  .content-section .content p {
    font-size: clamp(1.3em, 15vw, 1.4em);
  }

  .content-section .content-img {
    height: 50vh;
    transition: transform 0.3s ease-in-out;
  }

  .content-img > img {
    height: 100%;
    width: 100%;
      box-sizing: border-box;
      border-radius: 1.25em;
      border: 1px solid #ffffff;
      --color-bg: #0f0b30;

      background: linear-gradient(90deg, var(--color-bg), var(--color-bg))
              padding-box,
          linear-gradient(
                  90deg,
                  rgb(0, 240, 255) 0%,
                  rgb(87, 115, 255) 46.88%,
                  rgb(255, 0, 122) 100%
              )
              border-box;
      border: 4px solid transparent;

  }

  .content-section .content-img:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    .content-section {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }

    .content-section div {
      width: 80vw;
    }

    .content-section .content-img {
      height: 25vh;
      width: 50vw;
    }
  }
</style>
