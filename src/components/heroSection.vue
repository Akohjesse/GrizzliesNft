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
                    NFTs will continue to revolutionize the way that artists and
                    fans create community together.
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

<style lang="scss" src="@/scss/hero.scss"></style>
