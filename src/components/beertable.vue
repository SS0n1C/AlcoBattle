<template>
<div class="conteiner">
  <section class="beerTab">
    <div class="beerTab__h">
      <h2>Beer Battle</h2>
    </div>
    <div class="beerTab__title">
    <div class="beerTab__title--item" v-for="(title, i) in getTitle()" :key="i">
        {{ title }}
    </div>
    </div>
    <div class="beerTab__person">
      <div class="beerTab__person--name">
        Vit / Evg 
      </div>
      <div class="beerTab__person--name">
        Vit / Evg 
      </div>
      <div class="beerTab__person--name">
        Vit / Evg 
      </div>
      <div class="beerTab__person--name name-score">
        score
      </div>
    </div>
    <div class="beerTab__body"
    v-for="(item, i) in getBeerDesk"
    :key="i">
    <div class="beerTab__body--item body-name">
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
        <div class="name">
          {{ item.design.vit }} 
        </div>
        /
        <div class="name">
          {{ item.design.evg }}
        </div>
    </div>
    <div class="beerTab__body--item">
        <div class="name">
          {{ item.soft.vit }}
        </div>
        /
        <div class="name">
          {{ item.soft.evg }}
        </div>
    </div>
    <div class="beerTab__body--item">
        <div class="name">
          {{ item.taste.vit }} 
        </div>
        /
        <div class="name">
          {{ item.taste.evg }}
        </div>
    </div>
    <div class="beerTab__body--item score">{{ getSum(item)}}</div>
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
      getSum(item){
        return item.design.evg + item.design.evg + item.soft.vit + item.soft.evg +
        item.taste.vit + item.taste.evg
    },
    getTitle(){
      let newTest = []
      this.getBeerDesk.map(e=> newTest = Object.keys(e))
      newTest.shift()
      return newTest
    }
    }
}
</script>

<style>

</style>