<script setup>
import db from '@/db/collections.json'
</script>
<template>
     <div class="temp_wrap">
          <div class="header flex flex_r">
               <p>Collections</p>
               <small>View all</small>
          </div>
          <br />
          <div  class="grid container">
               <div v-for="item in db" :key="item.id">
                    <h1 class="abs">
                         <img src="@/assets/pref.svg" alt="" />
                         {{ item.name }}
                    </h1>
                    <div class="seller_id abs flex flex_r">
                         <img src="@/assets/bid1.svg" alt="" />
                         &nbsp; &nbsp;
                         <p class="name">@Johny</p>
                    </div>
                    <img :src="require(`@/assets/0${item.id}.svg`)" alt="" />
                    <div class="top abs">
                         <img
                              :src="require(`@/assets/l${item.id}.svg`)"
                              alt=""
                         />
                    </div>
                    <div class="two abs">
                         <img
                              :src="require(`@/assets/b${item.id}.svg`)"
                              alt=""
                         />
                    </div>
               </div>
          </div>
     </div>
</template>

<style lang="scss" scoped>
.container {
     grid-template-columns: repeat(2, 1fr);
     grid-gap: 20px;
     @include media('<=phone-tab') {
          grid-template-columns: repeat(1, 1fr);
          grid-gap: 3rem;
     }
     > div {
          position: relative;
          overflow: hidden;
          img {
               width: 100%;
               transition: transform 2s ease;
               &:hover {
                    transform: translateX(30%);
               }
          }
          h1 {
               z-index: 40;
               background: #1a1a1a4d;
               padding: 10px 16px;
               border-radius: 30px;
               font-weight: 400;
               top: 9%;
               font-size: 2em;
               left: 9%;
               img {
                    width: 15px;
               }
               @include media('<=phone-tab') {
                    font-size: 1.7em;
                    grid-gap: 3rem;
               }
          }
          .seller_id {
               z-index: 40;
               bottom: 8%;
               left: 9%;
          }
          .top {
               top: 0px;
               left: 0px;
               width: 50%;
               overflow: hidden;
               img {
                    width: 100%;
                    transition: transform 2s ease-in-out;
                    &:hover {
                         transform: scale(2);
                    }
               }
          }
          .two {
               bottom: 0px;
               width: 50%;
               left: 0px;
               overflow: hidden;
               img {
                    width: 100%;
                    transition: transform 0.5s ease-in-out;
                    &:hover {
                         transform: scale(1.3);
                    }
               }
          }
     }
}
</style>
