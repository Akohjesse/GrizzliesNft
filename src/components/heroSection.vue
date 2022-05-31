<script setup>
import { onMounted } from '@vue/runtime-core'
import animateSection from '../animations/stagger_img'

onMounted(() => {
     animateSection()
})
</script>
<template>
     <div class="temp_wrap">
          <div class="hero_content flex flex_r">
               <div class="txt flex_col flex">
                    <h1>Buy & Sell NFTs On The Web</h1>
                    <p>
                         NFTs will continue to revolutionize the way that
                         artists and fans create community together.
                    </p>
                    <div class="cta flex">
                         <div class="btn_mono">
                              <button>How It Works</button>
                         </div>
                         <p>
                              <a href="">Learn More</a>
                         </p>
                    </div>
               </div>
               <div class="right_flg flex flex_r">
                    <div class="img flex_col">
                         <div class="indiv">
                              <img src="@/assets/ast01.svg" alt="" />
                         </div>
                         <div class="indiv">
                              <img src="@/assets/ast02.svg" alt="" />
                         </div>
                         <div class="indiv">
                              <img src="@/assets/ast03.svg" alt="" />
                         </div>
                    </div>
                    <div class="img flex_col">
                         <div class="indiv">
                              <img src="@/assets/ast04.svg" alt="" />
                         </div>
                         <div class="indiv">
                              <img src="@/assets/ast05.svg" alt="" />
                         </div>
                         <div class="indiv">
                              <img src="@/assets/ast06.svg" alt="" />
                         </div>
                    </div>
                    <div class="img flex_col">
                         <div class="indiv">
                              <img src="@/assets/ast07.svg" alt="" />
                         </div>
                         <div class="indiv">
                              <img src="@/assets/ast08.svg" alt="" />
                         </div>
                         <div class="indiv">
                              <img src="@/assets/ast09.svg" alt="" />
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>

<style lang="scss">
.hero_content {
     @include media('<=tablet') {
          @include flex_col(5rem);
     }
     .txt {
          width: 45%;
          gap: 2rem;
          @include media('<=tablet') {
               width: 100%;
          }
          h1 {
               font-size: 4.7em;
               font-weight: 400;
               letter-spacing: 1px;
               line-height: 6rem;
               @include media('<=tablet') {
                    font-size: 4em;
                    line-height: 5rem;
               }
               @include media('<=phone-tab') {
                    font-size: 3em;
                    line-height: 4rem;
               }
          }
          p {
               color: #ffffff80;
          }
          .cta {
               align-items: flex-end;
               gap: 0 3rem;
               p {
                    a {
                         color: white;
                    }
               }
          }
     }
     .right_flg {
          width: 40%;
          @include media('<=tablet') {
               width: 100%;
          }
          .img {
               width: 31%;
               align-self: center;
               display: flex;
               gap: 0.5rem;
               &:nth-child(1),
               &:nth-child(3) {
                    transform: translateY(2rem);
               }
               .indiv {
                    width: 100%;
                    img {
                         width: 100%;
                    }
               }
          }
     }
}
</style>
