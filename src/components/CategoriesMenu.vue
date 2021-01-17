<template>
    <div class="container" >
                <div class="CategoryItem" id="Sofas" @click="$router.push('Sofas')"></div>
                <div class="CategoryItem" id="Chairs" @click="$router.push('Chairs')"></div>
                <div class="CategoryItem" id="Tables" @click="$router.push('Tables')"></div>
                <div class="CategoryItem" id="Beds" @click="$router.push('Beds')"></div>
                <div class="CategoryItem" id="Storage" @click="$router.push('Storage')"></div>
    </div>
</template>

<script>
export default {
  name: 'CategoriesMenu'
}
</script>
<style scoped>
.container{
    align-content: center;
    align-items: center;
    text-align: center;
}
.CategoryItem{
  display: inline-block;
  height: 175px;
  width: 80%;
  align-content: center;
  margin: 5%;
  text-align: center;
  position: relative;;
  top: 50%;
  background-repeat: no-repeat;
}
#Sofas{
 background-image:url("../assets/1.jpg");
}
#Chairs{
 background-image:url("../assets/3.jpeg");
}
#Tables{
 background-image:url("../assets/4.jpeg");
}
#Beds{
    background-image:url("../assets/5.jpg");
}
#Storage{
    background-image:url("../assets/6.jpeg");
}
</style>
