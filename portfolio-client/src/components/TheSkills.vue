<template>
  <div class="section_wrapper">
    <section class = "container" :class="text.blockId">
      <h2 class="asideTitle"><span class="asideTitle__rotate asideTitle__rotate--skills">{{ text.title }}</span></h2>
      <div class="skills__skillBlock">
        <div class="skillBlockMain">
          <h3 class="skillBlockMain__title">{{ text.workSkills.title }}</h3>
          <ul class="skillBlockMain__list">
            <li v-for="{name, percent} in text.workSkills.data"
                :key="name"
                :style="createCssVarWidth(percent)"
                v-html="hideBigDescription(name, percent)"
                class="skillBlockMain__item" />
          </ul>
        </div>
        <div class="skillBlockSecond">
          <h3 class="skillBlockSecond__title">{{ text.tools.title }}</h3>
          <ul class="skillBlockSecond__list">
            <li v-for="(item, index) in text.tools.data"
                :key="index"
                class="skillBlockSecond__item">
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="skillBlockLanguage">
          <h3 class="skillBlockLanguage__title">{{ text.languages.title }}</h3>
          <ul class="skillBlockLanguage__list">
            <li v-for="item in text.languages.data"
                :key="item.name"
                :style="createCssVarLanguages(item.percent)"
                class="skillBlockLanguage__item">
                        <span class="skillBlockLanguage__text">
                            {{ item.name }}
                            <span class="skillBlockLanguage__descr">{{ item.description }}</span>
                        </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "TheSkills",
    props: {
      text: {
        type: Object,
        required: true
      },
    },
    methods: {
      createCssVarWidth(percent) {
        return {
          '--item-width': percent + "%",
        }
      },
      createCssVarLanguages(percent) {
        return {
          '--item-lang': percent
        }
      },
      hideBigDescription(name, percent) {
        let string = name;

        if (name.length > 10) {
          const array = name.split(' ');

          string = array.length > 1 ?
            `<span class="mobileHide">${array[0]}</span> ${array[1]}` :
            name;
        }

        return `${string}<span class="skillChartDescr">${percent}%</span>`;
      }
    }
  }
</script>

