<template>
  <div id="app">
    <!-- <div id="Heading" style="text-align: left">
      <img id="logo" src="@/assets/FURNICO.png">
    </div> -->
  <div id="nav1">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">FURNICO</a>
  <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span> -->
  <!-- </button> -->
  <ul class="nav navbar-nav navbar-right" id="list">
    <li>
      <a class="btn btn-primary"><i class="fa fa-user" aria-hidden="true"></i><router-link to="/myaccount">MyAccount  </router-link></a>
    </li>
    <li>
      <a class="btn btn-primary" ><i class="fa fa-shopping-cart" @click="$router.push('Cart')" aria-hidden="true"></i><router-link to="/cartcheckout"></router-link></a>
    </li>
    <li>
        <router-link to="/login">Login or Register</router-link>
    </li>
  </ul>
  </nav>
  </div>
    <div id="nav2">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About Us</router-link> |
      <router-link to="/sofas">Sofas</router-link> |
      <router-link to="/chairs">Chairs</router-link> |
      <router-link to="/tables">Tables</router-link> |
      <router-link to="/beds">Beds</router-link> |
      <router-link to="/storage">Storage</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav2 {
  background: url("https://image.made-in-china.com/2f0j00maEGHVbdCRcJ/Factory-Yellow-Wooden-Design-Rustic-Tile-for-Floor.jpg");
  color: black;
  a {
    font-weight: bold;
    color: #800000;

    &.router-link-exact-active {
      color: black;
    }
  }
}
#logo {
  height: 5%;
  width:5%;
  left:0;
  top:0;
}
#list{
  float:right;
}
#nav1 {
  display:flex;
  justify-content: space-evenly;
  a {
    // background-color: burlywood;
    text-decoration: none;
    color: #800000;
    float:right;
  }

.btn-primary {
  background-color:burlywood;
}
.btn-primary:hover{
  background-color:white;
}
}
</style>
