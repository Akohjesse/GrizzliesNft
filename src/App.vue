<script setup>
import hero from '@/components/heroSection.vue'
import carousel from '@/components/carousel.vue'
import Nav from '@/components/navbar.vue'
import creators from '@/components/creators.vue'
import auctions from '@/components/auctions.vue'
import Collections from '../src/components/collections.vue'
import Footer from '@/components/footer.vue'
import Header from '@/components/header.vue'
</script>

<template>
    <div class="bg_left abs">
        <img src="@/assets/bgblur1.svg" alt="" />
    </div>
    <div class="bg_right abs">
        <img src="@/assets/bgblur2.svg" alt="" />
    </div>
    <div class="bg_right"></div>
    <Header />
    <hero />
    <Nav />
    <carousel />
    <auctions />
    <Collections />
    <creators />
    <Footer />
</template>

<style lang="scss" src="@/scss/generic.scss"></style>
