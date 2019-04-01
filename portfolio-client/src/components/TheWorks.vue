<template>
  <div class="section_wrapper">
    <section class = "container" :class="text.blockId">
      <h2 class="asideTitle"><span class="asideTitle__rotate asideTitle__rotate--works">{{ text.title }}</span></h2>
      <div class="works__block">
        <h3 class="works__title">{{ text.title }}</h3>
        <ul class="works__list">

          <li v-for="(item, index) in text.data"
              :key="index"
              class="works__item">
            <img :src="imagePath(item.photo)"
                 :alt="item.name"
                 class="works__img">
            <div class="works__descr">
              <p v-html="item.description"/>
              <div v-if="item.imageLink" class="work__link">
                <a :href="'@/assets/image/' + item.imageLink"
                   target="_blank">
                  @@include('template/zoom.svg')
                </a>
              </div>
              <div v-else class="work__link">
                <a href="http://r95317nx.beget.tech/beavers/" target="_blank">
                  @@include('template/link.svg')
                </a>
                <a href="https://github.com/Nigmas/test_dabb" target="_blank">
                  @@include('template/github.svg')
                </a>
              </div>
            </div>
            <div class="works__tools">HTML, SCSS, JS, gulp</div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "TheWorks",
    props: {
      text: {
        type: Object,
        required: true
      },
    },
    methods: {
      imagePath(name) {
        return './assets/image/' + name
      }
    }
  }
</script>

<style scoped>

</style>
