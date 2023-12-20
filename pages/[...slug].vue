<template>
  <main>
    <template v-if="formattedPage">
      <component
        :is="block._block_name"
        v-for="(block, index) in formattedPage.content_blocks"
        :id="block.id"
        :key="index"
        :block="block"
        :data-binding="`#content_blocks.${index}`"
      />
    </template>
    <slot />
  </main>
</template>

<script lang="ts" setup>
import NewzenConnector from 'newzen-connector';
import 'newzen-connector/dist/style.css';

const route = useRoute();
const { page } = useContent();

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true })
}
const pageData = page.value;

const head = generateHead(pageData, route);
useHead(head);

const formattedPage = ref(pageData.content_blocks ? NewzenConnector.formatContentBlock(pageData) : {});

const newzenCallback = (_formattedPage: any) => {
  formattedPage.value = _formattedPage;
}

const connector = new NewzenConnector({ initialData: formattedPage.value, callback: newzenCallback });

onMounted(() => {
  connector.actionHandler()
})

// write script check website is in another iframe
// viet them chuc nang cho nut edit, delete
// viet cai check khi nao template no nam trong cms
// tao library tren npm
// actionHandler => actionHandler co callback
// library export {NEWGEN_MESSAGE, actionHandler}
// export scss
</script>

<style lang="scss">
</style>
