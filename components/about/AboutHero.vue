
<template>
  <section :id="block.id" :style="{ backgroundImage: `url(${block.image})`}" :data-cms-bind="dataBinding" class="section-hero bg-cover bg-center h-[760px]">
    <div class="container w-full h-full py-10">
      <h2 class="text-white text-3xl">{{ block.title }}</h2>
      <div class="w-full h-full flex flex-col justify-end items-end">
          <div class="bg-white lg:bg-opacity-50 backdrop-blur-md z-10 rounded-t-3xl p-10">
              <div class="flex flex-col justify-center items-center lg:gap-6 gap-4 text-center">
                <div class="lg:flex-row flex flex-col justify-center items-center gap-2 custom-subtitle">
                  <h4 v-for="(item, key) in block.subtitle" :key="key" class="text-black lg:text-5xl text-3xl">{{ item.text }}</h4>
                </div>
                <p class="text-black text-base text-justify font-sans lg:bg-transparent">{{ block.description }}</p>
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

const { dataBinding, block } = defineProps<Props>();
</script>

<style lang="scss" scoped>
.section-hero {
  .custom-subtitle {
    :last-child {
      color:#6C5CE7;
      text-transform: uppercase;
    }
  }
}
</style>
