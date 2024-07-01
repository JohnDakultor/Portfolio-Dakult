<template>
  <nav style="height: 0">
    <v-navigation-drawer
      app
      v-model="drawer"
      color="#B3E2A7"
      class="custom-drawer"
      :style="{ fontFamily: drawerFont }"
    >
      <v-list>
        <v-list-item link @click="scrollToSection('home')">
          <v-list-item-title class="text-list">Home</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="scrollToSection('about')">
          <v-list-item-title class="text-list">About</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="scrollToSection('contact')">
          <v-list-item-title class="text-list">Contact</v-list-item-title>
        </v-list-item>
        <!-- New item for Download CV -->
        <v-list-item @click="downloadCV">
          <v-list-item-title class="text-list">Download CV</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-btn color="#B3E2A7" class="burger-icon" @click.stop="drawer = !drawer">
      <v-icon>{{ drawer ? 'mdi-close' : 'mdi-menu' }}</v-icon>
    </v-btn>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      drawerFont: "VT323, monospace", // Custom font for drawer
    };
  },
  methods: {
    scrollToSection(sectionId) {
      // Close the drawer
      this.drawer = false;

      // Scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    downloadCV() {
      // Replace with your CV PDF file URL
      const cvUrl = '/Resume (1).pdf';

      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = cvUrl;
      link.setAttribute('download', 'Resume.pdf'); // Set the filename for download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
};
</script>

<style scoped>
.custom-drawer {
  /*border-bottom: 2px solid black;  Underline effect */
  overflow-y: auto; /* Enable scrolling */
}

.burger-icon {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 999; /* Ensure the icon is above other content */
  color: #00ff00;
  height: 50px;
  background-color: #B3E2A7;
}

.text-list {
  font-family: "VT323", monospace;
  /* text-shadow: 1px 1px 1px black; */
  letter-spacing: 1px;
  line-height: 1.5;
  font-size: 2.5rem;
}
</style>
