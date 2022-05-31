<script setup>
import db from '../db/featured.json'
import { onMounted } from '@vue/runtime-core'
import { gsap, Circ } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
onMounted(() => {
     let sections = gsap.utils.toArray('.carousel_container .car_wrap')
     gsap.registerPlugin(ScrollTrigger)
     ScrollTrigger.matchMedia({
          '(min-width:600px)': function () {
               gsap.timeline({
                    scrollTrigger: {
                         trigger: '.carousel',
                         scrub: 3,
                         start: 'center center',
                         end: 'bottom +=300',
                         pin: '.carousel',
                         toggleActions: 'play pause resume restart',
                    },
               }).to('.carousel', {
                    xPercent: 100 * (sections.length - 2),
                    duration: 20,
                    ease: Circ.easeInOut,
               })
          },
     })
})
</script>

<template>
     <div class="temp_wrap carousel">
          <div class="header">
               <p>Featured</p>
          </div>
          <br />
          <div class="divette carousel_container flex">
               <div
                    class="car_wrap flex_col flex"
                    v-for="item in db"
                    :key="item.id"
               >
                    <div class="act_buttons flex flex_r">
                         <div class="like">
                              <img src="@/assets/like.svg" alt="" />
                         </div>
                         <div class="more">
                              <img src="@/assets/more.svg" alt="" />
                         </div>
                    </div>
                    <div class="img">
                         <img
                              :src="require(`@/assets/ft${item.id}.svg`)"
                              alt=""
                         />
                    </div>
                    <div class="flex ctnt flex_r">
                         <div class="bid">
                              <small>Item Name</small>
                              <p>{{ item.name }}</p>
                         </div>
                         <div class="bid">
                              <small>Current Bid</small>
                              <div class="flex_row flex">
                                   <img src="@/assets/bid1.svg" alt="" />
                                   &nbsp; &nbsp;
                                   <p>
                                        {{ item.bid }}
                                        ETH
                                   </p>
                              </div>
                         </div>
                    </div>
                    <div class="btn_mono btn_long">
                         <button>Buy Now</button>
                    </div>
               </div>
          </div>
     </div>
</template>

<style lang="scss" scoped>
.divette {
     flex-wrap: nowrap;
     gap: 0 3rem;
     overflow: visible;
     margin: 0 auto;
     @include media('<=phone-tab') {
          @include flex_col(2rem);
     }
     .car_wrap {
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 25px;
          position: relative;
          border-radius: 10px;
          gap: 1rem;
          flex-shrink: 0;
          .act_buttons {
               width: 80%;
               left: 10%;
               z-index: 10;
               margin: 0 auto;
               position: absolute;
               top: 8%;
          }
          .img {
               width: 100%;
               overflow: hidden;
               border-radius: 10px;
               img {
                    width: 100%;
                    transition: transform 2s ease-in-out;
                    &:hover {
                         transform: scale(1.3);
                    }
               }
          }
          .bid {
               display: flex;
               flex-direction: column;
               gap: 0.7rem;
               small {
                    color: #ffffff80;
               }
               p {
                    font-size: 1.3em;
               }
          }
     }
}
</style>
