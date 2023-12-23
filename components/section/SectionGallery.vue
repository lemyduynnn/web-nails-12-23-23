<template>
  <section :id="block.id" :style="{ background: block.background }" :data-cms-bind="dataBinding" class="section-story">
  <div class=" bg-main w-full lg:rounded-tr-[100px] rounded-none">
    <div class="container h-full">
      <div class="h-full flex flex-col gap-4 lg:py-16 py-6 relative">
        <div class="lg:flex justify-between items-end">
            <div class="text-secondary">
                <h4 class="text-[14px] leading-normal font-semibold uppercase">{{ block.title }}</h4>
                <h1 class="text-[56px] leading-[60px] font-normal mt-4" v-html="block.subtitle"></h1>
            </div>
            <div class="">
              <ul class="text-secondary flex gap-6">
                <li v-for="(menu, index) in block.listMenu" :key="index" @click="handleTabMenu(index)" :class="{ 'border-b border-secondary': updateActiveMenuItem(index) }" class="whitespace-nowrap cursor-pointer p-2 font-[24px] transition-all duration-100 border-b border-main hover:border-secondary">
                  <a>{{ menu.item }}</a>
                </li>
              </ul>
            </div>
        </div>
        <div class="flex justify-between lg:mt-10 mt-0">
          <swiper
            :slidesPerView="3"
            :spaceBetween="30"
            :pagination="{ clickable: true }"
            :modules="modules"
            class="mySwiper"
            @swiper="onSwiper"
          >
            <swiper-slide v-for="(image, index) in block.listImage" :key="index">
              <img :src="image.image" :alt="image.image_alt" class="mb-4"/>
              <div class="flex flex-col gap-2 text-secondary">
                <span class="lg:text-2xl text-base">{{ image.title }}</span>
                <span class="lg:text-base text-xs">{{ image.subtitle }}</span>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="lg:flex hidden h-full justify-between items-center mt-10">
          <img
            :class="{ 'opacity-20 cursor-auto': isFirstSlide }"
            src="/images/nextarrow.png"
            class="cursor-pointer object-cover z-30 w-[62px] bottom-36 rotate-180"
            @click="prevSlide"
          />
          <img
            :class="{ 'opacity-20 cursor-auto': isLastSlide }"
            src="/images/nextarrow.png"
            class="cursor-pointer object-cover z-30 w-[62px] bottom-36"
            @click="nextSlide"
          />
        </div>
        <div class="w-full h-px bg-secondary lg:my-16 my-6"></div>
        <div class="flex flex-col justify-center items-center w-full gap-4">
          <div class="flex justify-between lg:w-1/2 w-full items-center">
            <h4 class="text-3xl font-normal text-secondary w-1/2">{{block.infor}}</h4>
            <div class="h-full"><img src="/images/phay.png" class="object-cover"/></div>
          </div>
          <div class="lg:w-1/2 w-full">
            <button @click="isOpen = true" class="transition hover:opacity-90 hover:transition-all hidden lg:block uppercase bg-secondary text-main p-2 w-full rounded font-medium">{{ block.button_booking[0].button_desktop }}</button>
            <div class="flex items-center justify-between lg:hidden w-full">
              <div class="relative flex-grow border-solid border-4 rounded-lg border-secondary">
                <input type="text" class="mr-2 bg-secondary w-full p-4 pl-4" placeholder="Enter your mail">
                <button @click="isOpen = true" class="transition hover:opacity-80 hover:transition-all rounded-lg uppercase absolute inset-y-0 right-0 h-full bg-main text-secondary p-4">{{ block.button_booking[1].button_mobile }}</button>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full h-px bg-secondary lg:my-16 my-6"></div>
        <div class="lg:hidden block">
          <UModal v-model="isOpen" id="custom-modal" class="h-full">
            <div class="p-4 text-secondary grid lg:grid-cols-2 grid-cols-1 gap-4 text-xs h-full">
              <div class="flex flex-col gap-2">
                <h4 class="font-medium text-xl mb-2">{{ block.title_modal }}</h4>
                <div class="flex gap-2">
                  <input type="date" class="custom-input border-none p-2 text-secondary bg-[#0E0E0E] rounded"/>
                  <USelect v-model="country" :options="countries" id="custom-select"/>
                </div>
                <div class="w-full">
                  <USelect v-model="country" :options="countries" id="custom-select"/>
                </div>
                <div class="flex flex-col gap-2 text-xs">
                  <div class="flex gap-4 justify-start items-center">
                    <h4>{{ block.time[0].morning }}</h4>
                    <div class="h-px w-20 bg-secondary"></div>
                  </div>
                  <div class="flex gap-4">
                    <button v-for="(item, index) in listTimeMorning" :key="index" class="transition hover:opacity-80 hover:bg-main hover:transition-all h-full border-[0.5px] text-secondary rounded p-2">{{ item }}</button>
                  </div>
                </div>
                <div class="flex flex-col gap-2 text-xs">
                  <div class="flex gap-4 justify-start items-center">
                    <h4>{{ block.time[1].afternoon }}</h4>
                    <div class="h-px w-20 bg-secondary"></div>
                  </div>
                  <div class="grid grid-cols-4 gap-2">
                    <button v-for="(item, index) in listTimeAfternoon" :key="index" class="transition hover:opacity-80 hover:bg-main hover:transition-all h-full border-[0.5px] text-secondary rounded p-2">{{ item }}</button>
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-2">
                <h4 class="font-medium text-xl mb-2">{{block.title_infor_update}}</h4>
                <div class="flex gap-2">
                  <div class="border-[0.5px] text-secondary rounded p-2">{{ block.date_infor_update }}</div>
                  <div class="text-main bg-secondary rounded p-2">{{ block.time_infor_update }}</div>
                </div>
                <div class="flex flex-col h-full w-full gap-2 text-xs">
                  <input type="text" class="p-2 bg-secondary text-main rounded" placeholder="Your name ( Required )"/>                 
                  <input type="text" class="p-2 bg-secondary text-main rounded" placeholder="Your phone ( Required )"/>                 
                  <textarea type="textarea" rows="6" cols="50" class="p-2 bg-secondary text-main rounded" placeholder="Note ( Optional ) (Max length 200 character)"/>               
                  <button class="transition hover:opacity-80 hover:bg-main hover:transition-all border-[0.5px] text-secondary rounded p-2">{{ block.button_update }}</button>
              </div>
              </div>
            </div>
          </UModal>
        </div>
      </div>
    </div> 
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
const isFirstSlide = ref(false);
const isLastSlide = ref(false);

const onSwiper = (swiperInstance: any) => {
  mySwiper.value = swiperInstance;
};

const updateSlideStatus = () => {
  isFirstSlide.value = mySwiper.value?.isBeginning;
  isLastSlide.value = mySwiper.value?.isEnd;
};

const runMenuItemIndex = (currentSlideIndex: number) => {
  const slidesTab = 3;
  return Math.floor(currentSlideIndex / slidesTab);
};

const updateActiveMenuItem = (index: number) => {
  if (mySwiper.value) {
    const activeMenuItemIndex = runMenuItemIndex(mySwiper.value.activeIndex);
    return index === activeMenuItemIndex;
  }
  return false;
};


const handleTabMenu = (index: number) => {
  if (mySwiper.value) {
    const targetSlideIndex = index * 3;
    mySwiper.value.slideTo(targetSlideIndex);
    updateActiveMenuItem(index);
    updateSlideStatus();
  }
};

const prevSlide = () => {
  if (mySwiper.value) {
    const runPrevSlide = 3;
    for (let i = 0; i < runPrevSlide; i++) {
      mySwiper.value.slidePrev();
    }
    updateSlideStatus();
  }
};
const nextSlide = () => {
  if (mySwiper.value) {
    const runNextSlide = 3;
    for (let i = 0; i < runNextSlide; i++) {
      mySwiper.value.slideNext();
    }
    updateSlideStatus();
  }
};

interface Props {
  dataBinding: any;
  block: any;
}

const { dataBinding, block } = defineProps<Props>();

const isOpen = ref(false);
const countries = ['Eyelash + Full Body Waxing', 'Waxing + Full Body Waxing ($100)', 'Nail Art + Full Body Waxing ($100)'];
const country = ref(countries[0]);

const listTimeMorning: string[] = [];
for (let i = 1; i < 5; i++) {
  listTimeMorning.push(`09:${i}0 am`);
}

const listTimeAfternoon: string[] = [];
for (let i = 12; i < 20; i++) {
  listTimeAfternoon.push(`${i}:00 am`);
}
</script>

<style lang="scss" scoped>
.section-gallery {
  .list-menu {
    :nth-child(2) {
        margin-top: 30px;
    }
  }
}
</style>
<style lang="scss">
  #custom-modal{
    .sm\:max-w-lg {
       max-width: 45rem;
       background-color: #000;
       padding: 10px;
    }
    .bg-gray-200\/75 {
      background-color: rgba(0,0,0,.75) !important;
    }
   #custom-select {
      border: none;
      background-color: #0E0E0E;
      border-radius: 4px;
      padding: 16px;
      color: #cccc;
      display: flex;
      .text-gray-400 {
        color: white !important;
        padding: 0 !important;
      }
    }
  }
  .custom-input {
    &::-webkit-calendar-picker-indicator{
    background-color: #ffffff;
    padding: 5px;
    cursor: pointer;
    border-radius: 3px;
}
  }
</style>