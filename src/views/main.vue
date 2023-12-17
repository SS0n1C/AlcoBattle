<template>
    <div class="conteiner">
       <beertable/>
       <beerFooter/>
   </div>
 </template>
 
 <script>
 import beertable from "@/components/beertable.vue"
 import beerFooter from "@/components/beerFooter.vue"
 export default {
 components:{
  beertable,
  beerFooter,
 }
 }
 </script>
 <style>
 
 </style>
 