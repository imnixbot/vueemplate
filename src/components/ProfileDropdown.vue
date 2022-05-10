<template>
  <q-btn-dropdown stretch flat>
    <q-list>
      <q-item tabindex="0">
        <q-item-section avatar>
          <q-avatar icon="assignment" color="primary" text-color="white" />
        </q-item-section>
        <q-item-section>
          <q-item-label><DarkModeSwitch /></q-item-label>
        </q-item-section>
        <q-item-section side> </q-item-section>
      </q-item>
      <q-item tabindex="0">
        <q-item-section avatar>
          <q-avatar icon="assignment" color="primary" text-color="white" />
        </q-item-section>
        <q-item-section>
          <q-item-label><LogoutButton /></q-item-label>
        </q-item-section>
        <q-item-section side> </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import DarkModeSwitch from 'components/DarkModeSwitch.vue';
import LogoutButton from 'components/LogoutButton.vue';

export default defineComponent({
  name: 'ProfileDropdown',
  components: { DarkModeSwitch, LogoutButton },
});
</script>