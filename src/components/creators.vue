<script setup>
import db from '../db/creators.json'
import animateSection from '../animations/featured_creators'
import { onMounted } from '@vue/runtime-core'

onMounted(() => {
    animateSection()
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
                    <img :src="require(`@/assets/bg${item.id}.svg`)" alt="" />
                </div>
                <div class="cntnt flex flex_col">
                    <div class="n2 ta_center flex flex_col">
                        <div class="img">
                            <img
                                :src="require(`@/assets/cr${item.id}.svg`)"
                                alt=""
                            />
                        </div>
                        <p>{{ item.name }}</p>
                    </div>
                    <p class="ta_center bio">{{ item.bio }}</p>
                    <div class="btn_mono ta_center">
                        <button>+ Follow</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped src="@/scss/creators.scss"></style>
