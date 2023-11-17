<template>
<div class="conteiner">
  <section class="beerTab">
    <div class="beerTab__h">
      <h2>Beer Battle</h2>
    </div>
    <div class="beerTab__body">
      <div class="beerTab__body--title">
        name
      </div>
      <div class="beerTab__body--title">
        type
        </div>
        <div class="beerTab__body--title">
        alco
        </div>
        <div class="beerTab__body--title">
        design
        <div class="perRaiting">Vit: 8</div>
        <div class="perRaiting">Evg: 6</div>
        </div>
        <div class="beerTab__body--title">
        soft
        </div>
        <div class="beerTab__body--title">
        taste
        </div>
        <div class="beerTab__body--title BTTitle__item">
        score
        </div>
      <div class="beerTab__body--main">
        2
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