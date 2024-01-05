<template>
   <section :id="block.id" :style="{ background: block.background }" :data-cms-bind="dataBinding" class="section-story w-full">
     <div class="container lg:py-28 py-10">
       <div class="flex flex-col justify-center items-center lg:gap-20 gap-10 h-auto">
         <div class="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10">
           <img :src="block.image" :alt="block.image_alt" class="rounded-[60px]"/>
           <div class="flex flex-col gap-10">
             <div class="flex flex-col gap-6">
               <div v-for="(list, index) in block.info" :key="index" class="flex gap-3">
                 <span class="text-main whitespace-nowrap">{{ list.label }} :</span><span v-html="list.text"></span>
               </div>
             </div>
             <div class="flex flex-col justify-center items-center">
               <button class="transition hover:opacity-90 hover:transition-all bg-main text-white text-center w-full py-4 rounded-full">{{ block.button }}</button>
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
 
 defineProps<Props>()
 </script>
 
 <style lang="scss" scoped>
 .section-contact {
 
 }
 </style>