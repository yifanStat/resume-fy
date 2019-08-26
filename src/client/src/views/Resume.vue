<template>
  <v-container fuild>
    <v-card outlined width="100%">
      <v-card-text>
        <v-layout row wrap>
          <apps-resume-header></apps-resume-header>
          <!-- left pannel -->
          <v-flex xs4 style="margin-top: -80px">
            <apps-resume-profiler></apps-resume-profiler>
            <v-divider></v-divider>
            <apps-resume-speciality></apps-resume-speciality>
          </v-flex>
          <!-- <v-divider vertical class="ml-4 mr-6"></v-divider> -->
          <!-- right pannel -->
          <v-flex xs8>
            <v-card tile>
              <apps-resume-headline></apps-resume-headline>
              <v-divider></v-divider>
              <apps-resume-experience></apps-resume-experience>
              <v-divider></v-divider>
              <apps-resume-education></apps-resume-education>
              <v-divider></v-divider>
              <!-- <apps-resume-certificates></apps-resume-certificates> -->
              <!-- <v-divider></v-divider> -->
              <apps-resume-awards></apps-resume-awards>
              <v-divider></v-divider>
              <apps-resume-publications></apps-resume-publications>
            </v-card> 
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import ResumeAwards from '@/components/Resume/Awards'
// import ResumeCertificates from '@/components/Resume/Certificates'
import ResumeEducation from '@/components/Resume/Education'
import ResumeExperience from '@/components/Resume/Experience'
import ResumeHeader from '@/components/Resume/Header'
import ResumeHeadline from '@/components/Resume/Headline'
import ResumeProfiler from '@/components/Resume/Profiler'
import ResumePublications from '@/components/Resume/Publications'
import ResumeSpeciality from '@/components/Resume/Speciality'

export default {
  name: 'apps-resume',
  components: {
    appsResumeAwards: ResumeAwards,
    // appsResumeCertificates: ResumeCertificates,
    appsResumeEducation: ResumeEducation,
    appsResumeExperience: ResumeExperience,
    appsResumeHeader: ResumeHeader,
    appsResumeHeadline: ResumeHeadline,
    appsResumeProfiler: ResumeProfiler,
    appsResumePublications: ResumePublications, 
    appsResumeSpeciality: ResumeSpeciality,
  },
  data: () => ({

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