<template>
  <v-app class="container">
    <div ref="aboutSection" class="about">
      <h1>About Me</h1>
      <p class="aboutWriter">{{ displayedText }}</p>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      fullText: `I am a proud graduate of Cor Jesu College with a degree in Computer Science.
My passion for technology has always driven me to explore the vast possibilities within the field.
Throughout my academic journey, I have developed a solid foundation in various programming languages,
software development methodologies, and technological frameworks.
My coursework and projects have fueled my interest in artificial intelligence, machine learning, and data science,
while internships and hackathons have allowed me to apply my knowledge in practical settings.

I am deeply committed to creating innovative ideas that push the boundaries of what's possible.
My vision is to develop technology that seamlessly integrates into our daily lives, making processes more efficient and
communication more accessible. With a strong ambition to become a software engineer, I am dedicated to designing and implementing
software solutions that enhance efficiency, connectivity, and user experiences. I am excited about leveraging my skills and knowledge
to contribute to the ever-evolving tech landscape and make a meaningful impact on the world.
`,
      displayedText: '',
      currentIndex: 0,
      observer: null,
    };
  },
  mounted() {
    this.createObserver();
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    createObserver() {
      const options = {
        root: null,
        threshold: 0.1
      };

      this.observer = new IntersectionObserver(this.handleIntersect, options);
      if (this.$refs.aboutSection) {
        this.observer.observe(this.$refs.aboutSection);
      }
    },
    handleIntersect(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.typeWrite();
          if (this.observer) {
            this.observer.unobserve(this.$refs.aboutSection);
          }
        }
      });
    },
    typeWrite() {
      if (this.currentIndex < this.fullText.length) {
        this.displayedText += this.fullText[this.currentIndex];
        this.currentIndex++;
        setTimeout(this.typeWrite, 50);
      }
    }
  }
};
</script>

<style scoped>
.container {
  background-color: #B3E2A7;
  height: 100vh; /* Use full viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
}

.about {
  font-family: 'VT323', monospace;
  width: 80%;
  max-width: 800px; /* Limit width on larger screens */
  margin: 0 auto;
  text-align: left; /* Ensure left alignment */
}

.about h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.aboutWriter {
  font-size: 1.25rem; /* Adjust font size for readability */
  white-space: pre-wrap; /* Allow text to wrap */
  overflow: hidden; /* Ensures the text does not wrap */
}

@media screen and (max-width: 768px) {
  .about {
    width: 90%; /* Adjust width for smaller screens */
  }

  .about h1 {
    font-size: 2rem; /* Adjust heading font size */
  }

  .aboutWriter {
    font-size: 1rem; /* Further reduce font size for smaller screens */
  }
}
</style>
