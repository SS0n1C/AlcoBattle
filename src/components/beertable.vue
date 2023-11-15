<template>
<div class="conteiner">
  <section class="beerTab">
    <div class="beerTab__h">
      <h2>Beer Battle</h2>
    </div>
    <div class="beerTab__body">
      <div class="beerTab__body--title">
        1
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