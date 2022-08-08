<script lang="ts">
  import valo from "../../../../../../assets/valo.jpg";
  import pes from "../../../../../../assets/pes.jpg";
  import cod from "../../../../../../assets/COD.jpg";

  const games = [
    {
      name: "Valorant",
      img: valo,
      date: "22/7/22",
      time: "3.45AM",
      region: "IND",
      link: "#0",
    },
    {
      name: "PES",
      img: pes,
      date: "22/7/22",
      time: "3.45AM",
      region: "IND",
      link: "#0",
    },
    {
      name: "Call of Duty",
      img: cod,
      date: "22/7/22",
      time: "3.45AM",
      region: "IND",
      link: "#0",
    },
  ];

  function santizeImgURL(url: string) {
    url = url.replaceAll("\\", "");
    const assets = /^\.\/assets/;
    url = url.replace(assets, ".");
    return url;
  }

  function bgImage(element: HTMLElement) {
    let url = element.getAttribute("data-img");
    url = santizeImgURL(url);
    url = `--img-url:url(${url})`;
    element.setAttribute("style", url);
  }
</script>

<h2>Upcoming Tournaments</h2>
<div class="tournments">
  {#each games as game}
    {@const { name, img, date, time, region, link } = game}
    <div class="games" data-img={img} use:bgImage>
      <!-- <img src={img} alt={name} class="gameimg" /> -->
      <div class="overlay">
        <h3>{name}</h3>
        <span class="date">DATE - {date}</span>
        <span class="time">TIME - {time}</span>
        <span class="region">REGION - {region}</span>
        <a href={link}>Register</a>
      </div>
    </div>
  {/each}
</div>

<style>
  h2 {
    padding-inline: 3rem;
    font-size: 3em;
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
  .tournments {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5em;
    padding: 2.5em;
    overflow: hidden;
  }

  .games {
    text-align: center;
    overflow: hidden;
    border-radius: 10px;
    background: var(--img-url) top center/100% 100%;
    transition: background 0.4s;
  }

  .games:hover {
    background-size: 110% 110%;
  }

  .overlay {
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    align-items: space-between;
    padding: 1em;
    aspect-ratio: 3/2;
  }

  span {
    text-align: left;
    margin-left: 1em;
  }

  h3 {
    justify-content: center;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 1.2em;
  }
</style>
