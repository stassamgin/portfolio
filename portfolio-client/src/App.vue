<template>
  <div id="app" class="bodyWrapper">
    <component v-for="block in blocks"
               :is="componentNameGenerator(block)"
               :text="componentContentByBlockName(block)"/>

    <div class="section_wrapper">
      <footer class = "footer">
        &copy; С.А. Самгин, 2017
      </footer>
    </div>

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
          personalData: {
            firstName: 'Станислав',
            lastName: 'Cамгин',
            patronymicName: 'Алексеевич',
            specialty: 'Front-end разработчик, верстальщик',
            photo: 'headshot-min.jpg',
            birth: '31.07.1985'
          },
          contactData: [
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
              value: 'ул. М.Василенко, г. Симферополь',
              specialAttr: {
                name: 'id',
                value: 'js-adres',
              },
            }
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
                show: true,
                showInMobile: true,
                skills: [
                  {
                    name: 'HTML5',
                    percent: '90',
                    show: true,
                    showInMobile: true
                  },
                  {
                    name: 'семантичная верстка',
                    percent: '90',
                    show: true,
                    showInMobile: true
                  }
                ]
              },
              {
                name: 'CSS',
                percent: '95',
                show: true,
                showInMobile: true,
                skills: [
                  {
                    name: 'SASS',
                    percent: '90',
                    show: true,
                    showInMobile: true
                  },
                  {
                    name: 'LESS',
                    percent: '50',
                    show: true,
                    showInMobile: true
                  }
                ]
              },
              {
                name: 'JavaScript',
                percent: '80',
                show: true,
                showInMobile: true,
                skills: [
                  {
                    name: 'ES6',
                    percent: '90',
                    show: true,
                    showInMobile: true
                  },
                  {
                    name: 'OOP',
                    percent: '70',
                    show: true,
                    showInMobile: true
                  }
                ]
              },
              {
                name: 'Vue',
                percent: '80',
                show: true,
                showInMobile: true,
                skills: [
                  {
                    name: 'Vuex',
                    percent: '90',
                    show: true,
                    showInMobile: true
                  },
                  {
                    name: 'Nuxt',
                    percent: '70',
                    show: true,
                    showInMobile: true
                  }
                ]
              },
              {
                name: 'React',
                percent: '80',
                show: true,
                showInMobile: true,
                skills: [
                  {
                    name: 'Redux',
                    percent: '90',
                    show: true,
                    showInMobile: true
                  },
                  {
                    name: 'OOP',
                    percent: '70',
                    show: true,
                    showInMobile: true
                  }
                ]
              },
              {
                name: 'JQuery',
                percent: '85',
                show: true,
                showInMobile: true
              },
              {
                name: 'Графические редакторы',
                percent: '80',
                show: true,
                showInMobile: true,
                skills: [
                  {
                    name: 'Adobe Photoshop',
                    percent: '60',
                    show: true,
                    showInMobile: true
                  },
                  {
                    name: 'Adobe Photoshop',
                    percent: '60',
                    show: true,
                    showInMobile: true
                  },
                  {
                    name: '3DS Max',
                    percent: '40',
                    show: true,
                    showInMobile: true
                  }
                ]
              }
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
          data: [
            {
              name: 'work1',
              thumb: '',
              image: '',
              sourceLink: '',
              workLink: '',
              createdAt: '2010',
              description: ''
            },
          ]
        },
        education: {
          blockId: 'education',
          title: 'Образование',
          data: [
            {
              name: 'Одесский национальный университет имени И. И. Мечникова',
              specialty: 'правоведение',
              degree: 'специалист',
              startAt: '2010',
              endAt: '2014',
              description: 'В 2010 году, получил диплом по специальности правоведение. Благодаря полученным знаниям окончательно сформирована картина работы бизнеса и государства, а также механизм их взаимодействия, принципы взаимодействия субъектов. Приобретены ценные навыки работы с заказчиком, умение аргументированно убеждать и отстаивать свою позицию, умение понимать потребности клиента чуть больше, чем понимает он сам.'
            },
            {
              name: 'Донбасский Государственный технический Университет',
              specialty: 'финансы',
              degree: 'специалист',
              startAt: '2007',
              endAt: '2009',
              description: 'В 2009 году, на базе первого высшего образования мной был получен диплом по специальности «Финансы». Сформированы навыки бюджетирования проектов, умение оценить потребности бизнеса и конъектуру рынка, навыки работы с финансами и отчетностью, понимание финансовой системы и ее потребностей.'
            },
            {
              name: 'Донбасский Государственный технический Университет',
              specialty: 'инженер-механик',
              degree: 'специалист',
              startAt: '2003',
              endAt: '2008',
              description: 'В 2008 году мной была получена специальность инженер-механик. Считаю, что основным плюсом приобретения данного образования было формирование технического образа мышления, умения использовать, читать и создавать механизмы, детали, схемы, чертежи. Также данная специальность создала замечательную математическую и логическую базу. В процессе обучения заложен интерес и базовые навыки работы с AutoCAD, а в последствии с трехмерной графикой 3d studio max.'
            }
          ]

        },
        experience: {
          blockId: 'workExp',
          title: 'Опыт работы',
          data: [
            {
              organization: {
                name: '',
                site: '',
              },
              specialty: 'правоведение',
              startAt: '2010',
              endAt: '2014',
              description: 'В 2010 году, получил диплом по специальности правоведение. Благодаря полученным знаниям окончательно сформирована картина работы бизнеса и государства, а также механизм их взаимодействия, принципы взаимодействия субъектов. Приобретены ценные навыки работы с заказчиком, умение аргументированно убеждать и отстаивать свою позицию, умение понимать потребности клиента чуть больше, чем понимает он сам.'
            },
          ]
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
