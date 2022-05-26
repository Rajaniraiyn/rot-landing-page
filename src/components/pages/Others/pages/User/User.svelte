<script lang="ts">
    
    import valo from "../../../../../assets/valo.png";
    import pes from "../../../../../assets/pes.png";
    import cod from "../../../../../assets/COD.png";
</script>

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
                <img src={valo} alt="valorant" class="gameimg" />
                <div class="overlay">
                    <h3>Valorant</h3>
                    <span class="date">DATE - 22/7/22</span>
                    <span class="time">TIME - 3.45AM</span>
                    <span class="region">REGION - IND</span>
                    <a href="" />
                </div>
            </div>
            <div class="games">
                <img src={pes} alt="pes" class="gameimg" />
                <div class="overlay">
                    <h3>PES</h3>
                    <span class="date">DATE - 22/7/22</span>
                    <span class="time">TIME - 3.45AM</span>
                    <span class="region">REGION - IND</span>
                    <a href="" />
                </div>
            </div>
            <div class="games">
                <img src={cod} alt="COD" class="gameimg" />
                <div class="overlay">
                    <h3>Call of Duty</h3>
                    <span class="date">DATE - 22/7/22</span>
                    <span class="time">TIME - 3.45AM</span>
                    <span class="region">REGION - IND</span>
                    <a href="" />
                </div>
            </div>
        </div>
    </div>
</div>


<style>
    .display {
        display: grid;
    }
    .tournments {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5em;
        height: 30vh;
        padding: 2.5em;
    }

    .games {
        text-align: center;
        padding: 1em;
        position: relative;
    }

    .games .overlay {
        position: absolute;
        inset: 0;
        z-index: -99;
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0) 100%
        );
        border-radius: 10px;
        display: grid;
        gap: 0em;
    }

    .gameimg {
        position: absolute;
        inset: 0;
        z-index: -999;
        border-radius: 10px;
    }

    .time,
    .date,
    .region {
        text-align: left;
        margin-left: 1em;
    }

    h3 {
        justify-content: center;
        font-weight: bold;
    }
</style>