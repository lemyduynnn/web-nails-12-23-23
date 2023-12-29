<template>
  <section :id="block.id" :style="{ backgroundImage: `url(${block.image})` }" class="section-banner lg:aspect-[5/2] relative" :data-cms-bind="dataBinding">
    <div class="lg:flex hidden h-full items-end gap-2 dot-images">
        <img src="/images/dotvang.png" alt="" class="h-[62px]"/>
        <img src="/images/dotvang.png" alt="" class="h-[62px]"/>
        <img src="/images/dotvangs.png" alt="" class="h-[62px]"/>
        <img src="/images/dottim.png" alt="" class="h-[62px]"/>
    </div>
    <div class="container h-full">
      <div class="w-full h-full flex flex-col justify-end items-end py-10">
          <div class="bg-white bg-opacity-50 z-10 rounded-3xl p-4">
              <div class="flex flex-col justify-center items-center lg:gap-6 gap-4 text-center">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6240333263745!2d106.64426347469808!3d10.840056889312594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175299ea71589e9%3A0xcac17f2d97912bbd!2zOSDEkMaw4budbmcgc-G7kSAxNCwgUGjGsOG7nW5nIDgsIEfDsiBW4bqlcCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1703474221923!5m2!1svi!2s" width="100%" height="100%" style="border:0; border-radius: 30px;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  <h4 class="text-main lg:text-5xl text-3xl">{{ block.title }}</h4>
                  <p class="text-black lg:text-2xl text-lg">{{ block.description }}</p>
                  <div class="text-black lg:text-5xl text-3xl">{{ block.subtitle }}</div>
                  <button class="uppercase text-white px-10 py-4 bg-main rounded-full lg:text-4xl text-xl">{{ block.button }}</button>
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
.section-banner {
  background-size: cover;
  .dot-images {
    position: absolute;
    left: 0;
    bottom: 0;
  }
}
</style>


