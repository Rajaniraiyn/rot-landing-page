<script lang="ts">
    import linkdin from "../assets/linkdin.svg";
    import facebook from "../assets/facebook.svg";
    import cb from "../assets/cb.svg";
    import insta from "../assets/insta.svg";
    import twitter from "../assets/twitter.svg";
    import Button from "./Button.svelte";
    import RightArrow from "../assets/right-arrow.svg";
</script>

<div class="grid">
    <div>
        <h2>ROT</h2>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam ab
            perferendis saepe et minus iste beatae, fugiat numquam, amet, illo
            non dolorem neque soluta molestias nulla ducimus quos qui modi!
            Porro, illo. Amet sequi quo eveniet molestiae voluptas modi vel
            facilis maiores dignissimos deserunt accusantium tempora dolore odio
            quasi nobis voluptatibus nostrum in ipsa, ducimus excepturi, cumque
            quam qui ab?
        </p>
        <div class="btn">
            <Button hasIcon>
                Let's go
                <img src={RightArrow} alt="right arrow" />
            </Button>
        </div>    
        <div class="imgs">
                <img src={linkdin} alt="" />
                <img src={facebook} alt="" />
                <img src={cb} alt="" />
                <img src={insta} alt="" />
                <img src={twitter} alt="" />
        </div>    
    </div>

    <div class="links">
        <div>
        <h3>site</h3>
            <ul>
                <li>features</li>
                <li>products</li>
                <li>company</li>
                <li>pricing</li>
                <li>support</li>
            </ul>
        </div>

        <div>
            <h3>company</h3>
            <ul>
                <li>about us</li>
                <li>our team</li>
                <li>our story</li>
                <li>career</li>
            </ul>
        </div>

        <div>
            <h3>legale</h3>
            <ul>
                <li>privacy</li>
                <li>terms & condition</li>
                <li>company policy</li>
            </ul>
        </div>

        <div>
            <h3>follow us one</h3>
            <ul>
                <li>twitter</li>
                <li>facebook</li>
                <li>linkdin</li>
            </ul>
        </div>
    </div>
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
    }
    .imgs{
        display: flex;
        flex-direction: right;
        gap: 1em;
    }

    .grid>div {
        display: flex;
        flex-direction: column;
        gap: 2em;
    }
    .grid>.links{
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: 1fr 1fr;
    }
    ul{
        list-style-type: none;
        padding-inline-start: 0
    }
</style>
