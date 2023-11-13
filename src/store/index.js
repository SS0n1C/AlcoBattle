import { createStore } from 'vuex'
import beertable from "@/store/modules/beertable"

export default createStore({
  modules: {
    beertable,
  }
})
