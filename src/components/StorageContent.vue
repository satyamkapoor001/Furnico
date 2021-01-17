<template>
  <div class="container">
  <div class="banner">
  </div>
  <div class="dispitems">
    </div>
  </div>
</template>

<script>
export default {
  name: 'StorageContent'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
</style>
