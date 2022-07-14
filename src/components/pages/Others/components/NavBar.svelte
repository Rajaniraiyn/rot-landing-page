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
        height: 93.5vh;
    }

    
</style>