<script lang="ts">
    import Bg from "../../../../../assets/Teams/gamer.jpg"
</script>

<div class="main">
    <div class="part1" style="--img-url:url({Bg})">
        <div class="overlay">
            <h2 class="teamname">Rockers</h2>
        </div>
    </div>
    <div class="teammates">
        <h3>Team Mates</h3>
        <ul>
            <li>SIYAM</li>
            <li>RAJ</li>
            <li>JENIN</li>
        </ul>
        <h3 id="leave">LEAVE</h3>
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
    .teamname{
        font-size: 30px;
        text-align:left;
        margin-top: 11em;
        margin-left: 1em;
    }
    .teammates{
        padding: 1em;
    }
    .teammates>ul{
        list-style-type: none;
        padding: 0em;
    }
    li{
        list-style-type: none;
    }
    #leave{
        font-style: italic;
        text-align: end;
        margin-right: 2em;
    }
</style>