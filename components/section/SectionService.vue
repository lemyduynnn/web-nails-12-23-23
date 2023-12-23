<template>
  <section :id="block.id" :style="{ background: block.background }" :data-cms-bind="dataBinding" class="section-service py-16">
    <div class="container">
      <div class="flex flex-col">
        <div class="lg:flex hidden flex-col items-end justify-end mr-10 mb-[-100px] z-10">
          <img src="/images/dotblack.png" class="object-cover"/>
        </div>
        <div class="text-main grid lg:grid-cols-2 grid-cols-1">
          <div class="text-main flex flex-col gap-6">
            <h4 class="text-[14px] leading-normal font-semibold uppercase">{{ block.title }}</h4>
            <h1 class="text-[56px] leading-[60px] font-normal">{{ block.subtitle }}</h1>
            <div class="text-lg font-normal leading-normal w-full lg:w-2/3" v-html="block.description"></div>
            <div class="flex gap-24">    
              <ul class="lg:flex-col flex-row flex lg:gap-6 lg:justify-start lg:items-start justify-between items-between w-full mb-10">
                <li v-for="(item, index) in block.listTab" :key="index" :class="{ 'bg-main text-secondary flex justify-between items-center gap-4 w-full': isActive(item.num) }" @click="setActive(item.num)" class="w-full text-sm px-4 py-2 cursor-pointer whitespace-nowrap text-main font-medium lg:text-[40px] text-[20px] leading-tight">
                  {{item.title_tab}}
                  <span v-if="isActive(item.num)" class="text-xl hidden lg:block">{{item.num}}</span>
                </li>
              </ul>
              <div class="hidden lg:flex flex-col h-full justify-center mr-[-40px] z-10">
                <div v-for="(item, index) in block.listTab" :key="index">
                  <div v-if="isActive(item.num)" class="text-secondary bg-main p-6 h-auto">
                    <h4 class="text-2xl font-medium mb-2">{{ item.title_tab }}</h4>
                    <p class="leading-normal">{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-center items-center">
            <img :src="block.image" :alt="block.image_alt" class="w-[646px] h-[450px] flex-shrink object-cover">
          </div>
          <div v-for="(item, index) in block.listTab" :key="index" class="flex lg:hidden flex-col w-full justify-center items-center">
            <div v-if="isActive(item.num)" class="text-secondary bg-main p-6 w-2/3 mt-[-40px]">
              <h4 class="text-2xl font-medium mb-4">{{ item.title_tab }}</h4>
              <p class="leading-normal">{{ item.description }}</p>
            </div>
          </div>
        </div> 
        <div class="lg:flex hidden flex-col w-[70px] h-auto items-center rotate-90 ml-8">
          <img src="/images/dotblack.png" class="object-cover"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface Props {
  dataBinding: any;
  block: any;
}

const activeTab = ref(1);
const isActive = (tab: number) => activeTab.value === tab;

const setActive = (tab: number) => {
  activeTab.value = tab;
};

defineProps<Props>()
</script>

<style lang="scss" scoped>
.section-service {
}
</style>
