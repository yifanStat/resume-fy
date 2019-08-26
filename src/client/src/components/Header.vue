<template>
  <v-app-bar :flat="routeHome" color="transparent" max-height="64px">
    <v-avatar :size="48"> 
      <img :src="user.profile" :style="styleHome">
    </v-avatar>&nbsp;&nbsp;
    <span class="black--text" style="font-family: Vampiro One; font-size: 1.414rem;" v-text="user.name"></span>
    <!-- v-text="title" -->
    <v-spacer></v-spacer>
    <v-flex xs1>
      <router-link to="/">
        <v-icon class="grey--text">mdi-chevron-right</v-icon>
        <strong class="black--text">&nbsp;Home</strong>
      </router-link>
    </v-flex>
    <v-flex xs1>
      <router-link to="/resume">
        <v-icon class="grey--text">mdi-school</v-icon>
        <strong class="black--text">&nbsp;Resume</strong>
      </router-link>
    </v-flex>
    <v-flex xs1>
      <router-link to="/projects">
        <v-icon class="grey--text">mdi-fire</v-icon>
        <strong class="black--text">&nbsp;Projects</strong>
      </router-link>
    </v-flex>
    <v-flex xs1>
      <router-link to="/readme">
        <v-icon class="grey--text">mdi-fingerprint</v-icon>
        <strong class="black--text">&nbsp;About Me</strong>
      </router-link>
    </v-flex>
  </v-app-bar>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'apps-header',
    props: {
      routeHome: {
        type: Boolean,
        default: true,
      }
    },
    data: () => ({
      // header
      title: "",
    }),
    computed: {
      ...mapGetters({
        user: 'user',
      }),
      styleHome () {
        // return 'border-radius:12%;' + (this.routeHome ? 'filter: invert(100%); -webkit-filter: invert(100%)' : '')
        return 'border-radius:12%;'
      }
    },
    methods: {
      ...mapActions({
        
      }),      
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>
