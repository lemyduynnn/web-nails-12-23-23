<template>
  <footer id="footer" class="bg-black">
    <div class="container">
      <div class="lg:grid lg:grid-cols-3 flex flex-col-reverse gap-6 lg:py-16 py-6">
        <div class="flex flex-col gap-2 text-white">
          <span class="font-medium leading-normal">{{ footerData?.resonance }}</span>
          <span class="italic">{{ footerData?.author }}</span>
        </div>
        <ul class="flex items-center lg:justify-center justify-start h-full lg:gap-10 gap-4">
          <li v-for="(item, index) in footerData?.icon" :key="index+1" class="cursor-pointer">
            <img :src="item.nameIcon" class="w-6 h-6" />
          </li>
        </ul>
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
