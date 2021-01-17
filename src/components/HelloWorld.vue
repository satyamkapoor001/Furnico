<template>
  <section class="container">
    <h1>{{ msg }}</h1>
    <CourselHome></CourselHome>
    <CategoriesMenu></CategoriesMenu>
  </section>
</template>

<script>
import CourselHome from './CourselHome.vue'
import CategoriesMenu from './CategoriesMenu.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    CourselHome,
    CategoriesMenu
  }
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
#slide1{
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa3hZmC1iFiJ7L9PE7afSBsNPlKZm9BcMoez_Q0a1r3tG64hgvQZOFDEnKGZg&usqp=CAc") no-repeat fixed;
}
</style>
