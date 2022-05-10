<template>
  <q-btn
    :ripple="{ center: true }"
    color="secondary"
    label="logout"
    no-caps
    @click="logout"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'src/store';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'LogoutButton',
  setup() {
    const router = useRouter();
    const $store = useStore();
    const logout = () => {
      $store.commit('auth/setIsAuthenticated', false);
      router.push({ name: 'auth.login' });
    };
    return {
      logout,
    };
  },
});
</script>