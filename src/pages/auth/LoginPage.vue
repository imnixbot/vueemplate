<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="name"
        :label="loginErrors.userName.label"
        :hint="loginErrors.userName.hint"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || errorRequired]"
      />

      <q-input
        filled
        type="number"
        v-model="age"
        :label="loginErrors.password.label"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Please type your age',
          (val) => (val > 0 && val < 100) || 'Please type a real age',
        ]"
      />

      <q-toggle v-model="accept" :label="loginErrors.terms.label" />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import { errorRequired, loginErrors } from '../../validations';
import { useStore } from 'src/store';
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'LoginPage',
  setup() {
    const $q = useQuasar();
    const router = useRouter()
const $store = useStore()
    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);

    return {
      name,
      age,
      accept,
      errorRequired,
      loginErrors,
      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first',
          });
        } else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted',
          });
        }
      },

      onReset() {
        $store.commit('auth/setIsAuthenticated', true)
        router.push({ name: 'app.home' })
        name.value = null;
        age.value = null;
        accept.value = false;
      },
    };
  },
});
</script>
