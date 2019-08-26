<template>
  <v-container>
    <v-card outlined transition="scroll-y-transition">
      <v-toolbar color="grey lighten-2" dense>
        <v-toolbar-title class="font-italic">{{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon 
          @click.native="showContent = !showContent"
        >
          <v-icon>{{ showContent ? 'mdi-minus' : 'mdi-plus' }}</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text v-show="showContent">
        <v-list-item two-line>
          <v-list-item-avatar size="256" tile>
            <v-img :src="poster" style="border-radius:4%" @click.native="showPosterOverlay = true"></v-img>
          </v-list-item-avatar>
          <v-overlay :value="showPosterOverlay">
            <v-row align="center" justify="center">
              <v-img :src="poster" contain max-width=1024 max-height=768 style="border-radius:2%"></v-img>
            </v-row>
            <v-row align="center" justify="center">
              <v-btn
                icon
                @click.native="showPosterOverlay = false"
              >
                <v-icon large>mdi-close</v-icon>
              </v-btn>
            </v-row>
          </v-overlay>
          <v-divider
            class="mx-4"
            vertical
          ></v-divider>
          <v-list-item-content>
            <!-- <v-list-item-title>{{ title }}</v-list-item-title> -->
            <!-- <v-list-item-subtitle>{{ abstract }}</v-list-item-subtitle> -->
            <a :href="href" target="_blank">
              <span class="black--text" style="line-height: 1.414;">
                {{ abstract }}
              </span>
            </a>
          </v-list-item-content>
        </v-list-item>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'apps-project',
  props: {
    title: {
      type: String,
      default: '[Title] Lorem Ipsum Dolor Sit Amet'
    },
    abstract: {
      type: String,
      default: `[Abstract] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus in. Viverra nam libero justo laoreet sit 
        amet cursus sit. Dignissim enim sit amet venenatis. Rhoncus dolor purus non enim. Quam viverra orci sagittis eu 
        volutpat. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Massa ultricies mi 
        quis hendrerit dolor magna eget est lorem. Elementum integer enim neque volutpat. Sed sed risus pretium quam 
        vulputate dignissim suspendisse in. In vitae turpis massa sed. Neque volutpat ac tincidunt vitae semper quis. 
        Diam vulputate ut pharetra sit amet aliquam id. Etiam dignissim diam quis enim.`
    },
    poster: {
      type: String,
      default: require('@/assets/profile.jpg')
    },
    href: {
      type: String,
      default: 'https://github.com/gyang274',
    },
    showContent: {
      type: Boolean,
      default: true,
    },
    showPosterOverlay: {
      type: Boolean,
      default: false,
    },
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