
<template>
   <section :id="block.id" :style="{ background: block.background }" :data-cms-bind="dataBinding" class="section-our">
    <div class="container lg:py-28 py-10">
      <div class="flex flex-col justify-center items-center lg:gap-28 gap-10 h-auto">
        <div class="flex flex-col relative lg:p-6 p-2">
          <img src="/images/bling.png" class="absolute z-30 left-1/4 top-[-5px] w-6 h-6 lg:w-8 lg:h-8"/>
          <div class="ellipse"></div>
          <h2 class="z-20 text-main lg:text-5xl text-2xl uppercase text-center">{{ block.title }}</h2>
        </div>
        <div class="w-full flex flex-col justify-center items-center gap-20 ">
          <div v-for="(item, index) in block.data" :key="index" class="lg:even:flex-row-reverse w-full lg:flex lg:flex-row flex flex-col justify-between items-center lg:gap-20 gap-8">
            <div class="flex flex-col items-center justify-center relative">
              <div class="border-black border rounded-t-full w-full h-full absolute left-2 bottom-2"></div>
              <img :src="item.img" alt="" class="object-cover"/>
            </div>
            <div class="w-full flex flex-col lg:gap-10 gap-6 items-center justify-center lg:justify-between">
              <div class="w-full flex gap-4">
                <img :src="item.logo" alt="" class="w-8 h-8"/>
                <h2 class="text-main text-xl">{{ item.title }}</h2>
              </div>
              <div class="flex flex-col gap-4 w-full">
                <div v-for="(menu, key) in item.type" :key="key" class="flex justify-between items-center">
                  <p class="whitespace-nowrap">{{ menu.name }}</p>
                  <div class="w-full h-px bg-black flex flex-col justify-center items-center"></div>
                  <p class="whitespace-nowrap">{{ menu.price }}</p>
                </div>
              </div>
              <div class="flex flex-col w-full">
                <button class="transition hover:opacity-90 hover:transition-all bg-main text-white text-center lg:w-1/3 w-1/2 p-2 rounded-full">{{ item.button }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
   </section>
 </template>
 
 <script lang="ts" setup>
 
 interface Props {
   dataBinding: any;
   block: any;
 }
 
 const { dataBinding, block } = defineProps<Props>();
 </script>
 
 <style lang="scss" scoped>
.custom_item{

}
 </style>
 