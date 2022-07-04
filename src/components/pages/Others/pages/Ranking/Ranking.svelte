<script lang="ts">
  const currentUser: String = "Raj";

  const populateTable = [
    {
      rank: 1,
      name: "Jenin",
      country: "IND",
      points: 5000,
      team: "F1",
    },
    {
      rank: 2,
      name: "Jenin",
      country: "IND",
      points: 4950,
      team: "F1",
    },
    {
      rank: 3,
      name: "Jenin",
      country: "IND",
      points: 4900,
      team: "F1",
    },
    {
      rank: 4,
      name: "Jenin",
      country: "IND",
      points: 4850,
      team: "F1",
    },
    {
      rank: 5,
      name: "Jenin",
      country: "IND",
      points: 4800,
      team: "F1",
    },
    {
      rank: 6,
      name: "Jenin",
      country: "IND",
      points: 4750,
      team: "F1",
    },
    {
      rank: 7,
      name: "Raj",
      country: "IND",
      points: 4700,
      team: "Acend",
    },
    {
      rank: 8,
      name: "Jenin",
      country: "IND",
      points: 4650,
      team: "F1",
    },
    {
      rank: 9,
      name: "Jenin",
      country: "IND",
      points: 4600,
      team: "F1",
    },
    {
      rank: 10,
      name: "Jenin",
      country: "IND",
      points: 4650,
      team: "F1",
    },
    {
      rank: 11,
      name: "Jenin",
      country: "IND",
      points: 4600,
      team: "F1",
    },
    {
      rank: 12,
      name: "Jenin",
      country: "IND",
      points: 4550,
      team: "F1",
    },
    {
      rank: 13,
      name: "Jenin",
      country: "IND",
      points: 4500,
      team: "F1",
    },
    {
      rank: 14,
      name: "Jenin",
      country: "IND",
      points: 4450,
      team: "F1",
    },
    {
      rank: 15,
      name: "Jenin",
      country: "IND",
      points: 4400,
      team: "F1",
    },
  ];
</script>

<div>
  <div class="head">
    <div>
      <input type="search" placeholder="  search..." class="roundsearch" />
    </div>
    <div class="dropdown">
      <button class="drop">General</button>
      <div class="dropcontent">
        <a href="#0">LINK 1</a>
        <a href="#0">LINK 2</a>
        <a href="#0">LINK 3</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="drop">Competitive</button>
      <div class="dropcontent">
        <a href="#0">LINK 1</a>
        <a href="#0">LINK 2</a>
        <a href="#0">LINK 3</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="drop">Competitive</button>
      <div class="dropcontent">
        <a href="#0">LINK 1</a>
        <a href="#0">LINK 2</a>
        <a href="#0">LINK 3</a>
      </div>
    </div>
  </div>
  <div class="rank">
    <table class="table">
      <tr>
        <th>RANK</th>
        <th>NAME</th>
        <th>REGION</th>
        <th>POINTS</th>
        <th>TEAM</th>
      </tr>
      {#each populateTable as item}
        <tr class={currentUser === item.name ? "you" : ""}>
          <td>{item.rank}</td>
          <td>{item.name}</td>
          <td>{item.country}</td>
          <td>{item.points}</td>
          <td>{item.team}</td>
        </tr>
      {/each}
    </table>
  </div>
</div>

<style>
  .head {
    display: flex;
    padding: 0;
    margin-top: 1em;
    justify-content: space-evenly;
  }

  .roundsearch {
    border-radius: 5px;
    width: 250px;
    height: 54px;
  }
  .drop {
    background-image: linear-gradient(
      90deg,
      rgba(0, 240, 255, 1) 0%,
      rgba(87, 115, 255, 1) 20%,
      rgb(255, 45, 101) 88%
    );
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 250px;
    height: 54px;
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }
  .dropcontent {
    position: absolute;
    background-color: #f9f9f9;
    min-width: 250px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
    z-index: 1;
    opacity: 0;
    height: 0;
    pointer-events: none;
    transition: all 0.4s ease;
  }
  .dropcontent a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  }

  .dropcontent a:hover {
    background-color: #d0d0d0;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  }

  .dropdown:hover .dropcontent {
    pointer-events: all;
    opacity: 1;
    height: auto;
  }

  .rank {
    table-layout: auto;
    /* margin-right: 2em;
        margin-left: 2em; */
  }
  .table {
    border-collapse: collapse;
    margin: 30px 0;
    font-size: 0.9em;
    min-width: 100%;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }

  td,
  th {
    border-bottom: 1px solid #dddddd;
    text-align: left;
    padding: 14px;
    inset: 0;
  }

  th {
    background: rgb(82, 11, 99);
  }

  .you {
    color: #fff;
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff,
      0 0 42px rgb(136, 0, 255), 0 0 82px rgb(136, 0, 255),
      0 0 92px rgb(136, 0, 255), 0 0 102px rgb(136, 0, 255),
      0 0 151px rgb(136, 0, 255);
  }

  tr:nth-child(even) {
    background-color: #13042f;
  }
  .table tr:last-of-type {
    border-bottom: 2px solid rgb(82, 11, 99);
  }
</style>
