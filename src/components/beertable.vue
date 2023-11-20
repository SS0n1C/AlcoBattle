<template>
<div class="conteiner">
  <section class="beerTab">
    <div class="beerTab__h">
      <h2>Beer Battle</h2>
    </div>
    <div class="beerTab__body" 
    v-for="item in getBeerDesk" :key="item.id">
      <!-- title section -->
      <div class="beerTab__body--title">
        name
      </div>
      <div class="beerTab__body--title">
        type
        </div>
        <div class="beerTab__body--title">
        alco
        </div>
        <div class="beerTab__body--title double-section">
        design
        </div>
        <div class="beerTab__body--title double-section">
        soft
        </div>
        <div class="beerTab__body--title double-section">
        taste
        </div>
        <div class="beerTab__body--title BTTitle__item">
        score
        </div>
        <div class="beerTab__body--person start">
          Vitaliy
        </div>
        <div class="beerTab__body--person">
          Evgenia
        </div>
        <div class="beerTab__body--person">
          Vitaliy
        </div>
        <div class="beerTab__body--person">
          Evgenia
        </div>
        <div class="beerTab__body--person">
          Vitaliy
        </div>
        <div class="beerTab__body--person end">
          Evgenia
        </div>
        <!--table section-->
      <div class="beerTab__body--main">
      {{ item.id }}
      </div> 
    </div>
  </section>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed:{
      ...mapGetters(["getBeerDesk"]),
    },
}
</script>

<style>

</style>