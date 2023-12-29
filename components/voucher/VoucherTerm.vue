
<template>
   <section :id="block.id" :style="{ background: block.background }" :data-cms-bind="dataBinding" class="section-our">
    <div class="container lg:py-28 py-10">
      <div class="flex flex-col justify-center items-center lg:gap-28 gap-10 h-auto">
        <div class="flex flex-col relative lg:p-6 p-2">
          <img src="/images/bling.png" class="absolute z-30 left-1/4 top-[-5px] w-6 h-6 lg:w-8 lg:h-8"/>
          <div class="ellipse"></div>
          <h2 class="z-20 text-main lg:text-5xl text-2xl uppercase text-center">{{ block.title }}</h2>
        </div>
      </div>
      <div class="flex flex-col gap-7 pt-10">
          <div v-for="(list, index) in block.listCondition" :key="index" class="flex gap-2">
            <span class="text-main font-sans text-light leading-5	">{{ index + 1 }}.</span>
            <p class="text-main font-sans text-light leading-5" v-html="list.title"></p>
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
 