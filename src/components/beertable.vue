<template>
  <section class="beerTab">
    <div class="beerTab__h">
      <h2 ref="yourAnchorId">Beer Battle</h2>
    </div>
    <div class="beerTab__find">
      <div class="beerTab__find--field">
          <input type="search" name="search" class="search__field" maxlength="15" 
          v-model="searchTexts" 
          @keyup="Searching(searchTexts)"
          @click="closeSearch()"
          @blur="searchTexts = ''"
          autocomplete="off">
        </div>
        <div class="beerTab__find--button">
          <svg @click="Searching(searchTexts)">
              <use xlink:href = "@/assets/img/sprite.svg#search"></use>  
            </svg>
        </div>
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
      <div class="beerTab__person--name name-score" @click="getPointSort()">
        score
      </div>
    </div>
    <div class="beerTab__body"
    v-for="(item, i) in getSortList" :src="item.image"
    :key="i">
    <div class="beerTab__body--item body-name" @click="getName(item)">
      {{ item.name }}
    </div>
    <div class="beerTab__body--item" @click="toTop()">
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
        searchTexts: "",
    }
  },
    computed:{
      ...mapGetters(["getBeerDesk","getSortList"]),
    },
    
    methods:{
      ...mapMutations(["closeBeerPhoto","sortBeerTab","searchBeer","sortBeersByTotalSum"]),
      getSum(item){
        return item.design.vit + item.design.evg +item.taste.vit + item.taste.evg + item.soft.vit + item.soft.evg
    },
    getTitle(){
      let newTtitle = []
      this.getBeerDesk.map(e=> newTtitle = Object.keys(e))
      newTtitle.shift()
      newTtitle.pop()
      newTtitle.pop()
      return newTtitle
    },
    getName(item){
      this.showBeerPhoto = false
      this.getPh = item.image
      this.showBeerPhoto = true
      this.show = false
      this.toTop()
    },
    toTop(){
      const element = this.$refs.yourAnchorId;
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, null, window.location.pathname);
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
    Searching(){
      let getSearchData = this.getBeerDesk.filter(e=>e.name.toLowerCase().includes(this.searchTexts.toLowerCase()))
      this.searchBeer(getSearchData)
    },
    closeSearch(){
      this.searchBeer(this.getBeerDesk)
    },
    getPointSort(){
      this.sortBeersByTotalSum()
    },
    }
}
</script>

<style>

</style>