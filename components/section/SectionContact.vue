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
        <div class="h-full lg:flex block gap-10 items-center bg-[#0E0E0E] rounded-3xl">
          <div class="bg-white lg:rounded-s-3xl rounded-t-3xl lg:rounded-tr-none py-2 lg:w-1/2 w-full h-full flex flex-col justify-between">
            <div class=" justify-between px-6 flex gap-6 items-center py-10">
              <span class="mr-10">+1 234 456 0099</span>
              <span class="rounded-full bg-black p-2"><img src="/images/headphone.png" class="object-cover w-6 h-6"></span>
            </div>
            <div class="h-[0.5px] w-full bg-black"></div>
            <div class=" justify-between px-6 flex gap-6 items-center py-10">
              <span class="mr-10">11011 Richmond Ave, Houston</span>
              <span class="rounded-full bg-black p-2"><img src="/images/headphone.png" class="object-cover w-6 h-6"></span>
            </div>
            <div class="h-[0.5px] w-full bg-black"></div>
            <div class=" justify-between px-6 flex gap-6 items-center py-10">
              <span class="mr-10">contact@fastboy.net</span>
              <span class="rounded-full bg-black p-2"><img src="/images/headphone.png" class="object-cover w-6 h-6"></span>
            </div>
          </div>
          <div class="flex flex-col h-full w-full gap-10 p-10">
              <div class="flex flex-col gap-2 text-white">
                  <lable class="text-sm uppercase">Name</lable>
                  <input type="text" class="p-2 bg-white rounded-md" placeholder="Enter your name"/>
              </div>
              <div class="flex flex-col gap-2 text-white">
                  <lable class="text-sm uppercase">Email</lable>
                  <input type="text" class="p-2 bg-white rounded-md" placeholder="Enter your email"/>
              </div>
              <div class="flex flex-col gap-2 text-white">
                  <lable class="text-sm uppercase">Phone</lable>
                  <input type="text" class="p-2 bg-white rounded-md" placeholder="Enter your phone"/>
              </div>
              <div class="flex flex-col gap-2 text-white">
                <button class="transition hover:opacity-90 hover:bg-[#1a1a1a] hover:transition-all rounded-lg uppercase h-full bg-black text-white p-4">submit</button>
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