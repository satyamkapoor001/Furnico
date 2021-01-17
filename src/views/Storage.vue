<template>
  <div class="Prop1">
   <StorageContent></StorageContent>
  </div>
</template>

<script>
// @ is an alias to /src
import StorageContent from '@/components/StorageContent.vue'

export default {
  name: 'Storage',
  components: {
    StorageContent
  }
}
</script>
