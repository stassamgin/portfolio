<template>
  <div class="section_wrapper">
    <section class = "education container">
      <h2 class="asideTitle"><span class="asideTitle__rotate asideTitle__rotate--education">Образование</span></h2>
      <div class="education__block">
        <div class="education__title">Мое образование</div>
        <ul class="education__list">
          <li class="education__icon">
            @@include('template/education.svg')
          </li>
          <li class="education__item">
            <div class="education__school">Одесский национальный университет имени И. И. Мечникова</div>
            <div class="education__spec">правоведение</div>
            <div class="education__acadDegree">специалист</div>
            <div class="education__year">2010 - 2014</div>
            <div class="education__descr">В 2010 году, получил диплом по специальности правоведение. Благодаря полученным знаниям окончательно сформирована картина работы бизнеса и государства, а также механизм их взаимодействия, принципы взаимодействия субъектов. Приобретены ценные навыки работы с заказчиком, умение аргументированно убеждать и отстаивать свою позицию, умение понимать потребности клиента чуть больше, чем понимает он сам. </div>
          </li>
          <li class="education__item">
            <div class="education__school">Донбасский Государственный технический Университет</div>
            <div class="education__spec">финансы</div>
            <div class="education__acadDegree">специалист</div>
            <div class="education__year">2007 - 2009</div>
            <div class="education__descr">В 2009 году, на базе первого высшего образования мной был получен диплом по специальности «Финансы». Сформированы навыки бюджетирования проектов, умение оценить потребности бизнеса и конъектуру рынка, навыки работы с финансами и отчетностью, понимание финансовой системы и ее потребностей.</div>
          </li>
          <li class="education__item">
            <div class="education__school">Донбасский Государственный технический Университет</div>
            <div class="education__spec">инженер-механик</div>
            <div class="education__acadDegree">специалист</div>
            <div class="education__year">2003 - 2008</div>
            <div class="education__descr">В 2008 году мной была получена специальность инженер-механик. Считаю, что основным плюсом приобретения данного образования было формирование технического образа мышления, умения использовать, читать и создавать механизмы, детали, схемы, чертежи. Также данная специальность создала замечательную математическую и логическую базу. В процессе обучения заложен интерес и базовые навыки работы с AutoCAD, а в последствии с трехмерной графикой 3d studio max.</div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "TheEducation"
  }
</script>

<style scoped>

</style>
