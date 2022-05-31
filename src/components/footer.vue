<template>
     <footer class="temp_wrap flex_col flex">
          <div class="flex flex_r">
               <h3>@GrizzliesNFT</h3>
               <ul class="flex flex_r">
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Medium</li>
                    <li>Contact</li>
               </ul>
               <div class="flex flex_r">
                    <img src="@/assets/back.svg" alt="" />
                    &nbsp;&nbsp;&nbsp;
                    <p>Back to the top</p>
               </div>
          </div>
          <div class="copyright">
               <p class="ta_center">Copyright © 2022 Jojo Akinde</p>
          </div>
     </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.temp_wrap {
     gap: 2rem;
     h3 {
          padding: 15px 2rem;
          border-radius: 1rem;
          background: #131314;
            @include media('<=tablet') {
               font-size: 1em;
          }
     }
     ul {
          gap: 0 3rem;
          @include media('<desktop') {
               display: none;
          }
          li {
               list-style-type: none;
               font-size: 1.3em;
          }
     }
     p {
          font-size: 1.3em;
           @include media('<=tablet') {
               font-size: 1em;
          }
     }
}
</style>
