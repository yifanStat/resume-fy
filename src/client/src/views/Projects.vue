<template>
  <v-container>
    <div v-for="section in sections"
      :key="section.name"
    >
      <h2>{{ section.name }}</h2>
      <span style="font-size: 1.1rem;">
        {{ section.overview }}
      </span>
      <apps-project v-for="project in section.projects"
        :key="project.title"
        :title="project.title"
        :abstract="project.abstract"
        :poster="project.poster"
        :href="project.href"
      ></apps-project>
      <v-divider></v-divider><br><br>
    </div>
  </v-container>
</template>

<script>
import content from '@/components/Projects/content'
import Project from '@/components/Projects/Project'
export default {
  name: 'apps-projects',
  components: {
    appsProject: Project,
  },
  data: () => ({
    sections: content.sections
  }),
  computed: {

  },
  methods: {

  }
};
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>