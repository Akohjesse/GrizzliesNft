<template>
    <div class="divette flex">
        <div class="car_wrap flex_col flex">
            <div class="img">
                <img src="@/assets/ft1.svg" alt="" />
            </div>
            <div class="flex ctnt flex_r">
                <div class="name">
                    <small>Item Name</small>
                    <p>Robotic Bug</p>
                </div>
                <div class="bid">
                    <small>Current Bid</small>
                   <div class="flex_row flex">
                        <img src="@/assets/bid1.svg" alt="" />
                        &nbsp; &nbsp;
                        <p>0.005 ETH</p>
                   </div>  
                </div>
            </div>
            <div class="btn_mono btn_long">
                <button>Buy Now</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" src="@/scss/carousel.scss"></style>
