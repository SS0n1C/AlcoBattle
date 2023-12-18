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
                2023
            </div>
        </div>
        <div class="footerField__social">
            <div class="footerField__social--item" v-for="(social,i) in getAllSocial" :key="i">
                <a :href="social.link" rel="noopener noreferrer">
                    <svg>
                        <use href="src/assets/images/sprite.svg#search"></use>
                    </svg>
                </a>
            </div>
        </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
computed:{
    ...mapGetters(["getAllSocial"])
}
}
</script>

<style>

</style>