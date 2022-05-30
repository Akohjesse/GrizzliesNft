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
          <div class="grid container">
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

<style lang="scss" src="@/scss/collections.scss" scoped></style>
