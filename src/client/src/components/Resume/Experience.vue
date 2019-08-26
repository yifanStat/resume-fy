<template>
  <v-container class="py-3">
    <!-- experiences --> 
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
          Experience
        </v-toolbar-title>
      </v-toolbar>
      <v-expansion-panels
        multiple
        focusable
        :value="expands"
      >
        <v-expansion-panel
          v-for="(expr, index) in content.experience"
          :key="index"
        >
          <v-expansion-panel-header>  
            <v-card-title style="padding: 0px 0px;">
              <v-icon large>
                {{ expr.icon }}
              </v-icon>
              &nbsp;&nbsp;
                {{ expr.name }}
              <v-spacer></v-spacer>
                {{ expr.span }}
            </v-card-title>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-timeline dense>
              <v-timeline-item v-for="(work, index) in expr.work"
                :key="index"
                fill-dot
                small
              >
                <v-card 
                  style="background-color: rgb(239, 239, 239);"
                >
                  <v-card-title class="title">
                    {{ work.title }},&nbsp;&nbsp;{{ work.area }}<v-spacer></v-spacer>{{ work.span }}
                  </v-card-title>
                  <v-card-text
                    class="white text--primary py-3" 
                    style="vertical-align: text-center;"
                    v-html="work.info"
                  >
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </v-container>
</template>

<script>
  import content from './content'
  export default {
    name: 'apps-resume-experience',
    components: {
      
    },
    data: () => ({
      content: content
    }),
    computed: {
      expands () {
        return [...Array(content.experience.length).keys()]
      }
    },
    methods: {

    },  
  }
</script>
