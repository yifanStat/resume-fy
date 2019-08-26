<template>
  <v-container class="py-3">
    <!-- certficates --> 
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
          Certficates
        </v-toolbar-title>
      </v-toolbar>
      <v-card v-for="(certificate, index) in content.certificates"
        :key="index"
        style="background-color: rgb(239, 239, 239);"
      >
        <v-card-title class="title" 
          style="padding: 0px 0px 0px 16px;"
        >
          <v-list-item>
            <v-list-item-avatar size="64" tile>
              <v-img :src="certificate.logo" style="border-radius:2%"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-if="certificate.href !== ''">
                <a :href="certificate.href" target="_blank" class="black--text">
                  {{ certificate.name }}
                </a>
              </v-list-item-title>
              <v-list-item-title v-else>
                {{ certificate.name }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ certificate.institute }}
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                {{ certificate.span }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card-title>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
  import content from './content'
  export default {
    name: 'apps-resume-certificates',
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