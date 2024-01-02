<template>
  <section :id="block.id" :style="{ background: block.background }" :data-cms-bind="dataBinding" class="section-client relative">
    <div class="lg:flex hidden h-full items-end justify-end gap-2 dot-images">
        <img src="/images/dottim.png" alt="" class="h-[62px]"/>
        <img src="/images/dotvang.png" alt="" class="h-[62px]"/>
        <img src="/images/dotvang.png" alt="" class="h-[62px]"/>
        <img src="/images/dotvangs.png" alt="" class="h-[62px]"/>
    </div>
    <div class="px-2 lg:py-28 py-10 ">
      <div class="flex flex-col justify-center items-center lg:gap-28 gap-10 h-auto">
        <div class="flex flex-col relative lg:p-6 p-2">
          <img src="/images/bling.png" class="absolute z-30 left-1/4 top-[-5px] w-6 h-6 lg:w-8 lg:h-8"/>
          <div class="ellipse"></div>
          <h2 class="z-20 text-main lg:text-5xl text-2xl uppercase text-center">{{ block.title }}</h2>
        </div>
        <div class="grid grid-flow-col grid-rows-2 gap-y-10 gap-x-2 w-full overflow-x-auto custom_scroll py-4">
          <div v-for="(item, index) in block.data" :key="index" class="client_item w-[320px]">
            <div :style="{ background: item.background }" class="flex flex-col gap-6 p-4 rounded-3xl">
              <div class="grid grid-cols-[1fr_3fr_1fr] gap-2 justify-center items-center w-full h-full">
                <img :src="item.user" :alt="item.user_alt"/>
                <div class="flex flex-col">
                  <b class="font-sans capitalize text-base">{{ item.name }}</b>
                  <p class="font-sans capitalize text-sm font-light	" >{{ item.mission }}</p>
                </div>
                <div class="bg-[#D2B2FF] rounded-full p-2 flex flex-col justify-center items-center">
                  <img :src="item.icon" class="object-cover w-6 h-6"/>
                </div>
              </div>
              <div class="font-sans capitalize text-base leading-6 font-light	">{{ item.description }}</div>
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

const { dataBinding, block } = defineProps<Props>();
</script>



<style lang="scss" scoped>
.section-client {
  .client_item {
    &:nth-child(odd) {
      display: flex;
      align-items: flex-end;
    }
  }
  /* Define the scrollbar style */
.custom_scroll::-webkit-scrollbar {
  width: 15px;
  height: 15px;
}

/* Define the thumb style */
.custom_scroll::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom right, #6C5CE7 0%, #6C5CE7 100%);
  border-radius: 5px;
}

/* Define the track style */
.custom_scroll::-webkit-scrollbar-track {
 background-color: #ddd;
 border: 10px solid #ccc;
}

/* Style the beginning section of the scrollbar track */
.custom_scroll::-webkit-scrollbar-track-piece:vertical:start {
  background-color: #6C5CE7;
}

/* Style the end section of the scrollbar track */
.custom_scroll::-webkit-scrollbar-track-piece:vertical:end {
  background-color: green;
}

/* Define the button style */
.custom_scroll::-webkit-scrollbar-button:vertical {
 background-color: #6C5CE7;
 background-repeat: no-repeat;   
 background-size: 50%;
 background-position: center;
}

.custom_scroll::-webkit-scrollbar-button:vertical:decrement {
 background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' fill='%23000000' viewBox='0 0 256 256'%3E%3Cpath d='M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z'%3E%3C/path%3E%3C/svg%3E");   
}

.custom_scroll::-webkit-scrollbar-button:vertical:increment {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' fill='%23000000' viewBox='0 0 256 256'%3E%3Cpath d='M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z'%3E%3C/path%3E%3C/svg%3E"); 
}

/* Define the button style when being hovered over */
.custom_scroll::-webkit-scrollbar-button:hover {
  background-color: #999999;
}
}


</style>
