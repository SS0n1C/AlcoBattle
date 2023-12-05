<template>
<div class="conteiner">
  <section class="beerTab">
    <div class="beerTab__h">
      <h2>Beer Battle</h2>
    </div>
    <div class="beerTab__img" v-if="showBeerPhoto" :style="show ? filterStyle : null" @click="zoomOption">   
      <img :src="getPh" alt="beer">
      <div class="beerTab__img--cross" @click="closeBeerPh()">
        <svg>
          <use xlink:href = "@/assets/img/sprite.svg#redCross"></use>  
        </svg>
      </div>
    </div>
    <div class="beerTab__title">
    <div class="beerTab__title--item" v-for="(title, i) in getTitle()" :key="i">
        <span @click="sortList(title)">{{ title }}</span>
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
    v-for="(item, i) in getBeerDesk" :src="item.image"
    :key="i">
    <div class="beerTab__body--item body-name" @click="getName(item)">
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
import { mapGetters, mapMutations } from 'vuex';
export default {
  data(){
    return{
      show:false,
        filterStyle: {
          width:"300px",
          height:"450px",
          cursor:"zoom-out"
        },
        showBeerPhoto:false,
    }
  },
    computed:{
      ...mapGetters(["getBeerDesk","zooms"]),
    },
    
    methods:{
      ...mapMutations(["closeBeerPhoto","sortBeerTab"]),
      getSum(item){
        return item.design.evg + item.design.evg + item.soft.vit + item.soft.evg +
        item.taste.vit + item.taste.evg
    },
    getTitle(){
      let newTest = []
      this.getBeerDesk.map(e=> newTest = Object.keys(e))
      newTest.shift()
      newTest.pop()
      return newTest
    },
    getName(item){
      this.showBeerPhoto = false
      this.getPh = item.image
      this.showBeerPhoto = true
      this.show = false
    },
    closeBeerPh(){
      this.showBeerPhoto = false
    },
    sortList(title){
      this.sortBeerTab(title)
    },
    zoomOption(){
      this.show?this.show = false:this.show = true
    },
    }
}
</script>

<style>

</style>