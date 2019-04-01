<template>
  <div class="section_wrapper">
    <section class = "container" :class="text.blockId">
      <h2 class="asideTitle">
        <span class="asideTitle__rotate asideTitle__rotate--about">{{ text.title }}</span>
      </h2>
      <div class="about__aboutBlock">
        <div class="about__info">
          <div class="about__title">{{ text.personalData.firstName }} {{ text.personalData.lastName }}</div>
          <div class="about__subtitle">{{ text.personalData.specialty }}</div>
          <div class="about__descr">{{ text.personalData.description }}</div>
        </div>
        <div class="about__contact">
          <div class="photo">
            <img src="@/assets/image/headshot-min.jpg" alt="headshot">
          </div>
          <ul class="about__contactList">
            <li v-else-if="item.link" class="about__contactItem">
              <span>Дата рождения: </span>
              <span>{{ text.personalData.birth }}</span>
            </li>

            <template v-for="item in text.contactData">
              <li v-if="item.specialAttr"
                  v-bind="dynamicAttr(item.specialAttr)"
                  class="about__contactItem">
                <span >{{ item.name }}: </span>
                <span v-html="item.value" />
              </li>

              <li v-else-if="item.link" class="about__contactItem">
                <span>{{ item.name }}: </span>
                <a :href="item.link">{{ item.value }}</a>
              </li>

              <li v-else class="about__contactItem">
                <span >{{ item.name }}: </span>{{ item.value }}
              </li>
            </template>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "TheAbout",
    props: {
      text: {
        type: Object,
        required: true
      },
    },
    methods: {
      dynamicAttr({name, value}) {
        return {
          [name]: value
        }
      }
    }
  }
</script>
