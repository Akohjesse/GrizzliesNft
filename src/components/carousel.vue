<script setup>
import db from '../db/featured.json'
</script>

<template>
    <div class="divette temp_wrap flex">
        <div class="car_wrap flex_col flex" v-for="item in db" :key="item.id">
            <div class="act_buttons flex flex_r">
                <div class="like">
                    <img src="@/assets/like.svg" alt="" />
                </div>
                <div class="more">
                    <img src="@/assets/more.svg" alt="" />
                </div>
            </div>
            <div class="img">
                <img :src="require(`@/assets/ft${item.id}.svg`)" alt="" />
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
                        <p>{{ item.bid }} ETH</p>
                    </div>
                </div>
            </div>
            <div class="btn_mono btn_long">
                <button>Buy Now</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" src="@/scss/carousel.scss"></style>
