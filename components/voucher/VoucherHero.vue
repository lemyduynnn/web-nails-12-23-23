
<template>
   <section :id="block.id" :style="{ background: block.background }" :data-cms-bind="dataBinding" class="section-our">
    <div class="container py-10">
      <h2 class="text-black text-3xl pb-10">{{ block.title }}</h2>
      <div class="flex flex-col justify-center items-center lg:gap-28 gap-10 h-auto">
        <div class="flex flex-col relative lg:p-6 p-2">
          <img src="/images/bling.png" class="absolute z-30 left-1/4 top-[-5px] w-6 h-6 lg:w-8 lg:h-8"/>
          <div class="ellipse"></div>
          <h2 class="z-20 text-main lg:text-5xl text-2xl uppercase text-center">{{ block.title }}</h2>
        </div>
        <div class="w-full flex flex-col justify-center items-center gap-20">
          <div v-for="(item, index) in block.data" :key="index" class="lg:even:flex-row-reverse w-full lg:flex lg:flex-row flex flex-col justify-between items-center lg:gap-20 gap-8">
            <div class="flex flex-col lg:w-2/3 w-full">
              <img :src="item.img" alt="" class="object-cover"/>
            </div>
            <div class="flex flex-col lg:gap-10 gap-6 items-center justify-center lg:justify-between">
              <div class="flex flex-col gap-2 w-full">
                <h2 class="text-black text-2xl">{{ item.title }}</h2>
                <div class="text-blac font-sans tracking-wide	" v-html="item.description"></div>
              </div>
              <div class="flex flex-col w-full">
                <button class="transition hover:opacity-90 hover:transition-all bg-main text-white text-center w-2/3 p-2 rounded-full">{{ item.button }}</button>
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
 