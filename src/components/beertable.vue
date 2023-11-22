<template>
<div class="conteiner">
  <section class="beerTab">
    <div class="beerTab__h">
      <h2>Beer Battle</h2>
    </div>
    <div class="beerTab__body"
    v-for="(item, i) in getBeerDesk"
    :key="i">
    <div class="beerTab__body--item">
      {{ item.name }}
    </div>
    <div class="beerTab__body--item">
      {{ item.type }}
    </div>
    <div class="beerTab__body--item">
      {{ item.alco }}
    </div>
    <div class="beerTab__body--item">
      {{ item.country }}
    </div>
    <div class="beerTab__body--item">
        <div class="Vit">
          {{ item.design.vit }} / 
        </div>
        <div class="Evg">
          {{ item.design.evg }}
        </div>
    </div>
    <div class="beerTab__body--item">
        <div class="Vit">
          {{ item.soft.vit }} / 
        </div>
        <div class="Evg">
          {{ item.soft.evg }}
        </div>
    </div>
    <div class="beerTab__body--item">
        <div class="Vit">
          {{ item.taste.vit }} / 
        </div>
        <div class="Evg">
          {{ item.taste.evg }}
        </div>
    </div>
    <div class="score">{{ getSum() }}</div>
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
    
    methods:{
      getSum(){
   
    },
    }
}
</script>

<style>

</style>