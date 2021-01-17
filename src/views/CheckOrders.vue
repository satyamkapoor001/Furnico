<template>
  <div class="CheckOrders">
    <CheckOrdersContent msg="My Orders"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CheckOrdersContent from '@/components/CheckOrdersContent.vue'

export default {
  name: 'CheckOrders',
  components: {
    CheckOrdersContent
  }
}
</script>
