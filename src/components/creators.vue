<script setup>
import db from '../db/creators.json'
import { onMounted } from '@vue/runtime-core'
import { gsap, Circ } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

onMounted(() => {
     let sections = gsap.utils.toArray('.creator_wrap .car_wrap')
     gsap.registerPlugin(ScrollTrigger)
     ScrollTrigger.matchMedia({
          '(min-width:700px)': function () {
               gsap.timeline({
                    scrollTrigger: {
                         trigger: '.creators',
                         scrub: 2,
                         start: 'center center',
                         end: 'bottom +=300',
                         pin: '.creators',
                         toggleActions: 'play reset none restart',
                    },
               }).to('.creators .creator_wrap', {
                    xPercent: -70 * (sections.length - 2),
                    duration: 20,
                    ease: Circ.easeInOut,
               })
          },
     })
})
</script>

<template>
     <div class="temp_wrap creators">
          <div class="header">
               <p>Featured Creators</p>
          </div>
          <br />
          <div class="divette flex creator_wrap">
               <div
                    class="car_wrap flex_col flex"
                    v-for="item in db"
                    :key="item.id"
               >
                    <div class="bg">
                         <img
                              :src="require(`@/assets/bg${item.id}.svg`)"
                              alt=""
                         />
                    </div>
                    <div class="cntnt flex flex_col">
                         <div class="n2 ta_center flex flex_col">
                              <div class="img">
                                   <img
                                        :src="
                                             require(`@/assets/cr${item.id}.svg`)
                                        "
                                        alt=""
                                   />
                              </div>
                              <p>{{ item.name }}</p>
                         </div>
                         <p class="ta_center bio">
                              {{ item.bio }}
                         </p>
                         <div class="btn_mono ta_center">
                              <button>+ Follow</button>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>

<style lang="scss" scoped>
.divette {
     flex-wrap: nowrap;
     gap: 0 1.2rem;
     overflow: visible;
     margin: 0 auto;
     flex-direction: row-reverse;
     @include media('<=phone-tab') {
          @include flex_col(2rem);
     }
     .car_wrap {
          width: 38%;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          gap: 1rem;
          flex-shrink: 0;
          position: relative;
          padding: 20px;
          .bg {
               height: 15rem;
               border-radius: 10px;
               width: 100%;
               z-index: -2;
               img {
                    width: 100%;
               }
          }
          .cntnt {
               gap: 1em;
               transform: translateY(-20%);
               .n2 {
                    gap: 0.4rem;
                    .img {
                         width: 28%;
                         margin: 0 auto;
                         img {
                              width: 100%;
                         }
                    }
               }
               .bio {
                    color: #ffffff80;
                    font-size: 0.98em;
                    width: 80%;
                    margin: 0 auto;
               }
               .btn_mono {
                    button {
                         width: 70%;
                    }
               }
          }
     }
}
</style>
