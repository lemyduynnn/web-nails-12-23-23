<template>
  <section :id="block.id" class="section-banner w-full h-auto bg-gray-200 lg:py-16 py-10" :data-cms-bind="dataBinding">
    <div class="container">
        <div class="flex flex-col justify-center items-center">
          <div class="image-container flex flex-col justify-center items-center">
            <div v-for="(img, index) in block.banners" :key="index">
              <img :src="img.image" :alt="img.image_alt" class="flex-shrink object-cover aspect-[9/3]">
            </div>
          </div>
        </div>
        <div class="flex lg:flex-col justify-between items-center lg:items-end lg:px-20 mt-16 lg:mt-0">
            <div class="lg:hidden flex gap-2">
              <img src="/images/tron.png" class="w-6 h-6"/>
              <img src="/images/tron.png" class="w-6 h-6"/>
              <img src="/images/tron.png" class="w-6 h-6"/>
            </div>
            <img src="/images/nextblack.png" class="cursor-pointer object-cover z-50" />
        </div>
        <div class="h-full text-center lg:gap-10 gap-6 flex flex-col justify-center items-center my-10">
            <div class="font-bold lg:text-6xl text-3xl z-50" v-html="block.title"></div>
            <div class="font-medium leading-normal z-50 lg:w-2/3 w-full" v-html="block.description"></div>
            <button class="transition hover:opacity-80 hover:transition-all z-50 border-none bg-black text-white lg:w-80 uppercase w-full h-12 rounded-lg">About Us</button>
        </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface Props {
  dataBinding: any;
  block: any;
}
defineProps<Props>()
</script>

<style lang="scss" scoped>
.section-banner {
  .image-container {
    position: relative;
    img {
      max-width: 900px;
      max-height: 300px;
    }
    :nth-child(1) {
      position: relative;
      padding-right: 10px;
      width: 100%;
    }
    :nth-child(2) {
      position: absolute;
      z-index: 2;
      top: 20px;
      left: 20px;
    }
    :nth-child(3) {
      position: absolute;
      z-index: 3;
      top: 40px;
      left: 40px;
    }
  }
}
</style>
