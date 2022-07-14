<script lang="ts">
    import Bg from "../../../../../assets/Teams/gamer.jpg"
</script>

<div class="main">
    <div class="part1" style:--img-url="url({Bg})">
        <div class="overlay">
            <h2 class="teamname">Rockers</h2>
        </div>
    </div>
    <div class="teammates">
        <div class="team">
            <h3>Team Mates</h3>
        </div>
        <div>
            <ul>
                <li>SIYAM</li>
                <li>RAJ</li>
                <li>JENIN</li>
            </ul>
        </div>
        <div>
            <h3 id="leave"> LEAVE </h3>
        </div>
    </div>
</div>

<style>
    .main{
        display: grid;
        grid-template-rows: 380px 200px;
        padding: 3em;
    }
    .part1{
        overflow: hidden;
        border-radius: 10px;
        background: var(--img-url) top center/100% 100%;
        transition: background 0.4s;
    }
    .part1:hover{
        background-size: 110% 110%;
    }
    .teamname{
        font-size: 30px;
        text-align:left;
        margin-top: 11em;
        margin-left: 1em;
    }
    .teammates{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: repeat(2,1fr);
        padding: 1em;
    }
    .teammates>div>ul{
        list-style-type: none;
        padding: 0em;
    }
    .team{
        grid-column-start: 1;
        grid-column-end: 3;
    }
    li{
        list-style-type: none;
    }
    #leave{
        padding: 0.5em;
        background-color: black;
        display: inline-block;
        transform: skewX(-20deg);
        margin-top: 3em;
        margin-left: 20em;
        transition:transform 300ms;
    }
    #leave:hover{
        --deg: 90deg;
        background: linear-gradient(
            var(--deg),
            rgba(0, 240, 255, 1) 0%,
            rgba(87, 115, 255, 1) 46.88%,
            rgba(255, 0, 122, 1) 100%
        );
        transform: scale(1.2);
        will-change: background,transform;
        transition:transform 300ms;
    }
</style>