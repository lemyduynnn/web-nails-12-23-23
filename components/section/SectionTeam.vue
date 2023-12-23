<template>
  <section :id="block.id" :data-cms-bind="dataBinding" class="section-team bg-gray-200">
    <div class="bg-black w-full lg:rounded-br-[100px] rounded-none">
      <div class="container h-full">
        <div class="h-full flex flex-col py-16 gap-[66px]">
          <div class="hidden flex-col justify-end items-end lg:flex">
              <img src="/images/dot.png" class="w-[70px] h-auto rotate-90 mr-8 object-cover"/>
          </div>
          <div class="grid lg:grid-cols-2 grid-cols-1 gap-14">
            <div class="flex flex-col gap-8">
              <div class="text-white">
                <h4 class="text-[14px] leading-normal font-semibold uppercase">{{ block.title }}</h4>
                <h1 class="text-[56px] leading-[60px] font-normal mt-4">{{ block.subtitle }}</h1>
              </div>
              <div v-html="block.description" class="text-white text-lg font-normal leading-normal"></div>
              <img src="/images/dot.png" class="h-auto w-[70px] mt-10 object-cover hidden lg:block"/>
            </div>
            <div class="image-container flex flex-col">
              <div v-for="(img, index) in block.listImage" :key="index">
                  <img :src="img.image" :alt="img.image_alt" class="flex-shrink object-cover aspect-[3/2]" />
              </div>
              <div class="flex flex-col w-full justify-end items-start mt-16">
                <img src="/images/nextarrow.png" class="object-cover z-30 cursor-pointer"  @click="handleNextClick(block.listImage)" />
              </div>
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

const handleNextClick = (listImg: any) => {
  if (listImg.length >= 2) {
    const lastImage = listImg.pop();
    listImg.unshift(lastImage);
  }
  return listImg;
};

defineProps<Props>()
</script>

<style lang="scss" scoped>
.section-team {
  .image-container {
    height: 100%;
    width: 100%;
    position: relative;
    img {
      max-width: 560px;
      max-height: 370px;
    }
    :nth-child(1) {
      position: relative;
      padding-right: 10px;
    }
    :nth-child(2) {
      position: absolute;
      z-index: 2;
      top: 20px;
      left: 20px;
    }
    :nth-child(3) {
      position: absolute;
      z-index: 3;
      top: 40px;
      left: 40px;
    }
  }
}
</style>
