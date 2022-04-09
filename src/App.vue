<script setup>
import hero from '@/components/heroSection.vue'
import Nav from '@/components/navbar.vue'
</script>

<template>
    <div class="bg_left abs">
        <img src="@/assets/bgblur1.svg" alt="" />
    </div>
    <div class="bg_right abs">
        <img src="@/assets/bgblur2.svg" alt="" />
    </div>
    <div class="bg_right"></div>
    <hero />
    <Nav />
</template>

<style lang="scss" src="@/scss/generic.scss"></style>
