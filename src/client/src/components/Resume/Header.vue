<template>
  <v-container style="padding: 0px;">
    <v-flex xs12 style="background-color: rgb(128, 128, 128);">
      <v-layout row wrap>
        <v-flex xs4></v-flex>
        <v-flex xs8>
          <div
            flat
            class="text-center white--text mt-4"
            style="
              font-family: Vampiro One;
              font-size: 1.414rem;
            "
          >
            {{ content.name }}
          </div>
          <div
            flat
            class="text-center white--text my-2"
            style="
              font-family: Vampiro One;
              font-size: 1rem;
            "
          >
            {{ content.profession }}
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-container>
</template>

<script>
  import content from './content'
  export default {
    name: 'apps-resume-header',
    components: {
      
    },
    data: () => ({
      content: content
    }),
    computed: {
      
    },
    methods: {

    },  
  }
</script>
