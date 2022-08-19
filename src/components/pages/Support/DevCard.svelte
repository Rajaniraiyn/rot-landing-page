<script lang="ts">
  import Cb from "../../../assets/cb.svg"
  import Insta from "../../../assets/insta.svg"
  import LinkedIn from "../../../assets/linkdin.svg"

  export let img: any
  export let name: String
  export let links: any
</script>

<div class="wrapper">
  <div class="img-container">
    <img src={img} alt="">
  </div>
  <div class="contents">
    <h2>{name}<h2>
    <div class="sm-containers">
      <a href={links.portfolio} target="_blank" data-tinro-ignore><img src={Cb} alt=""></a>
      <a href={links.insta} target="_blank" data-tinro-ignore><img src={Insta} alt=""></a>
      <a href={links.linkedin} target="_blank" data-tinro-ignore><img src={LinkedIn} alt=""></a>
    </div>
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: clamp(2em, 50%, 5vw);
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
   
  .wrapper > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .wrapper .contents {
    flex-direction: column;
  } 

  h2 {
    margin-block: 1em;
    text-align: center;
  }

  .contents .sm-containers {
    margin-block: 1em;
    display: flex;
    gap: 0.5em;
  }

  .img-container img {
    width: 10vw;
    height: 20vh;
    border-radius: 20px;
  }

  .contents .sm-containers img {
    width: 5vw;
    height: 5vh;
  }
</style> 
