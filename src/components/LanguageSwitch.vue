<template>
  <q-select
    v-model="locale"
    :options="localeOptions"
    dense
    borderless
    emit-value
    map-options
    options-dense
  />
</template>

<script>
// import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { localeOptions } from 'src/config/options';
import { useQuasar } from 'quasar';
import { searchArrByKey } from 'src/helper';
import { DEFAULT_LANGUAGE, DEFAULT_LOCALE_SCOPE } from 'src/config/default';

export default {
  setup() {
    const { locale } = useI18n({ useScope: DEFAULT_LOCALE_SCOPE });
    const $q = useQuasar();
    locale.value =
      searchArrByKey(localeOptions, 'value', $q.lang.getLocale()) !== null
        ? $q.lang.getLocale()
        : DEFAULT_LANGUAGE;
    return {
      locale,
      localeOptions,
    };
  },
};
</script>