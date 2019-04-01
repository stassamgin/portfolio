<template>
  <nav class="header__nav">
    <ul v-for="{title, href} in menuGenerator"
        class="header__navList">
      <li :key="href"
          class="header__navItem">
        <a :href="href"
            @click.prevent="menuClickHandler(href)">
          {{ title }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
  import { getElementHeight } from '@/util';
  export default {
    name: "SideMenu",
    props: {
      text: {
        type: Object,
        required: true
      },
    },
    computed: {
      menuGenerator() {
        const menu = [];
        Object.values(this.text).forEach(item => {
          if(item.blockId) {
            menu.push({
              title: item.title,
              href: item.blockId
            })
          }
        });

        return menu;
      }
    },
    methods: {
      menuClickHandler(href) {
        window.scrollTo(0, getElementHeight(document.querySelector('.' + href)));

        document.querySelector('.header__nav').classList.remove('header__nav--active');
      },
    }
  }
</script>

<style>

</style>
