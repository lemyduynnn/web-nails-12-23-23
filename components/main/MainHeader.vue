<template>
  <header :style="{ background: headerData.background }" class="text-main sticky top-0 z-[99999] h-[88px]">
    <div class="container h-full" :style="{ background: headerData.background }">
      <div class="h-full">
        <nav class="flex items-center gap-[30px] justify-between h-full">
          <div class="">
            <img v-if="headerData.logo" :src="headerData.logo" :alt="headerData.image_alt"/>
          </div>
          <div class="hidden lg:flex">
            <ul class="lg:flex items-center h-full text-white">
              <li v-for="item in headerData.nav" :key="item.link" :class="{ 'text-secondary': isActiveMenuItem(item.link) }" class="hover:text-secondary">
                <NuxtLink
                  class="block"
                  :to="item.link"
                >
                  {{ item.text }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="lg:hidden block">
            <img src="/images/icon-menu.png" alt="" class="mx-auto cursor-pointer" @click="isOpen = true">
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
              <li v-for="item in headerData.nav" :key="item.link"  :class="{ 'text-secondary': isActiveMenuItem(item.link) }" class="hover:text-secondary">
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
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const isOpen = ref(false);
const route = useRoute();

watch(() => route.fullPath, () => {
  isOpen.value = false;
});

const isActiveMenuItem = (link:any) => {
  return route.path === link;
};
</script>


<style lang="scss" scoped>
nav {
  ul {
    gap: 30px;
    li {
      a {
        font-size: 12px;
        font-weight: 400;
        transition: all 0.3s ease;
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
