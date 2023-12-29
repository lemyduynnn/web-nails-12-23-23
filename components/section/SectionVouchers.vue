<template>
  <section :id="block.id" :style="{ background: block.background }" :data-cms-bind="dataBinding" class="section-vouchers relative">
    <div class="lg:flex hidden items-start absolute top-0 left-0">
      <div class="bg-secondary w-[375px] h-[229px]"></div>
      <div class="bg-main w-[100px] h-[229px] rounded-br-full"></div>
    </div>
    <div class="container lg:pb-28 lg:pt-44 py-10">
      <div class="flex flex-col justify-center items-center lg:gap-28 gap-10 h-auto">
        <div class="flex flex-col relative lg:p-6 p-2">
          <img src="/images/bling.png" class="absolute z-30 left-1/4 top-[-5px] w-6 h-6 lg:w-8 lg:h-8"/>
          <div class="ellipse"></div>
          <h2 class="z-20 text-main lg:text-5xl text-2xl uppercase text-center">{{ block.title }}</h2>
        </div>
        <div class="custom-img flex flex-col justify-between items-start h-full lg:my-20 my-10 w-full gap-4">
          <div v-for="(img, index) in block.dataImg" :key="index">
            <img :src="img.image" :alt="img.image_alt" class="flex-shrink object-cover"/>
          </div>
        </div>
        <div class="w-full flex flex-col justify-center items-center">
          <button class="transition hover:opacity-90 hover:transition-all bg-main text-white text-center lg:w-1/3 w-full py-4 rounded-full">{{ block.button }}</button>
        </div>
      </div>
    </div>
    <div class="lg:flex hidden items-end absolute bottom-0 right-0">
      <div class="bg-main w-[100px] h-[229px] rounded-tl-full"></div>
      <div class="bg-secondary w-[375px] h-[229px]"></div>
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
.section-vouchers {
  .custom-img {
    div {
      position: relative;
    }
    img {
      max-width: 667px;
      max-height: 346px;
      width: 100%;
      height:100%;
    }
    :first-child {
      position: relative;
    }
    :nth-child(2) {
      position: absolute;
      z-index: 2;
      left: 44%;
      top:45%;
    }
    @media only screen and (max-width: 789px) {
      :nth-child(2) {
        position: relative;
        left: auto;
        top: auto;
      }
    }
  }
}
</style>
