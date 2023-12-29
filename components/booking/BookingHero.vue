
<template>
   <section :id="block.id" :style="{ backgroundImage : `url(${block.image})`}" :data-cms-bind="dataBinding" class="section-hero h-[760px] bg-cover bg-center">
     <div class="container w-full h-full">
      <div class="w-full h-full flex flex-col justify-end items-end">
           <div class="w-full bg-white lg:bg-opacity-50 backdrop-blur-md z-10 rounded-t-3xl pt-20">
               <div class="flex flex-col justify-center items-center lg:gap-28 gap-10 h-auto">
                  <div class="flex flex-col relative lg:p-6 p-2">
                     <img src="/images/bling.png" class="absolute z-30 left-1/4 top-[-5px] w-6 h-6 lg:w-8 lg:h-8"/>
                     <div class="ellipse"></div>
                     <h2 class="z-20 text-main lg:text-5xl text-2xl uppercase text-center">{{ block.title }}</h2>
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
 .section-hero {
   
 }
 </style>
 