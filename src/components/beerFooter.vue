<template>
  <footer class="footer">
    <div class="footerField">
        <div class="footerField__logo">
            <div class="footerField__logo--place">
                <img src="../assets/img/logo.png" alt="logo">
            </div>
        </div>
        <div class="footerField__info">
            <div class="footerField__info--txt">
                © 2010-2024
            </div>
        </div>
        <div class="footerField__social">
            <div class="footerField__social--item" v-for="(social,i) in getAllSocial" :key="i">
                <a :href="social.link" rel="noopener noreferrer">
                    <svg>
                        <use :xlink:href="spriteWay+'#' + social.icon"></use>
                    </svg>
                </a>
            </div>
        </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
import sprite from "@/assets/img/sprite.svg"
export default {
    data(){
        return {
            spriteWay: ""
        }
    },
computed:{
    ...mapGetters(["getAllSocial"])

},
methods:{

},
mounted() {
    this.$nextTick(() => {
      let spriteContainer = document.createElement('div');
      spriteContainer.innerHTML = sprite;
      document.body.appendChild(spriteContainer);
      let e = spriteContainer.textContent || spriteContainer.innerText
      this.spriteWay = e;
      spriteContainer.remove()
    });
}
}
</script>

<style>

</style>