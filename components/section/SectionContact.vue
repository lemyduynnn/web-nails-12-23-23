<template>
  <section :id="block.id" :style="{ background: block.background }" :data-cms-bind="dataBinding" class="section-story w-full">
    <div class="container lg:py-28 py-10">
      <div class="flex flex-col justify-center items-center lg:gap-20 gap-10 h-auto">
        <div class="flex flex-col relative lg:p-6 p-2">
          <img src="/images/bling.png" class="absolute z-30 left-1/4 top-[-5px] w-6 h-6 lg:w-8 lg:h-8"/>
          <div class="ellipse"></div>
          <h2 class="z-20 text-main lg:text-5xl text-2xl uppercase text-center">{{ block.title }}</h2>
        </div>
        <div class="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10">
          <img :src="block.image" :alt="block.image_alt" class="rounded-[60px]"/>
          <div class="flex flex-col gap-10">
            <div class="flex flex-col gap-6">
              <div v-for="(list, index) in block.infor" :key="index" class="flex gap-3">
                <span class="text-main whitespace-nowrap">{{ list.lable }} :</span><span v-html="list.text"></span>
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