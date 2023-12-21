<template>
  <header :style="{ background: headerData.background }" class="text-black sticky top-0 z-[99999] h-[84px]">
    <div class="container h-full" style="background-color: #ffff;">
      <div class="h-full">
        <nav class="flex items-center gap-[30px] justify-between h-full">
          <div>
            <img v-if="headerData.logo" :src="headerData.logo" :alt="headerData.image_alt"/>
          </div>
          <div class="hidden lg:flex">
            <ul class="lg:flex items-center h-full">
              <li v-for="item in headerData.nav" :key="item.link" class="header-menu-line">
                <NuxtLink
                  class="block"
                  :to="item.link"
                >
                  {{ item.text }}
                </NuxtLink>
              </li>
            </ul>
            <ul class="lg:flex items-center h-full header-menu-icon">
              <li v-for="(item, index) in headerData.icon" :key="index+1">
                <img :src="item.nameIcon" class="cursor-pointer"/>
              </li>
            </ul>
          </div>
          <div class="lg:hidden block">
            <img src="/images/icon-menu.png" alt="" class="mx-auto" @click="isOpen = true">
          </div>
        </nav>
      </div>
    </div>
    <div class="lg:hidden block">
      <USlideover v-model="isOpen" class="nav-mobile">
        <div class="p-4 flex-1 relative">
          <div class="absolute top-3 right-3">
            <UIcon name="i-ri-close-line" class="w-[40px] h-[40px]" @click="isOpen = false" />
          </div>
          <div class="mb-[40px]">
            <NuxtLink to="/">
              <img v-if="headerData.logo" class="max-h-[100px] block" :src="headerData.logo" :alt="headerData.image_alt">
            </NuxtLink>
          </div>
          <nav>
            <ul class="flex flex-col">
              <li v-for="item in headerData.nav" :key="item.link">
                <NuxtLink
                  class="block"
                  :to="item.link"
                >
                  {{ item.text }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </USlideover>
    </div>
  </header>
</template>

<script setup lang="ts">
import headerData from '@/data/header.json';

const isOpen = ref(false)
const route = useRoute();

watch(() => route.fullPath, () => {
  isOpen.value = false
})

</script>

<style lang="scss" scoped>
nav {
  ul {
    gap: 30px;
    li {
      a {
        font-size: 17px;
        font-weight: 400;
        transition: all 0.3s ease;
        text-transform: uppercase;
        &:hover {
          font-weight: bold;
        }
      }
    }
    .header-menu-line:last-child {
         position: relative;
         &:after {
            position: absolute;
            right: -30px;
            top: 1px;
            height: 20px;
            width: 1px;
            background:#000000 ;
            content: "";
         }
      }
  }
  .header-menu-icon {
        gap: 20px;
        margin-left: 60px;
  }
}
</style>

<style lang="scss">
.nav-mobile {
  z-index: 99999;
  & > div {
    &:last-child {
      background: #fff;
      max-width: 90%;
    }
  }
  ul {
    li {
      a {
        font-size: 16px !important;
      }
    }
  }
}
</style>
