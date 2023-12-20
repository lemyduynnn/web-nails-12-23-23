<template>
  <section :id="block.id" :data-cms-bind="dataBinding" class="section-story bg-black w-full lg:rounded-tr-[100px] rounded-none">
    <div class="container h-full">
      <div class="h-full flex flex-col gap-4 lg:py-16 py-6 relative">
        <div class="lg:flex justify-between items-end">
            <div class="text-white">
                <h4 class="text-[14px] leading-normal font-semibold uppercase">{{ block.title }}</h4>
                <h1 class="text-[56px] leading-[60px] font-normal mt-4" v-html="block.subtitle"></h1>
            </div>
            <div class="">
              <ul class="text-white flex gap-6">
                <li v-for="(menu, index) in block.listMenu" :key="index" class="cursor-pointer p-2 font-[24px] transition-all duration-100 hover:border-b hover:border-white">
                  <a class="">{{ menu.item }}</a>
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
        <template v-for="a in 3">
          <swiper-slide v-for="(image, index) in block.listImage" :key="index" class="flex flex-col">
              <img :src="image.image" :alt="image.image_alt"/>
              <div class="flex flex-col gap-2 text-white">
                  <span class="lg:text-2xl text-base">{{ image.title }}</span>
                  <span class="lg:text-base text-xs">{{ image.subtitle }}</span>
              </div>
            </swiper-slide>
        </template>
        </swiper>
        </div>
        <div class="lg:flex hidden flex-col h-full justify-end items-end mt-10">
          <img src="/images/nextarrow.png" class="cursor-pointer object-cover z-30 w-[62px] bottom-36" @click="nextSlide" />
        </div>
        <div class="w-full h-px bg-white lg:my-16 my-6"></div>
        <div class="flex flex-col justify-center items-center w-full gap-4">
          <div class="flex justify-between lg:w-1/2 w-full items-center">
            <h4 class="text-3xl font-normal text-white w-1/2">Stay informed with our newsletter.</h4>
            <div class="h-full"><img src="/images/phay.png" class="object-cover"/></div>
          </div>
          <div class="lg:w-1/2 w-full">
            <button @click="isOpen = true" class="transition hover:opacity-90 hover:transition-all hidden lg:block uppercase bg-white text-black p-2 w-full rounded font-medium">Booking now</button>
            <div class="flex items-center justify-between lg:hidden w-full">
              <div class="relative flex-grow border-solid border-4 rounded-lg border-white">
                <input type="text" class="mr-2 bg-white w-full p-4 pl-4" placeholder="Enter your mail">
                <button @click="isOpen = true" class="transition hover:opacity-80 hover:transition-all rounded-lg uppercase absolute inset-y-0 right-0 h-full bg-black text-white p-4">Subcribe now</button>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full h-px bg-white lg:my-16 my-6"></div>
        <div class="lg:hidden block">
          <UModal v-model="isOpen" id="custom-modal" class="h-full">
            <div class="p-4 text-white grid lg:grid-cols-2 grid-cols-1 gap-4 text-xs h-full">
              <div class="flex flex-col gap-2">
                <h4 class="font-medium text-xl mb-2">BOOKING AN APPOINTMENT</h4>
                <div class="flex gap-2">
                  <input type="date" class="custom-input border-none p-2 text-white bg-[#0E0E0E] rounded"/>
                  <USelect v-model="country" :options="countries" id="custom-select"/>
                </div>
                <div class="w-full">
                  <USelect v-model="country" :options="countries" id="custom-select"/>
                </div>
                <div class="flex flex-col gap-2 text-xs">
                  <div class="flex gap-4 justify-start items-center">
                    <h4>Morning</h4>
                    <div class="h-px w-20 bg-white"></div>
                  </div>
                  <div class="flex gap-4">
                    <button v-for="(item, index) in listTimeMorning" :key="index" class="transition hover:opacity-80 hover:bg-black hover:transition-all h-full border-[0.5px] text-white rounded p-2">{{ item }}</button>
                  </div>
                </div>
                <div class="flex flex-col gap-2 text-xs">
                  <div class="flex gap-4 justify-start items-center">
                    <h4>Afternoon</h4>
                    <div class="h-px w-20 bg-white"></div>
                  </div>
                  <div class="grid grid-cols-4 gap-2">
                    <button v-for="(item, index) in listTimeAfternoon" :key="index" class="transition hover:opacity-80 hover:bg-black hover:transition-all h-full border-[0.5px] text-white rounded p-2">{{ item }}</button>
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-2">
                <h4 class="font-medium text-xl mb-2">YOUR INFORMATION</h4>
                <div class="flex gap-2">
                  <div class="border-[0.5px] text-white rounded p-2">Thursday 10-26-2023</div>
                  <div class="text-black bg-white rounded p-2">16:30</div>
                </div>
                <div class="flex flex-col h-full w-full gap-2 text-xs">
                  <input type="text" class="p-2 bg-white text-black rounded" placeholder="Your name ( Required )"/>                 
                  <input type="text" class="p-2 bg-white text-black rounded" placeholder="Your phone ( Required )"/>                 
                  <textarea type="textarea" rows="6" cols="50" class="p-2 bg-white text-black rounded" placeholder="Note ( Optional ) (Max length 200 character)"/>               
                  <button class="transition hover:opacity-80 hover:bg-black hover:transition-all border-[0.5px] text-white rounded p-2">CONFIRM APPOINTMENT</button>
              </div>
              </div>
            </div>
          </UModal>
        </div>
      </div>
    </div> 
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const modules = [];
const mySwiper = ref(null);

const onSwiper = (swiperInstance) => {
  mySwiper.value = swiperInstance;
};

const nextSlide = () => {
  if (mySwiper.value) {
    mySwiper.value.slideNext();
  }
};


interface Props {
  dataBinding: any;
  block: any;
}

const isOpen = ref(false);
const countries = ['Eyelash + Full Body Waxing', 'Waxing + Full Body Waxing ($100)', 'Nail Art + Full Body Waxing ($100)'];
const country = ref(countries[0]);

const listTimeMorning = [];
for (let i = 1; i < 5; i++) {
  listTimeMorning.push(`09:${i}0 am`);
}

const listTimeAfternoon = [];
for (let i = 12; i < 20; i++) {
  listTimeAfternoon.push(`${i}:00 am`);
}

defineProps<Props>();
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
       background-color: black;
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