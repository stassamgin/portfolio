<template>
  <div id="app" class="bodyWrapper">
    <component v-for="block in blocks"
               :is="componentNameGenerator(block)"
               :text="componentContentByBlockName(block)"/>


    <!-- ==== footer BEGIN ==== -->
    <div class="section_wrapper">
      <footer class = "footer">
        &copy; С.А. Самгин, 2017
      </footer>
    </div>
    <!-- ==== footer END ==== -->

    <div class="scroll_progress"></div>
  </div>
</template>

<script>
import {
  TheAbout,
  TheEducation,
  TheHeader,
  TheHero,
  TheSkills,
  TheWorkExperience,
  TheWorks,
} from '@/components'
import customJS from './util/custom' //JS code from old realization TODO: separate to different file
import '@/assets/scss/style.scss'


export default {
  name: 'app',
  components: {
    TheAbout,
    TheEducation,
    TheHeader,
    TheHero,
    TheSkills,
    TheExperience: TheWorkExperience,
    TheWorks,
  },
  data () {
    return {
      templateTextRU: {
        header: {
          menuTitle: "Меню"
        },
        hero: {
          title: "Портфолио Станислава Самгина",
          description: "Привет! Я рад видеть Вас на своем профессиональном сайте. Если Вы здесь, то, скорее всего, я заинтересовал Вас как специалист по веб-разработке, и я попытаюсь убедить Вас, что сотрудничество со мной это замечательная идея :)",
          buttonsDescription: "скачать резюме"
        },
        about: {
          blockId: 'about',
          title: 'Обо мне',
          name: 'Станислав Самгин',
          profession: 'Веб-разработчик, верстальщик',
          description: 'Веб разработка началась для меня как любопытство и выросло в дело всей жизни. Я действительно люблю то, чем я занимаюсь и стараюсь быть на гребне переменчивой волны фронтэнда. По опыту первой профессии имею солидный стаж работы с предприятиями и учреждениями, поэтому отлично понимаю, как особенности работы с ними, так и их бизнес потребности, а также что такое сжатые сроки и ограниченный бюджет. Большое внимание уделяю самообразованию и профессиональному росту.',
          photo: 'headshot-min.jpg',
          personalData: [
            {
              name: 'Год рождения',
              value: '31.07.1985',
            },
            {
              name: 'Viber',
              value: '+38 095 3176971',
              link: 'tel:+380953176971',
            },
            {
              name: 'e-mail',
              value: 'stassamgin@gmail.com',
              link: 'mailto:stassamgin@gmail.com',
            },
            {
              name: 'LinkedIn',
              value: 'linkedin.com/in/stassamgin',
              link: 'https://www.linkedin.com/in/stassamgin',
            },
            {
              name: 'website',
              value: 'samgin.pro',
              link: '#',
            },
            {
              name: 'Адрес',
              value: 'ул. М.Василенко,<br>г. Симферополь',
              specialAttr: {
                name: 'id',
                value: 'js-adres',
              },
            },
          ]
        },
        skills: {
          blockId: 'skills',
          title: 'Навыки',
          workSkills: {
            title: 'Профессиональные навыки',
            data: [
              {
                name: 'HTML',
                percent: '95',
              },
              {
                name: 'CSS',
                percent: '95',
              },
              {
                name: 'JavaScript',
                percent: '80',
              },
              {
                name: 'JQuery',
                percent: '85',
              },
              {
                name: 'Adobe Photoshop',
                percent: '60',
              },
              {
                name: 'Adobe Illustrator',
                percent: '40',
              },
              {
                name: '3DS Max',
                percent: '40',
              },
            ]
          },
          tools: {
            title: 'Инструментарий',
            data: [
              'SCSS',
              'Bootstrap',
              'WordPress',
              'Gulp',
              'NPM',
              'Git',
              'BEM',
              'Адаптивность',
              'Кроссбраузерность',
              'Валидность',
              'CSSAnimation',
              'основы SEO',
            ]
          },
          languages: {
            title: 'Знание языков',
            data: [
              {
                name: 'Русский',
                description: 'основной язык общения',
                percent: '95',
              },
              {
                name: 'Украинский',
                description: 'свободное общение',
                percent: '85',
              },
              {
                name: 'Английский',
                description: 'чтение технической литературы',
                percent: '60',
              }
            ]
          }

        },
        works: {
          blockId: 'works',
          title: 'Мои работы',

        },
        education: {
          blockId: 'education',
          title: 'Образование',

        },
        experience: {
          blockId: 'workExp',
          title: 'Опыт работы',

        },


      }
    }
  },
  computed: {
    blocks() {
      return Object.keys(this.templateTextRU);
    }
  },
  methods: {
    componentNameGenerator(blockName) {
      return `the-${blockName.toLowerCase()}`
    },
    componentContentByBlockName(blockName) {
      if (blockName === 'header') {
        return this.templateTextRU
      }

      return this.templateTextRU[blockName];
    }
  },
  mounted() {
    customJS()
  }
}
</script>

<style lang="scss">
#app {
}
</style>
