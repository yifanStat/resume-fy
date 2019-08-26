<template>
  <v-container class="py-3">
    <!-- awards --> 
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
          Awards
        </v-toolbar-title>
      </v-toolbar>
      <v-timeline>
        <v-timeline-item
          v-for="(award, index) in content.awards"
          :key="index"
          :icon="award.icon"
          :color="award.color"
          fill-dot
        >
          <span slot="opposite">{{ award.span }}</span>
          <v-card class="elevation-2">
            <v-card-title class="title" 
              style="padding: 0px 0px 0px 16px;"
            >
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title 
                    v-html="award.name"
                  >
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ award.srcs }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card-title>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-card>
  </v-container>
</template>

<script>
  import content from './content'
  export default {
    name: 'apps-resume-awards',
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

<style scoped>
  a {
    text-decoration: none;
  }
</style>