<script lang="ts">
  import TeamCard from "./TeamCard.svelte";
  import PlayerCard from "./playerCard.svelte";

  // Team Image imports
  import Acend from "../../../../../assets/FindGene/Teams/acend.png";
  import T1 from "../../../../../assets/FindGene/Teams/T1.png";
  import BLL from "../../../../../assets/FindGene/Teams/BLL.png";
  import Fnatic from "../../../../../assets/FindGene/Teams/fnatic.png";

  // Player Banner imports
  import Ninja from "../../../../../assets/FindGene/Players/ninja.png";

  // Types
  type Teams = {
    backImg: any;
    teamName: string;
  };
  type Players = {
    playerBanner: any;
    playerName: string;
    playerGame: string;
  };

  // Details of teams
  const teamDetails: Teams[] = [
    {
      backImg: Acend,
      teamName: "Acend",
    },
    {
      backImg: T1,
      teamName: "T1",
    },
    {
      backImg: BLL,
      teamName: "BLL Esports",
    },
    {
      backImg: Fnatic,
      teamName: "Fnatic",
    },
  ];

  // Details of players
  const playerDetails: Players[] = [
    {
      playerBanner: Ninja,
      playerName: "Ninja",
      playerGame: "Valorant",
    },
  ];
</script>

<div class="page">
  <div class="header">
    <h3>Find your Gaming DNA</h3>
    <h3>Across the Globe</h3>
  </div>
  <section class="teams">
    <p>Popular Valorant Teams</p>
    <section>
      {#each teamDetails as team}
        <TeamCard teamBackground={team.backImg} teamName={team.teamName} />
      {/each}
    </section>
  </section>
  <section>
    <p>Iconic Individuals</p>
    <section>
      {#each playerDetails as player}
        <PlayerCard
          playerBanner={player.playerBanner}
          playerName={player.playerName}
          playerGame={player.playerGame}
        />
      {/each}
    </section>
  </section>
</div>

<style>
  .page {
    display: flex;
    flex-direction: column;
    gap: 2em;
    padding: 1em 3em;
  }
  h3 {
    font-size: 2em;
    font-weight: bold;
    color: white;
  }
  .header {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  div section {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  section > section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(auto, 1fr);
    grid-column-gap: 0ch;
    max-width: 100%;
  }
  p {
    font-size: 1.5em;
    font-weight: bold;
    color: white;
  }
</style>
