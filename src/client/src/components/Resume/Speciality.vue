<template>
  <v-container class="py-3">
    <!-- specialities --> 
    <v-card dark 
      class="ml-3" color="primary"
    >
      <br>
      <v-card dark flat color="primary"
        v-for="section in content.specialities"
        :key="section.name"
      >
        <v-toolbar dense
          class="mx-4" 
          color="rgb(128,128,128)"
          style="font-family: 'Vampiro One'"
        >
          <v-toolbar-title>
            {{section.name}}
          </v-toolbar-title>
        </v-toolbar>
        <v-list dark 
          class="mx-4" color="primary"
        >
          <v-list-item
             v-for="(skill, index) in section.skills"
            :key="index"
          >
            <v-list-item-icon v-if="skill.icon !== ''">
              <v-icon dark large>{{ skill.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-avatar v-if="skill.logo !== ''">
              <v-img :src="skill.logo" style="border-radius:2%"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title >
                <v-layout align-center>
                  <v-flex xs3 align="center" class="text-no-wrap">
                    <template v-if="skill.href !== ''">
                      <a :href="skill.href">{{ skill.info }}</a>
                    </template>
                    <template v-else>
                      {{ skill.info }}
                    </template>
                  </v-flex>
                  <v-flex xs9>
                    <v-rating v-if="skill.rate" 
                      color="white"
                      background-color="grey"
                      :value="skill.rate"
                    >
                    </v-rating>
                  </v-flex>
                </v-layout>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
  import content from './content'
  export default {
    name: 'apps-resume-speciality',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

