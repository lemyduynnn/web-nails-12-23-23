<template>
  <section :id="block.id" :data-cms-bind="dataBinding" class="section-story bg-black w-full lg:rounded-tr-[100px] rounded-none">
    <div class="container h-full">
      <div class="h-full flex flex-col gap-10 lg:py-16 py-6 relative">
        <div class="grid grid-cols-2">
            <div class="text-white">
                <h4 class="text-[14px] leading-normal font-semibold uppercase">{{ block.title }}</h4>
                <h1 class="text-[56px] leading-[60px] font-normal mt-4" v-html="block.subtitle"></h1>
            </div>
            <div class="flex flex-col lg:items-center lg:justify-start items-end justify-end lg:rotate-90 rotate-0">
              <img src="/images/dot.png" class="object-cover"/>
            </div>
        </div>
        <div class="lg:flex block gap-14 text-white">
            <img :src="block.image" alt="story video" class="w-[646px] h-[450px] flex-shrink object-cover">
            <div class="flex flex-col lg:py-0 py-10">
              <div v-html="block.description" class="mb-6 text-lg font-normal leading-normal"></div>
            </div>
        </div>
        <div class="hidden lg:block w-[70px] h-auto absolute bottom-0 left-10">
            <img src="/images/dot.png" class="object-cover"/>
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
.section-story {
  .text-desc {
    p {
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>