<script lang="ts">
</script>

<nav>
  <div class="logo">ROT</div>
  <div class="navigation">
    <ul>
      <li>Features</li>
      <li>Products</li>
      <li>Company</li>
      <li>Pricing</li>
      <li>Support</li>
    </ul>
  </div>
  <div class="auth">
    <button>Login</button>
    <button>Register</button>
  </div>
</nav>

<style>
  nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-inline: -5.5em;
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
  .logo {
    font-size: 1.5em;
  }
</style>
