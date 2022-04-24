<template>
  <q-layout view="lHr lpR lfr">
    <q-page-container>
      <div class="full-height">
        <div class="flex justify-end">
          <LanguageSwitch />
          <DarkModeSwitch />
        </div>
        <div class="flex justify-evenly">
          <router-view />
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import DarkModeSwitch from 'components/DarkModeSwitch.vue';
import LanguageSwitch from 'components/LanguageSwitch.vue';
export default defineComponent({
  name: 'AuthLayout',
  components: {
    DarkModeSwitch,
    LanguageSwitch,
  },
});
</script>
