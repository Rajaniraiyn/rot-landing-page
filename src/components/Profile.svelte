<script lang="ts">
    import Bg from "../assets/bg.png";
    import Message from "../assets/message.png"
    import Bell from "../assets/bell.png"
    import valo from "../assets/valo.png"
    import pes from "../assets/pes.png"
    import cod from "../assets/COD.png"
</script>

<div class="main">
    <div class="head">
        <a  href="/" class="logo">ROT</a>
        <div class="search">
            <input type="search" placeholder="  search..." class="roundsearch"/>
        </div>
        <span class="circle"></span>
        <img src={Message} alt="message" class="mess">
        <img src={Bell} alt="bell" class="bell">
    </div>
    <aside>
        <ul>
            <li><a href="">HOME</a></li>
            <li><a href="">RANKING</a> </li>
            <li><a href="">PROFILE</a></li>
            <li><a href="">TEAM</a></li>
            <li><a href="">TOURNAMENTS</a></li>
            <li><a href="">E-SPORTS</a></li>
            <li><a href="">FIND YOUR GENE</a></li>
        </ul>
    </aside>
    <div class="display">
        <div class="wallet">
            <h1>Wallet</h1>
            <p>INR balance</p>
            <p>ROT coins</p>
        </div>

        <div>
            <h2>UPCOMING TOURNMENTS</h2>
            <div class="tournments">
                <div class="games">
                    <h3>Valorant</h3> 
                    <img src={valo} alt="valorant" class="gameimg">
                </div>
                <div class="games">
                    <h3>PES</h3> 
                    <img src={pes} alt="pes" class="gameimg">
                </div>
                <div class="games">
                    <h3>Call of Duty</h3> 
                    <img src={cod} alt="COD" class="gameimg">
                </div>
            </div>
        </div>
    </div> 
</div>
<img src={Bg} alt="background" id="bg" />

<style>
     .main{
        display: grid;
        grid-template-columns: 260px 1fr;
        grid-template-rows: 50px 1fr;
        grid-column-gap: 0ch;
        max-width: 100%;
        height: 100vh;
        position: fixed;
    }

    .head{
        display: flex;
        background: black;
        width: 100vw;
        height: 50px; 
        align-items: center;
        grid-column: span 2;
    }

    .logo{
        font-size: 1.5em;
        align-items: initial;
        margin-left: 1.5em;
    }

    .search{
        margin-left: 3em;
    }

    .roundsearch{ 
        border-radius: 15px;
        border: 1px #000 solid;
    }

    .mess{
        height: 23px;
        width: 23px;
        margin-left: 55em;
    }

    .bell{
        height: 23px;
        width: 23px;
        margin-left: 2em;
    }

    #bg{
        position: absolute;
        inset: 0;
        z-index: -9999
        }

    aside{
        background: black;
        width: 250px;
    }

    aside ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 3em;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
        height:93.5vh; 
    }

    a{
        color: white;
        text-decoration: none;
    }

    a::after{
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background:white ;
    }

    a:hover::after{
        width: 100%;
        transition: width 500ms;
    }

    .display{
        display: grid;
    }
    .tournments{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap: 1.5em;
        height: 30vh;
        padding: 2.5em;
    }

    .games{
        background: black;
        border-radius: 10px
    }

    .gameimg{
        opacity: 0.4;
    }

    h3{
        font-weight: bold;
    }
    
</style>