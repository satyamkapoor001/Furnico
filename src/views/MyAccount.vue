<template>
  <div class="myaccount">
    <MyAccountContent msg="My Account"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MyAccountContent from '@/components/MyAccountContent.vue'

export default {
  name: 'MyAccount',
  components: {
    MyAccountContent
  }
}
</script>
