<template>
    <div class="temp_wrap">
        <div class="flex header flex_r">
            <p>Live Auctions</p>
            <small>View all</small>
        </div>
        <div class="flex flex_r box">
            <div class="metadata flex flex_col">
                <p>Robotic Bug</p>
                <div class="name">
                    <small>Collection Name</small>
                    <p>N33-014</p>
                </div>
                <div class="ctnt flex flex_r">
                    <div class="name">
                        <small>Current Bid</small>
                        <p>0.005 ETH</p>
                    </div>
                    <div class="name">
                        <small>Bidding ends in</small>
                        <p>2 minutes</p>
                    </div>
                </div>
                <div class="act_sect">
                    <small>Seller</small>
                </div>
            </div>
            <div class="img">
                <img src="@/assets/ac1.svg" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" src="@/scss/auctions.scss" scoped></style>
