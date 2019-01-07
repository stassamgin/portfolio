<template>
  <header class="header">
    <button class="menuBtn">{{ text.header.menuTitle }}</button>
    <side-menu :text="text"/>
  </header>
</template>

<script>
  import {SideMenu} from '@/components/basic'

  export default {
    name: "TheHeader",
    components: {
      SideMenu
    },
    props: {
      text: {
        type: Object,
        required: true
      },
    }
  }
</script>

<style scoped>

</style>
