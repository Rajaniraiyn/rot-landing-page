<script lang="ts">
  import { Route } from "tinro";
  import Bg from "../../../assets/bg.png";
  import Header from "./components/Header.svelte";
  import NavBar from "./components/NavBar.svelte";
  import Ranking from "./pages/Ranking/Ranking.svelte";
  import User from "./pages/User/User.svelte";
  import FindGene from "./pages/FindGene/FindGene.svelte";
  import Profile from "./pages/Profile/Profile.svelte";
  import Team from "./pages/Team/Team.svelte";
  import Tour from "./pages/Tournments/Tour.svelte";
  import Esport from "./pages/E-sport/Esport.svelte";
</script>

<div class="main">
  <Header />
  <nav>
    <NavBar />
  </nav>
  <section>
    <Route path="/">
      <User />
    </Route>
    <Route path="/ranking">
      <Ranking />
    </Route>
    <Route path="/find">
      <FindGene />
    </Route>
    <Route path="/profile">
      <Profile />
    </Route>
    <Route path="/team">
      <Team />
    </Route>
    <Route path="/tour">
      <Tour />
    </Route>
    <Route path="/e-spor">
      <Esport />
    </Route>
  </section>
</div>
<img src={Bg} alt="background" id="bg" />

<style>
  .main {
    display: grid;
    grid-template-columns: 260px 1fr;
    grid-template-rows: 50px 1fr;
    grid-column-gap: 0ch;
    max-width: 100%;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    padding-top: 50px;
  }

  #bg {
    position: absolute;
    inset: 0;
    z-index: -9999;
    background-repeat: no-repeat;
  }

  :global(::-webkit-scrollbar) {
    width: 0.85rem;
  }

  :global(::-webkit-scrollbar-thumb) {
    background: #c2bcbc;
    background-clip: padding-box;
    border: 0.25rem solid transparent;
    border-radius: 0.5rem;
    box-shadow: none;
    min-height: 50px;
  }

  :global(::-webkit-scrollbar-track) {
    border: 0;
    background-color: #0f0b30;
  }

  :global(::-webkit-scrollbar-thumb:hover) {
    background-color: #b0b0b0;
  }

  :global(::-webkit-scrollbar-thumb:active) {
    background-color: gray;
  }
</style>
