<script lang="ts">
    import Img from "../assets/video-thumbnail.png";
    import PlayButton from "../assets/playbutton.svg";
    import Video from "../assets/dummy-video.mp4";
</script>

<div>
    <article>
        <p class="head">Let’s explore the</p>
        <h2 class="gradient">Region Of Tournaments</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            purus odio tempor rutrum...
        </p>
    </article>

    <section>
        <video src={Video}>
            <track kind="captions" />
        </video>
        <img src={PlayButton} alt="" />
    </section>
</div>

<style>
    div {
        display: grid;
        /* grid-template-rows: 1fr 1fr; */
        gap: 1rem;
    }

    section {
        position: relative;
        margin-inline: min(7.5em, 30vw);
    }
    section img {
        position: absolute;
    }
    section:last-child {
        justify-content: center;
        align-items: center;
        z-index: 1;
    }
    section video {
        border: 6px solid transparent;
        border-image: linear-gradient(#00f0ff, #5773ff, #ff007a);
        border-image-slice: 1;
        border-radius: 51px;
    }
    article{
        text-align: center;
        line-height: 1.6;
    }
    .gradient{
        font-weight: 800;
        font-size: 35px;
        background-image: linear-gradient(90deg, rgba(0,240,255,1) 0%, rgba(87,115,255,1) 20%, rgba(255,0,70,1) 88%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .head{
        font-size: 35px;
    }
</style>