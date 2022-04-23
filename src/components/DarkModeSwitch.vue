<template>
  <div class="flex justify-end">
    <q-toggle
      @update:model-value="toggleDarkMode"
      v-model="isDarkMode"
      checked-icon="dark_mode"
      unchecked-icon="wb_sunny"
      :color="!isDarkMode ? '' : 'blue'"
      keep-color
      left-label
    />
  </div>
</template>
<script lang="ts">
import { useQuasar } from 'quasar';
import { ref, defineComponent } from 'vue';
const isDarkMode = ref(false);
export default defineComponent({
  name: 'DarkModeSwitch',
  setup() {
    const $q = useQuasar();
    isDarkMode.value = $q.dark.isActive;
    const toggleDarkMode = (e: boolean) => $q.dark.set(e);
    return {
      isDarkMode,
      toggleDarkMode,
    };
  },
});
</script>