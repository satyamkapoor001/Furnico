<template>
 <div class="order">
 <p>{{order.name}}</p>
 <p>{{order.quantity}}</p>
 <p>{{order.date}}</p>
 <p>{{order.price}}</p>
 </div>
</template>

<script>
export default {
  name: 'CheckOrder',
  props: ['order']
}
</script>

<style>
 .order{
 /* border: 1px black solid; */
 margin: 5% 20%;
 }
</style>
