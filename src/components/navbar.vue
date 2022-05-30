<template>
     <div class="wrap">
          <nav class="flex flex_r">
               <p>Index</p>
               <p>Featured</p>
               <p>Live Auctions</p>
               <p>Collections</p>
               <p>Creators</p>
          </nav>
     </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrap {
     padding: 6rem 0;
     nav {
          margin: 0 auto;
          width: 40%;
          border: 1px solid white;
          padding: 10px 2rem;
          border-radius: 10px;
          @media screen and (max-width: 1200px) {
               width: 60%;
          }
          p {
               &:nth-child(1) {
                    background: white;
                    color: black;
                    border-radius: 5%;
                    padding: 9px 15px;
               }
          }
     }
}
</style>
