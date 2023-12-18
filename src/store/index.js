import { createStore } from 'vuex'
import beertable from "@/store/modules/beertable"
import beerFooter from "@/store/modules/beerFooter"

export default createStore({
  modules: {
    beertable,
    beerFooter,
  }
})
