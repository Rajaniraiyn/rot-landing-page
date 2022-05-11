<script lang="ts">
    import Img from "../assets/video-thumbnail.png";
    import PlayButton from "../assets/playbutton.svg";
    import Video from "../assets/dummy-video.mp4";
</script>

<div>
    <article>
        <p>Let’s explore the</p>
        <h2>Region Of Tournaments</h2>
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
        grid-template-rows: 1fr 1fr;
        gap: 1rem;
    }

    section {
        position: relative;
        margin-inline: min(7.5em, 30vw);
    }
    section img,
    section video {
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
</style>
