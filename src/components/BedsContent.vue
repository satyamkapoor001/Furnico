<template>
  <div class="container">
      <div class="sidenav">
  <a href="#about">About</a>
  <a href="#services">Services</a>
  <a href="#clients">Clients</a>
  <a href="#contact">Contact</a>
</div>
<div class="main">
  <div class="banner">
  </div>
  <div class="dispitems">
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BedsContent'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main {
  margin-left: 140px; /* Same width as the sidebar + left position in px */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
.sidenav {
  width: 130px;
  position: fixed;
  z-index: 1;
  top: 20%;
  left: 10px;
  background: #eee;
  overflow-x: hidden;
  padding: 8px 0;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #2196F3;
  display: block;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.banner{
  background-color:rgb(95, 100, 22);
  height: 300px;
  display: block;
}
.dispitems{
  background-color:rgb(100, 22, 58);
  height: 400px;
  display: flex;
}
.attributesidebar{
  background-color:rgb(22, 91, 100);
  width: 25%;
}
</style>
