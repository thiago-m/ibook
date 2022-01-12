<template>
  <HomeTemplate />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'ibook',
  async asyncData({store}) {
    return await store.dispatch('books/index')
  }
})
</script>
