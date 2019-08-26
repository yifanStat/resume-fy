<template>
  <v-content>
    <apps-profiler />
  </v-content>
</template>

<script>
import Profiler from '../components/Profiler'

export default {
  name: 'apps-home',
  components: {
    appsProfiler: Profiler,
  },
};
</script>
