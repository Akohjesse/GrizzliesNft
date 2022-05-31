<script setup>
import { ref } from '@vue/reactivity'

const int = ref(1)
const forward = () => {
     if (int.value > 2) {
          int.value = 1
     } else {
          int.value++
     }
}
const backward = () => {
     if (int.value < 2) {
          int.value = 3
     } else {
          int.value--
     }
}
</script>

<template>
     <div class="temp_wrap">
          <div class="flex header flex_r">
               <p>Live Auctions</p>
               <small>View all</small>
          </div>
          <br />
          <div class="box">
               <div class="metadata flex flex_col">
                    <br />
                    <div class="txt flex flex_col">
                         <p class="name">Robotic Bug</p>
                         <div>
                              <small>Collection Name</small>
                              <p>N33-014</p>
                         </div>
                         <div class="ctnt flex flex_r">
                              <div>
                                   <small>Current Bid</small>
                                   <p>0.005 ETH</p>
                              </div>
                              <div>
                                   <small>Bidding ends in</small>
                                   <p>2 minutes</p>
                              </div>
                         </div>
                    </div>
                    <div class="act_sect">
                         <small>Seller</small>
                         <div class="flex flex_r">
                              <div class="seller_id flex">
                                   <img src="@/assets/bid1.svg" alt="" />
                                   &nbsp; &nbsp;
                                   <p class="name">@Johny</p>
                              </div>
                              <div class="arrows flex flex_r">
                                   <img
                                        src="@/assets/arr1.svg"
                                        @click="backward"
                                        alt=""
                                   />
                                   <img
                                        src="@/assets/arr2.svg"
                                        @click="forward"
                                        alt=""
                                   />
                              </div>
                         </div>
                    </div>
                    <div class="btn_mono btn_long">
                         <button>Place a bid</button>
                    </div>
               </div>
               <div class="img">
                    <img
                         ref="image"
                         :src="require(`@/assets/ac${int}.svg`)"
                         alt=""
                    />
               </div>
          </div>
     </div>
</template>

<style lang="scss" scoped>
.temp_wrap {
     .name {
          font-size: 1.4em;
     }
     .box {
          @include flex(space-between, center, none);
          border-radius: 9px;
          @include media('<=tablet') {
               @include flex_col(1rem);
          }
          .metadata {
               background: #131314;
               gap: 3rem;
               width: 30%;
               padding: 2.8rem 2rem;
               @include media('<=tablet') {
                    width: 100%;
               }
               .txt {
                    gap: 2rem;
                    p {
                         font-size: 1.2em;
                    }
               }
               .act_sect {
                    p {
                         color: #ffffff80;
                    }
                    .arrows {
                         gap: 0 4rem;
                         img {
                              cursor: pointer;
                         }
                    }
               }
          }
          .img {
               width: 68%;
               overflow: hidden;
               @include media('<=tablet') {
                    width: 100%;
               }
               img {
                    width: 100%;
                    transition: transform 3s ease-in-out;
                    &:hover {
                         transform: scale(1.1);
                    }
               }
          }
     }
}
</style>
