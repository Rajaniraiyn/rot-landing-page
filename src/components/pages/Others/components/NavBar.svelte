<script lang="ts">
</script>

<aside>
    <ul>
        <li><a href="/profile">USER</a></li>
        <li><a href="/profile/ranking">RANKING</a></li>
        <li><a href="/profile/profile">PROFILE</a></li>
        <li><a href="/profile/team">TEAM</a></li>
        <li><a href="/profile/e-spor">E-SPORTS</a></li>
        <li><a href="/profile/find">FIND YOUR GENE</a></li>
    </ul>
</aside>


<style>
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

    aside {
        display: grid;
        place-items: center;
        background: black;
        width: 260px;
        height: calc(100vh - 50px);

        position: fixed;
        bottom: 0;
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
    }

    
</style>