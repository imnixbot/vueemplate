<template>
  <q-toggle
    @update:model-value="toggleDarkMode"
    v-model="isDarkMode"
    :label="$t('failed')"
    :checked-icon="authIcons.I_DARK_SWITCH_ON"
    :unchecked-icon="authIcons.I_DARK_SWITCH_OFF"
    :color="!isDarkMode ? '' : 'blue'"
    keep-color
    left-label
  />
</template>
<script lang="ts">
import { useQuasar } from 'quasar';
import { ref, defineComponent } from 'vue';
import { authIcons } from 'src/config/icons';
export default defineComponent({
  name: 'DarkModeSwitch',
  setup() {
    const $q = useQuasar();
    const isDarkMode = ref(false);
    isDarkMode.value = $q.dark.isActive;
    const toggleDarkMode = (e: boolean) => $q.dark.set(e);
    return {
      label: 'Dark Mode',
      authIcons,
      isDarkMode,
      toggleDarkMode,
    };
  },
});
</script>