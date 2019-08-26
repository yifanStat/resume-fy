<template>
  <v-container class="py-3">
    <!-- educations --> 
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
          Education
        </v-toolbar-title>
      </v-toolbar>
      <v-card v-for="(school, index) in content.education"
        :key="index"
        style="background-color: rgb(239, 239, 239);"
      >
        <v-card-title class="title" 
          style="padding: 0px 0px 0px 16px;"
        >
          <v-list-item>
            <v-list-item-avatar size="64" tile>
              <v-img :src="school.logo" style="border-radius:2%"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>
                <span style="text-align:left;">
                  {{ school.name }}
                  <span style="float:right;">
                    {{ school.span }}
                  </span>
                </span>
              </v-list-item-title>
              <v-list-item-title>
                {{ school.degree }}
              </v-list-item-title>
              <v-list-item-title v-if="school.advisor !== ''">
                Advisor: {{ school.advisor }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card-title>
        <v-card-text
          class="white text--primary py-3" 
          style="vertical-align: text-center;"
        >
          {{ school.info }}
        </v-card-text>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
  import content from './content'
  export default {
    name: 'apps-resume-education',
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