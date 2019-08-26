<template>
  <v-container>
    <!-- profile -->
    <v-card class="text-center ml-3">
      <div align="center" justify="center" width=256 height=256>
        <!-- max-width="256" -->
        <v-img
          :src="content.profile" 
          contain
          style="border-radius:2%;"
        ></v-img>
      </div>
    </v-card>
    <br><v-divider></v-divider>
    <!-- contact -->
    <v-card class="ml-3 mt-3">
      <v-list color="rgb(223, 223, 223)">
        <v-list-item 
          v-for="contact in content.contact"
          :key="contact.name"
        >
          <v-list-item-icon v-if="contact.icon !== ''">
            <v-icon large>{{ contact.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-avatar v-if="contact.logo !== ''">
            <v-img :src="contact.logo" style="border-radius:2%"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              <template v-if="contact.href !== ''">
                 <a :href="contact.href" target="_blank">{{ contact.info }}</a>
              </template>
              <template v-else>
                 {{ contact.info }}
              </template>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
  import content from './content'
  export default {
    name: 'apps-resume-profiler',
    components: {
      
    },
    data: () => ({
      content: content
    }),
    computed: {
      
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

