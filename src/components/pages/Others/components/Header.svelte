<script lang="ts">
    
    import Message from "../../../../assets/message.png";
    import Bell from "../../../../assets/bell.png";
</script>

<div class="head">
    <a href="/" class="logo">ROT</a>
    <div class="search">
        <input
            type="search"
            placeholder="  search..."
            class="roundsearch"
        />
    </div>
    <span class="circle" />
    <img src={Message} alt="message" class="mess" />
    <img src={Bell} alt="bell" class="bell" />
</div>

<style>
        .head {
        display: flex;
        background: black;
        width: 100vw;
        height: 50px;
        align-items: center;
        grid-column: span 2;
    }

    .logo {
        font-size: 1.5em;
        align-items: initial;
        margin-left: 1.5em;
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

    .search {
        margin-left: 3em;
    }

    .roundsearch {
        border-radius: 15px;
        border: 1px #000 solid;
    }

    .mess {
        height: 23px;
        width: 23px;
        margin-left: 55em;
    }

    .bell {
        height: 23px;
        width: 23px;
        margin-left: 2em;
    }
</style>