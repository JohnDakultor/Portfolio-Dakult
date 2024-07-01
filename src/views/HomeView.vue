<template>
  <div class="container">
    <div ref="nav" id="nav" class="section">
          <Nav />
    </div>
    <div ref="scene" id="scene" class="section">
      <Scene />
    </div>
    
    <div ref="project" id="project" class="section">
      <Project />
    </div>
    
    <div ref="about" id="about">
      <About />
    </div>

    <div ref="contact" id="contact">
      <Contact />
    </div>

    <div ref="footer" id="footer">
      <Footer />
    </div>
    
  </div>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import Nav from '../components/Navigation.vue';
import Scene from '../components/threeScene.vue';
import Project from '../components/Projects.vue';
import About from './AboutWriter.vue'
import Contact from './ContactView.vue'
import Footer from '../components/Footer.vue'


export default defineComponent({
  name: 'HomeView',

  components: {
    Nav,
    Scene,
    Project,
    About,
    Contact,
    Footer
  
    
  },
});
</script>



