
<template>
   <section :id="block.id" :data-cms-bind="dataBinding" class="section-hero">
     <div class="container py-10">
      <div class="flex flex-col gap-10">
         <h2 class="text-black text-3xl">{{ block.title }}</h2>
         <ul class="flex lg:gap-6 gap-2 lg:justify-start lg:items-start justify-between items-between lg:w-2/3 w-full overflow-hidden">
              <li
                v-for="(menu, index) in block.menuTab"
                :key="index"
                :class="{ 'text-white bg-main': isActiveMenuItem(index) }"
                @click="handleTabMenu(index)"
                class="w-full text-center hover:opacity-90 text-main whitespace-nowrap cursor-pointer px-4 py-2 font-[16px] rounded-full border border-main hover:border-main"
              >
                <a>{{ menu.tab }}</a>
              </li>
         </ul>
         <swiper
            :slidesPerView="1"
            :spaceBetween="30"
            :pagination="{ clickable: true }"
            :modules="modules"
            class="mySwiper w-full"
            @swiper="onSwiper"
          >
            <swiper-slide v-for="(col, index) in block.our" :key="index" class="flex flex-col">
               <div class="grid grid-cols-4 gap-4">
                  <div v-for="(listcol, index) in col.listcols" :key="index" class="flex flex-col gap-4">
                     <div v-for="(img, index) in listcol.listImg" :key="index" >
                        <img :src="img.image" :alt="img.image_alt" class="object-cover w-full h-full"/>
                     </div>
                  </div>
               </div>              
            </swiper-slide>
         </swiper>
         <!-- <div class="grid grid-flow-row grid-cols-4 gap-4 w-full">
            <div v-for="(img, index) in block.listImg" :key="index" class="flex flex-col ">
               <div class="flex items-start ">
                  <img :src="img.image" :alt="img.image_alt" class="object-cover w-full h-full"/>
               </div>
            </div>
         </div> -->
      </div>
     </div>
   </section>
 </template>
 
 <script lang="ts" setup>
import { defineProps, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

 interface Props {
   dataBinding: any;
   block: any;
 }
 
 const { dataBinding, block } = defineProps<Props>();

const modules = [];
const mySwiper = ref<any | null>(null);

const onSwiper = (swiperInstance: any) => {
  mySwiper.value = swiperInstance;
};
 
 const isActiveMenuItem = (index: number) => {
  return mySwiper.value?.activeIndex === index;
};
 
 const handleTabMenu = (index: number) => {
  if (mySwiper.value) {
    mySwiper.value.slideTo(index);
  }
};

 </script>
 
 <style lang="scss" scoped>
 .section-hero {
 }
 </style>
 