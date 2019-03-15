<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <p style="font-size: 30px; font-family: Impact, Charcoal;">REVERSERS</p>
      </a>
    </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" href="account">
            Account
          </a>
          <div class="navbar-dropdown is-boxed">
            <a class="navbar-item" href="account">
              Login
            </a>
            <a class="navbar-item" href="">
              test
            </a>
          </div>
        </div>
        <a class="navbar-item" href="https://github.com/various3211workd/firebaseApp" target="_blank">
          GitHub
        </a>
      </div>
    </div>
  </nav>

</template>

<style>
  .header {
    font-size: 20px;
    left: 0;
    top: 0;
    width: 100%;
    background-color: #59bb0c;
    color: #fff;
    text-align: left;
    padding: 15px;
  }

  .header a {
    text-decoration: none;
  }

  .header a:link,
  .header a:visited {
    color: #fff;
  }
</style>