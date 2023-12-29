<template>
  <section :id="block.id" :style="{ background: block.background }" :data-cms-bind="dataBinding" class="section-gallery">
    <div class="lg:flex hidden h-full items-end justify-end gap-2 dot-images">
        <img src="/images/dottim.png" alt="" class="h-[62px]"/>
        <img src="/images/dotvang.png" alt="" class="h-[62px]"/>
        <img src="/images/dotvang.png" alt="" class="h-[62px]"/>
        <img src="/images/dotvangs.png" alt="" class="h-[62px]"/>
    </div>
    <div class="container lg:py-28 py-10">
      <div class="flex flex-col lg:gap-32 gap-6">
        <div class="hidden lg:grid lg:grid-cols-[1fr_1fr_2fr_3fr] lg:grid-rows-2 lg:gap-y-[20px] lg:gap-x-[76px]">
          <div v-for="(list, index) in block.dataImg" :key="index" class="gallery-item">
            <div class="aspect-[1/1]">
              <img :src="list.image" :alt="list.image_alt" class="object-cover w-full h-full"/>
            </div>
          </div>
        </div>
        <div class="lg:hidden grid grid-cols-1 gap-3 justify-items-end">
          <div v-for="(list, index) in block.dataImg" :key="index" class="gallery-item-mobile">
            <div class="aspect-[1/1]">
              <img :src="list.image" :alt="list.image_alt" class="object-cover"/>
            </div>
          </div>
        </div>
        <div class="lg:flex-row flex flex-col-reverse gap-10">
          <div class="flex flex-col lg:justify-start lg:items-start justify-center items-center lg:gap-10 gap-6">
            <div class="flex flex-col relative lg:p-6 p-2">
              <img src="/images/bling.png" class="absolute z-30 left-1/4 top-[-5px] w-6 h-6 lg:w-8 lg:h-8"/>
              <div class="ellipse"></div>
              <h2 class="z-20 text-main lg:text-5xl text-2xl uppercase text-center">{{ block.title }}</h2>
            </div>
            <ul class="flex lg:gap-6 gap-2 lg:justify-start lg:items-start justify-between items-between w-full overflow-hidden">
              <li
                v-for="(menu, index) in block.menuTab"
                :key="index"
                @click="handleTabMenu(index)"
                :class="{ 'text-main border-main': isActiveMenuItem(index) }"
                class="w-full text-center text-black whitespace-nowrap cursor-pointer px-4 py-2 font-[16px] rounded-full border border-[#5C5C5C] hover:border-main hover:text-main"
              >
                <a>{{ menu.tab }}</a>
              </li>
            </ul>
            <div v-html="block.description" class="text-black font-light font-sans tracking-wide custom-a text-center cursor-pointer"></div>
          </div>
          <swiper
            :slidesPerView="1"
            :spaceBetween="30"
            :pagination="{ clickable: true }"
            :modules="modules"
            class="mySwiper w-full"
            @swiper="onSwiper"
          >
            <swiper-slide v-for="(img, index) in block.imgTab" :key="index" >
              <div class="w-full flex flex-col lg:justify-center lg:items-center justify-end items-end">
                <img :src="img.img" :alt="img.img_alt" class="object-cover"/>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div> 
    <div class="lg:flex hidden h-full items-end gap-2 dot-images">
        <img src="/images/dotvang.png" alt="" class="h-[62px]"/>
        <img src="/images/dotvang.png" alt="" class="h-[62px]"/>
        <img src="/images/dotvangs.png" alt="" class="h-[62px]"/>
        <img src="/images/dottim.png" alt="" class="h-[62px]"/>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

const modules = [];
const mySwiper = ref<any | null>(null);

const onSwiper = (swiperInstance: any) => {
  mySwiper.value = swiperInstance;
};

const handleTabMenu = (index: number) => {
  if (mySwiper.value) {
    mySwiper.value.slideTo(index);
  }
};

const isActiveMenuItem = (index: number) => {
  return mySwiper.value?.activeIndex === index;
};

interface Props {
  dataBinding: any;
  block: any;
}
defineProps<Props>()
</script>

<style lang="scss" scoped>
.section-gallery {
  .gallery-item {
    grid-row: span 2 / span 2;
    &:nth-child(5n - 3),
    &:nth-child(5n)  {
      grid-row: span 1 / span 1;
    }
    &:nth-child(5n - 4)  {
      display: flex;
      align-items: center;
    }
    &:nth-child(5n - 2) {
      display: flex;
      align-items: flex-end;
    }
  }
  .custom-a {
    a {
      color:#6C5CE7;
      text-decoration-thickness: 1px;
    }
  }
}
</style>

<style lang="scss" scoped>
.section-gallery {
  .gallery-item-mobile {
    &:nth-child(5n - 3)  {
      display: flex;
    }
    &:nth-child(5n - 4)  {
      display: flex;
      width: 100%;
      justify-items: start;
    }
    &:nth-child(5n)  {
      display: flex;
      width: 100%;
      justify-items: start;
    }
    &:nth-child(5n - 2) {
      display: flex;
      width: 100%;
      justify-items: start;
    }
  }
}
</style>


