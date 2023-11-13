<template>
<div class="test"
v-for="beerlist in getBeerDesk" 
:key= beerlist.id
    >{{ beerlist.id }}</div>
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