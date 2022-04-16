<script setup>
import { ref } from '@vue/reactivity'

const int = ref(1)
</script>

<template>
    <div class="temp_wrap">
        <div class="flex header flex_r">
            <p>Live Auctions</p>
            <small>View all</small>
        </div>
        <br />
        <div class="flex flex_r box">
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
                            <img src="@/assets/arr1.svg" alt="" />
                            <img src="@/assets/arr2.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div class="btn_mono btn_long">
                    <button>Place a bid</button>
                </div>
            </div>
            <div class="img">
                <img :src="require(`@/assets/ac${int}.svg`)" alt="" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" src="@/scss/auctions.scss" scoped></style>
