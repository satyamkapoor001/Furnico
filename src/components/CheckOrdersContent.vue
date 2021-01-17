<template>
  <div class="CheckOrders">
    <h1>{{ msg }}</h1>
    <CheckOrder v-for="order in orders" :key="order.name" :order="order" />
  </div>
</template>

<script>
import CheckOrder from './CheckOrder.vue'
export default {
  name: 'CheckOrdersContent',
  components: { CheckOrder },
  props: {
    msg: String
  },
  data: () => ({
    orders: []
  }),
  beforeMount () {
    const data = [
      {
        name: 'order 1',
        quantity: 3,
        date: '21/01/2311',
        price: 341
      },
      {
        name: 'order 2',
        quantity: 2,
        date: '21/01/2311',
        price: 124
      },
      {
        name: 'order 3',
        quantity: 4,
        date: '21/01/2311',
        price: 342
      }
    ]
    // fetch data
    // fetch('/merchant/orders/ani')
    // .then((res)=>res.json())
    // .then(() => {
    // this.orders=res
    // })
    console.log(1)
    this.orders = data
  }

}
</script>

<style>

</style>
