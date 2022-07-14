<script lang="ts">
    // import Image from "../../../../../assets/profile/Profilebackground.svg"
    import Image from "../../../../../assets/profile/samp_compressed.jpg"
    const stats =[
        {
            ability:"AGE",
            answer:"18"
        },
        {
            ability:"STYLE OF GAME PLAY",
            answer:"AGGERSIVE"
        },
        {
            ability:"NUMBER OF TOURNMENTS PLAYED",
            answer:"200"
        },
        {
            ability:"TEAM",
            answer:"NINJA"
        },
        {
            ability:"LEVEL",
            answer:"PLATINUM"
        },
        {
            ability:"HOURS PLAYED",
            answer:"7053.2"
        }
        
    ]
</script>

<div class="main">
    {#each stats as stat }
         {@const {ability,answer}=stat}
            <div class="footerimage"><img class="img" src={Image} alt="bgimg"></div>
            <div class="details">
                <h3>{ability}</h3>
                <span>{answer}</span>
            </div>       
    {/each}
</div>

<style>
    .main{
        margin-left: -1em;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-template-rows: repeat(2,1fr);
        gap: 5em;
        padding: 8em;
        
    }
    .footerimage{
        position: absolute;
        inset: 0;
        z-index: -999;
        mix-blend-mode: hue;
    }
    .details{
        display: grid;
        grid-template-rows: repeat(2,1fr);
        justify-items: center;
        align-items: center;
        text-align: center;
        color: white;
        --color-bg: rgba(15, 11, 48, 0.9);

        background: linear-gradient(90deg, var(--color-bg), var(--color-bg))
                padding-box,
            linear-gradient(
                    90deg,
                    rgba(0, 240, 255, 0.5) 0%,
                    rgba(87, 115, 255, 0.5) 46.88%,
                    rgba(255, 0, 122, 0.5) 100%
                )
                border-box;
        border: 4px solid transparent;
        border-radius: 3em;
        
    }
    h3,span{
        color:white;
    }
    .details:hover{
        transform: scale(1.03);
        transition: transform 400ms;
    }
</style>