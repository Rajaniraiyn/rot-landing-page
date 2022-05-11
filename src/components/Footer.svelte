<script lang="ts">
    import linkdin from "../assets/linkdin.svg";
    import facebook from "../assets/facebook.svg";
    import cb from "../assets/cb.svg";
    import insta from "../assets/insta.svg";
    import twitter from "../assets/twitter.svg";
    import RightArrow from "../assets/right-arrow.svg";
</script>


    <div>
        <h2>ROT</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam ab perferendis saepe et minus iste beatae, fugiat numquam, amet, illo non dolorem neque soluta molestias nulla ducimus quos qui modi!
        Porro, illo. Amet sequi quo eveniet molestiae voluptas modi vel facilis maiores dignissimos deserunt accusantium tempora dolore odio quasi nobis voluptatibus nostrum in ipsa, ducimus excepturi, cumque quam qui ab?
        </p>
        <button>
            Let's go
        </button>
        <img src={linkdin} alt=""/>
        <img src={facebook} alt=""/>
        <img src={cb} alt=""/>
        <img src={insta} alt=""/>
        <img src={twitter} alt="">
    </div>

    <div>
        <h3>site</h3>
        <ul>
            <li>features</li>
            <li>products</li>
            <li>company</li>
            <li>pricing</li>
            <li>support</li>
        </ul>

        <h3>company</h3>
        <ul>
            <li>about us</li>
            <li>our team</li>
            <li>our story</li>
            <li>career</li>
        </ul>

        <h3>legale</h3>
        <ul>
            <li>privacy</li>
            <li>terms & condition</li>
            <li>company policy</li>
        </ul>

        <h3>follow us one</h3>
        <ul>
            <li>twitter</li>
            <li>facebook</li>
            <li>linkdin</li>
        </ul>

    </div>


<style>
    div{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
</style>