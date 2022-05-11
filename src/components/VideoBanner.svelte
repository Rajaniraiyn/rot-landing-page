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
        <div class="controls">
            <img src={PlayButton} alt="" />
        </div>
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
        /* margin-inline: min(7.5em, 30vw); */
    }

    .controls {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
    }

    .controls img {
        max-width: 10%;
    }

    section:last-child {
        display: grid;
        justify-content: center;
        align-items: center;
        z-index: 1;
    }

    section video {
        max-width: calc(100vw - 10em);
        border-radius: 2em;
        --color-bg: #3a346e;
        background: linear-gradient(var(--color-bg), var(--color-bg))
                padding-box,
            linear-gradient(
                    90deg,
                    rgba(0, 240, 255, 1) 0%,
                    rgba(87, 115, 255, 1) 46.88%,
                    rgba(255, 0, 122, 1) 100%
                )
                border-box;
        border: 4px solid transparent;
    }
    
    article {
        text-align: center;
        line-height: 1.6;
    }

    .gradient {
        font-weight: 800;
        font-size: 35px;
        background-image: linear-gradient(
            90deg,
            rgba(0, 240, 255, 1) 0%,
            rgba(87, 115, 255, 1) 20%,
            rgba(255, 0, 70, 1) 88%
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .head {
        font-size: 35px;
    }
</style>
