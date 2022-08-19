<script lang="ts">
  import NavBar from "../Home/components/NavBar.svelte";
  import ContactUs from "../Home/components/ContactUs.svelte";
  import Footer from "../Home/components/Footer.svelte";
  import DevCard from "./DevCard.svelte";

  import Jenin from "../../../assets/Devs/jenin.jpg";
  import Raj from "../../../assets/Devs/rajaniraiyn.jpg";
  
  const iter = [1, 1, 1]

  const data = [
    {
      img: Jenin,
      name: "Jenin Immanuel",
      links: {
        portfolio: "https://jeninimmanuel.netlify.app/#",
        insta: "https://www.instagram.com/jeninimmanuel/",
        linkedin: "https://www.linkedin.com/in/jenin-immanuel-102b6722b/"
      }
    },
    {
      img: Raj,
      name: "Rajaniraiyn",

      links: {
        portfolio: "https://rajaniraiyn.github.io/",
        insta: "https://www.instagram.com/rajaniraiyn/",
        linkedin: "https://www.linkedin.com/in/rajaniraiyn/"
      }
    },
    {
      img: Jenin,
      name: "Siyam Sundar",
      links: {
        portfolio: "",
        insta: "https://www.instagram.com/siyam_333/",
        linkedin: ""
      }
    },
  ]
</script>

<NavBar />
<div class="contact-devs">
  <h2>Find the Devs</h2>
  <div class="content">
    Feel free to leave a message in our social media handles if you have any doubts
  </div>
  <div class="cards-container"> 
    {#each data as i}
      <DevCard {...i}/>  
    {/each}
  </div>

</div>
<ContactUs heading="Leave a Message"/>
<Footer />

<style> 
  .contact-devs {
    padding: 5em 10em;
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

  .content {
    margin-block: 1.3em;
    font-size: 1.1em;
  }

  .cards-container {
    display: flex;
    gap: 1.5em;
    height: auto;
    margin-top: 5em;
  }
</style>
