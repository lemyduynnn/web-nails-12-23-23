<template>
  <section :id="block.id" :data-cms-bind="dataBinding" class="section-story bg-black w-full">
    <div class="container">
      <div class="flex flex-col lg:pb-16 pb-6 gap-10">
        <div class="lg:flex justify-between items-center">
            <div class="text-white lg:w-2/3 w-full">
                <h4 class="text-[14px] leading-normal font-semibold uppercase">{{ block.title }}</h4>
                <h1 class="text-[56px] leading-[60px] font-normal mt-4" v-html="block.subtitle"></h1>
            </div>
            <img src="/images/dot.png" class="object-cover lg:block hidden"/>
        </div>
        <div class="lg:grid lg:grid-cols-3 grid-cols-1 gap-4 items-center bg-[#0E0E0E] rounded-3xl">
          <div class="h-full w-full bg-white lg:rounded-s-3xl rounded-t-3xl lg:rounded-tr-none flex flex-col justify-between">
            <div class="h-full justify-between p-6 flex items-center mr-20">
              <span class="w-2/3 mr-4">{{ block.phone }}</span>
              <span class="rounded-full bg-black p-2"><img src="/images/headphone.png" class="object-cover min-w-5 min-h-5 w-6 h-6"></span>
            </div>
            <div class="h-px bg-black"></div>
            <div class="mr-20 h-full justify-between p-6 flex items-center">
              <span class="w-2/3 mr-4">{{ block.address }}</span>
              <span class="rounded-full bg-black p-2"><img src="/images/headphone.png" class="object-cover min-w-3 min-h-3 w-6 h-6"></span>
            </div>
            <div class="h-px bg-black"></div>
            <div class="mr-20 h-full justify-between p-6 flex items-center">
              <span class="w-2/3 mr-4">{{ block.email }}</span>
              <span class="rounded-full bg-black p-2"><img src="/images/headphone.png" class="object-cover min-w-3 min-h-3 w-6 h-6"></span>
            </div>
          </div>
          <div class="h-full w-full flex flex-col gap-4 p-10 col-span-2">
            <div v-for="(item, index) in block.input_contact" :key="index" class="flex flex-col gap-2 text-white">
                <lable class="text-sm uppercase">{{item.lable}}</lable>
                <input type="text" class="p-2 text-sm bg-white rounded-md" :placeholder="item.placeholder"/>
            </div>
            <button class="text-sm transition hover:opacity-90 hover:bg-[#1a1a1a] hover:transition-all rounded-lg uppercase h-full bg-black text-white p-2">{{block.button}}</button>
          </div>       
        </div>
      </div>
    </div> 
  </section>
</template>

<script lang="ts" setup>
interface Props {
  dataBinding: string;
  block: string;
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.section-contact {

}
</style>