<template>
  <q-layout view="lHr lpR lfr">
    <q-page-container>
      <div class="full-height">
        <DarkModeSwitch />
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
export default defineComponent({
  name: 'AuthLayout',
  components: {
    DarkModeSwitch,
  },
});
</script>
