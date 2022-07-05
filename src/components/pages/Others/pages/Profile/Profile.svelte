<script lang="ts">
  // import Image from "../../../../../assets/profile/Profilebackground.svg"
  import Image from "../../../../../assets/profile/samp_compressed.jpg";

  let userName = "raj007xx";
  const stats = [
    {
      ability: "AGE",
      answer: "18",
    },
    {
      ability: "STYLE OF GAME PLAY",
      answer: "AGGERSIVE",
    },
    {
      ability: "NUMBER OF TOURNMENTS PLAYED",
      answer: "200",
    },
    {
      ability: "TEAM",
      answer: "NINJA",
    },
    {
      ability: "LEVEL",
      answer: "PLATINUM",
    },
    {
      ability: "HOURS PLAYED",
      answer: "7053.2",
    },
  ];
</script>

<div class="outer-wrapper">
  <div class="profile-container">
    <div class="profile-wrapper">
      <img src={Image} alt="" class="profile-pic" />
      <h2>
        <span class="user-name">{userName}</span>
        <small style="font-weight: normal; color: grey">#909090</small>
      </h2>
    </div>
    <div class="bottom-wrapper">
      <div class="rank" style="font-size: 1.5em">
        Rank: <big style="font-weight: bold">Legendary</big>
      </div>
      <div class="fav-game" style="font-size: 1.5em">
        Favourite Game: <big style="font-weight: bold">eFootball 2022</big>
      </div>
    </div>
  </div>
  <div class="main">
    {#each stats as stat}
      {@const { ability, answer } = stat}
      <!-- <div class="footerimage"><img class="img" src={Image} alt="bgimg" /></div> -->
      <div class="details">
        <h3>{ability}</h3>
        <span>{answer}</span>
      </div>
    {/each}
  </div>
</div>
s

<style>
  .outer-wrapper {
    padding-inline: 8em;
    margin-top: 4em;
  }
  .main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    height: 100%;
    gap: 5em;
    padding-block: 5em;
    /* margin-top: 2em; */
  }
  /* .footerimage {
    position: absolute;
    inset: 0;
    z-index: -999;
    mix-blend-mode: hue;
  } */

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .profile-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2em;
  }
  .profile-wrapper {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    align-items: center;
    gap: 2em;
  }

  .bottom-wrapper {
    display: flex;
    gap: 3em;
  }

  .details {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    text-align: center;
    /* background-color: rgba(250, 235, 215, 0.586); */
    background-color: #33333370;
    border-radius: 1em;
    transition: transform 1000ms ease-in-out;
    transition: background-color 600ms;
  }
  /* h3,
  span {
    color: rgb(0, 0, 0);
  } */
  .details:hover {
    transform: scale(1.03);
    background-color: antiquewhite;
    color: rgb(0, 0, 0);
  }

  .user-name {
    color: inherit;
    font-size: 2em;
    font-weight: bold;
    transition: background ease-in-out;
  }

  .user-name:hover {
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
</style>
