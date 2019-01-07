<template>
  <section class = "hero">
    <div class="hero__diag"></div>
    <article class="hero__opener container">
      <h1 class="hero__title">{{ text.title }}</h1>
      <div class="hero__discr">
        <p>{{ text.description }}</p>
      </div>
      <div class="hero__resume">
            <span class="hero__discrResume">
                {{ text.buttonsDescription }}:
            </span>
        <div class="hero__btn">
          <div class="btn"><a id="js-res-pdf" href="file/SAMGIN_STANISLAV_FRONTEND_RU.pdf">PDF</a></div>
          <div class="btn"><a id="js-res-docx" href="file/SAMGIN_STANISLAV_FRONTEND_RU.docx">Word</a></div>
        </div>
      </div>
    </article>
    <div class="hero__img"><img src="@/assets/image/desk.png" alt="laptop"></div>
  </section>
</template>

<script>
  export default {
    name: "TheHero",
    props: {
      text: {
        type: Object,
        required: true
      },
    }
  }
</script>

<style>

</style>
