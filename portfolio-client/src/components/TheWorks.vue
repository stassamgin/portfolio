<template>
  <div class="section_wrapper">
    <section class = "works container">
      <h2 class="asideTitle"><span class="asideTitle__rotate asideTitle__rotate--works">Мои работы</span></h2>
      <div class="works__block">
        <h3 class="works__title">Примеры моих работ</h3>
        <ul class="works__list">
          <li class="works__item">
            <img src="img/ep3-min.jpg" alt="ep3.ru" class="works__img">
            <div class="works__descr">
              <p>Лэндинг был написан для предприятия занимающегося доставкой товара с мировых торговых площадок. <br>Адаптивный, кроссбраузерный. Дизайн, инфографика разрабатывались мной.</p>
              <div class="work__link">
                <a href="http://ep3.ru/" target="_blank">
                  @@include('template/link.svg')
                </a>
                <a href="https://github.com/Nigmas/ep3" target="_blank">
                  @@include('template/github.svg')
                </a>
              </div>
            </div>
            <div class="works__tools">HTML, SCSS, Jquery, gulp</div>
          </li>
          <li class="works__item">
            <img src="img/fedorova-min.jpg" alt="lizafedorova.pe.hu" class="works__img">
            <div class="works__descr">
              <p>Сайт находящийся в стадии запуска, разработанный для мастера по индивидуальному пошиву одежды. <br>Сверстан с помощью flexbox. Адаптивный, кроссбраузерный. Дизайн, логотип разрабатывались мной.</p>
              <div class="work__link">
                <a href="http://lizafedorova.pe.hu/" target="_blank">
                  @@include('template/link.svg')
                </a>
                <a href="https://github.com/Nigmas/EF" target="_blank">
                  @@include('template/github.svg')
                </a>
              </div>
            </div>
            <div class="works__tools">HTML, SCSS, Jquery, gulp</div>
          </li>
          <li class="works__item">
            <img src="img/notify-min.jpg" alt="Тестовый сайт" class="works__img">
            <div class="works__descr">
              <p>Тестовый сайт, который я сделал с единственной целью – занять ячейку в портфолио. Пока не адаптивен, но скоро это исправлю.</p>
              <div class="work__link">
                <a href="https://github.com/Nigmas/notify" target="_blank">
                  @@include('template/github.svg')
                </a>
              </div>
            </div>
            <div class="works__tools">HTML, CSS, JS</div>
          </li>
          <li class="works__item">
            <img src="img/snow-min.jpg" alt="snow" class="works__img">
            <div class="works__descr">
              <p>Верстка сайта для предприятия занимающегося уборкой снега.</p>
              <div class="work__link">
                <a href="http://grey-fox.ru/clients/snow/" target="_blank">
                  @@include('template/link.svg')
                </a>
              </div>
            </div>
            <div class="works__tools">HTML, SCSS, Jquery, gulp</div>
          </li>
          <li class="works__item">
            <img src="img/uno1-min.jpg" alt="lizafedorova.pe.hu" class="works__img">
            <div class="works__descr">
              <p>Попытка переизобрести велосипед. В основе блоков с изображениями лежит самописная сетка, которая добавляет элементы колонкой. Расчеты на JS.</p>
              <div class="work__link">
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
          <li class="works__item">
            <img src="img/9lines-min.jpg" alt="9lines" class="works__img">
            <div class="works__descr">
              <p>Интерактивная анкета на чистом JS, написанная с помощью шаблонизатора Pug.</p>
              <div class="work__link">
                <a href="http://r95317nx.beget.tech/9lines/" target="_blank">
                  @@include('template/link.svg')
                </a>
                <a href="https://github.com/Nigmas/test_9lines" target="_blank">
                  @@include('template/github.svg')
                </a>
              </div>
            </div>
            <div class="works__tools">HTML, SCSS, Pug, JS, gulp</div>
          </li>
          <li class="works__item">
            <img src="img/flat-min.jpg" alt="Проект дизайна квартиры" class="works__img">
            <div class="works__descr">
              <p>Проект дизайна квартиры. Разработка дизайна, трехмерная визуализация, постобработка. В проекте использовались сторонние модели предметов интерьера. </p>
              <div class="work__link">
                <a href="img/full_flat-min.jpg" target="_blank">
                  @@include('template/zoom.svg')
                </a>
              </div>
            </div>
            <div class="works__tools">3DS Max, V-Ray, Photoshop</div>
          </li>
          <li class="works__item">
            <img src="img/build-min.jpg" alt="Проект экстерьера жилого дома" class="works__img">
            <div class="works__descr">
              <p>Проект экстерьера жилого дома с летней площадкой и печью. Разработка дизайна, трехмерная визуализация, постобработка.</p>
              <div class="work__link">
                <a href="img/full_build-min.jpg" target="_blank">
                  @@include('template/zoom.svg')
                </a>
              </div>
            </div>
            <div class="works__tools">3DS Max, V-Ray, Photoshop</div>
          </li>
          <li class="works__item">
            <img src="img/cups-min.jpg" alt="Трехмерная модель" class="works__img">
            <div class="works__descr">
              <p>Трехмерная модель. Разработка дизайна, трехмерная визуализация.</p>
              <div class="work__link">
                <a href="img/full_cups-min.jpg" target="_blank">
                  @@include('template/zoom.svg')
                </a>
              </div>
            </div>
            <div class="works__tools">3DS Max, V-Ray</div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "TheWorks"
  }
</script>

<style scoped>

</style>
