<template>
  <div class="Register">
    <RegisterContent msg="Register"/>
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterContent from '@/components/RegisterContent.vue'

export default {
  name: 'Register',
  components: {
    RegisterContent
  }
}
</script>
