<template>
  <v-container fill-height>
    <v-row
      align="center"
      justify="center" 
    >
      <h1 class="mb-4">About Me</h1>
      <h4 class="subheading"></h4>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => ({
 
  }),
  computed: {
    ...mapGetters({
      user: 'user',
    }),
  },
  methods: {
    ...mapActions({
      
    }),    
  }
};
</script>
