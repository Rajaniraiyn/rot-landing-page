<script lang="ts">
    import Message from "../../../../assets/message.png";
    import Bell from "../../../../assets/bell.png";
</script>

<div class="head">
    <div>
        <a href="/" class="logo">ROT</a>
        <div class="search">
            <input type="search" placeholder="search..." class="roundsearch" />
        </div>
        <span class="circle" />
    </div>
    <div>
        <img src={Message} alt="message" class="mess" />
        <img src={Bell} alt="bell" class="bell" />
    </div>
</div>

<style>
    .head {
        display: flex;
        background: black;
        width: 100vw;
        height: 50px;
        align-items: center;
        justify-content: space-between;
        grid-column: span 2;

        position: fixed;
        top: 0;
        padding-inline: 2.5em;
    }

    .logo {
        font-size: 1.5em;
        align-items: initial;
    }

    a {
        color: white;
        text-decoration: none;
    }

    a::after {
        content: "";
        display: block;
        width: 0;
        height: 2px;
        background: white;
    }

    a:hover::after {
        width: 100%;
        transition: width 500ms;
    }

    .roundsearch {
        border-radius: 50vmax;
        border: 1px #000 solid;
        padding: 0.25em 0.5em;
    }

    img {
        width: 2em;
        aspect-ratio: 1;
    }

    .head div {
        display: flex;
        flex-direction: row;
        gap: 2em;
    }
</style>
