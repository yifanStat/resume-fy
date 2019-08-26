<template>
  <v-container class="py-3">
    <!-- headline --> 
    <v-card
      class="ml-0" flat outlined
    >
      <v-toolbar dense
        color="rgb(128,128,128)"
        style="font-family: 'Vampiro One'"
      >
        <v-toolbar-title
          class="text-uppercase white--text"
        >
          Summary
        </v-toolbar-title>
      </v-toolbar>
      <v-card v-for="(hdln, index) in content.headline"
        :key="index"
        style="background-color: rgb(239, 239, 239);"
      >
        <v-card-title class="title" 
          style="padding: 0px 0px 0px 16px;"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                {{ hdln.name }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card-title>
        <v-card-text class="white text--primary py-3 pl-12" 
          style="vertical-align: text-center;"
        >
          {{ hdln.info }}
        </v-card-text>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
  import content from './content'
  export default {
    name: 'apps-resume-highlight',
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
