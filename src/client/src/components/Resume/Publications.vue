<template>
  <v-container class="py-3">
    <!-- publications --> 
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
          Publications
        </v-toolbar-title>
      </v-toolbar>
      <v-timeline dense>
        <v-timeline-item
          v-for="(pub, index) in content.publications"
          :key="index"
          :icon="pub.icon"
          :color="pub.color"
          small
          fill-dot
        >
          <span slot="opposite">{{ pub.span }}</span>
          <v-sheet class="elevation-2">
                  <v-card-title class="title" 
          style="padding: 0px 0px 0px 16px;"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle>
                {{ pub.title }} 
              </v-list-item-subtitle>
              <v-list-item-subtitle
                v-html="pub.author + ' (' + pub.year + ')'"
              >
              </v-list-item-subtitle>
              <v-list-item-subtitle
                v-html="
                  '<i>' + pub.journal + '</i>' + ', ' + '<b>' + pub.volume + '</b>' + ', ' + pub.pages + '.'
                "
              >
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card-title>
        </v-sheet>
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