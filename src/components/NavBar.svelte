<script lang="ts">
</script>

<nav>
    <div class="logo">ROT</div>
    <div class="navigation">
        <ul>
            <li>Features</li>
            <li>Products</li>
            <li>Company</li>
        </ul>
    </div>
    <div class="auth">
        <button>login</button>
        <button>Register</button>
    </div>
</nav>

<style>
    nav {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .navigation > ul {
        list-style-type: none;
    }

    li {
        float: left;
    }

    li:nth-child(even) {
        margin-inline: 2em;
    }
</style>
