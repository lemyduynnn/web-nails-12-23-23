<template>
  <section :id="block.id" :style="{ background: block.background }" :data-cms-bind="dataBinding" class="section-awards relative">
    <div class="container lg:py-28 py-10">
      <div class="flex flex-col justify-center items-center lg:gap-20 gap-10 h-auto">
        <div class="flex flex-col relative lg:p-6 p-2">
          <img src="/images/bling.png" class="absolute z-30 left-1/4 top-[-5px] w-6 h-6 lg:w-8 lg:h-8"/>
          <div class="ellipse"></div>
          <h2 class="z-20 text-white lg:text-5xl text-2xl uppercase text-center">{{ block.title }}</h2>
        </div>
        <swiper
            :slidesPerView="1"
            :spaceBetween="30"
            :pagination="{ clickable: true }"
            :modules="modules"
            class="mySwiper w-full"
            @swiper="onSwiper"
        >
          <swiper-slide v-for="(data, index) in block.dataImg" :key="index">
            <div class="flex justify-between items-center gap-4">
              <div v-for="(img, index) in data.listImg" :key="index">
                <img :src="img.image" :alt="img.image_alt" class="object-cover"/>
                <!-- <h4 class="hidden">{{ img.title_img }}</h4> -->
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="flex w-full h-full justify-center items-center gap-10">
          <div class="bg-secondary rounded-2xl rotate-45">
            <img
            :class="{ 'opacity-20 cursor-auto': isFirstSlide }"
            src="/images/nexttim.png"
            class="cursor-pointer object-cover z-30 w-[62px] bottom-36 rotate-[-225deg] p-2"
            @click="prevSlide"/>
          </div>
          <div class="flex gap-2">
            <div v-for="(item, index) in block.dataImg" :key="index">
              <span
                class="text-gray-300 cursor-pointer text-2xl"
                :class="{ 'text-secondary': index === currentSlide }"
                @click="goToSlide(index)"
              >{{ index + 1 }}</span>
            </div>
          </div>
          <div class="bg-secondary rounded-2xl rotate-45">
            <img
            :class="{ 'opacity-20 cursor-auto': isLastSlide }"
            src="/images/nexttim.png"
            class="cursor-pointer object-cover z-30 w-[62px] bottom-36 rotate-[-45deg] p-2"
            @click="nextSlide"
          />
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
const currentSlide = ref(0);

const onSwiper = (swiperInstance: any) => {
  mySwiper.value = swiperInstance;
  updateSlideStatus();
};

const updateSlideStatus = () => {
  isFirstSlide.value = mySwiper.value?.isBeginning;
  isLastSlide.value = mySwiper.value?.isEnd;
  currentSlide.value = mySwiper.value?.activeIndex || 0;  
};

const prevSlide = () => {
  if (mySwiper.value) {
    mySwiper.value.slidePrev();
    updateSlideStatus();
  }
};

const nextSlide = () => {
  if (mySwiper.value) {
    mySwiper.value.slideNext();
    updateSlideStatus();
  }
};

const goToSlide = (index: number) => {
  if (mySwiper.value) {
    mySwiper.value.slideTo(index);
    updateSlideStatus();
  }
};


interface Props {
  dataBinding: any;
  block: any;
}

const { dataBinding, block } = defineProps<Props>();
</script>



<style lang="scss" scoped>
.section-awards {
  .ellipse {
    border: 1px solid #FFF; 
  }
  
}
</style>
