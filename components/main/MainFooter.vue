<template>
  <footer id="footer" :style="{ background: footerData?.background }" class="border-secondary border-b-8">
    <div class="container">
      <div class="flex justify-between items-center gap-6 lg:py-10 py-6">
        <div class="tracking-wide font-light text-white">{{ footerData?.year }}</div>
        <div class="flex lg:gap-6 gap-2">
          <div class="tracking-wide font-light text-white">{{ footerData?.follow }}</div>
          <ul class="flex items-center lg:justify-center justify-start h-full lg:gap-6 gap-2">
            <li v-for="(item, index) in footerData?.icon" :key="index+1" class="cursor-pointer tracking-wide font-light">
              <img :src="item.nameIcon" class="w-6 h-6" />
            </li>
          </ul>
        </div> 
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import footerData from '@/data/footer.json';
console.log(footerData);

</script>

<style lang="scss">
.ts{
}
</style>
