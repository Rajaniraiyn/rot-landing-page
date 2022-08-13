<script lang="ts">
  import Button from "./Button.svelte";
</script>

<nav>
  <div class="logo"><a href="/">ROT</a></div>
  <div class="navigation">
    <ul>
      <li><a href="/profile">User</a></li>
      <li><a href="/products">Products</a></li>
      <li><a href="/company">Company</a></li>
      <li><a href="/pricing">Pricing</a></li>
      <li><a href="/support">Support</a></li>
    </ul>
  </div>
  <div class="auth">
    <Button noBorder>Login</Button>
    <Button>Register</Button>
  </div>
</nav>

<style>
  nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-inline: -5.5em;
    margin-block: 1em;
  }

  .navigation > ul {
    list-style-type: none;
  }

  li {
    float: left;
    cursor: pointer;
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

  li:nth-child(even) {
    margin-inline: 2em;
  }

  .logo {
    font-size: 1.5em;
  }
</style>
