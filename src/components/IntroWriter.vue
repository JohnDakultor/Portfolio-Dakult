<template>
  <div class="typewriter">
    <p class="typewriter-text">{{ displayedText }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullText: `<Hello World/> My name is Germel John Marata. 
      I graduated with a Bachelor of Science in Computer Science from Cor Jesu College.
       I've developed skills in software development, web design, and problem-solving. 
       Explore my portfolio to see my projects and achievements.`,
      displayedText: '',
      currentIndex: 0,
    };
  },
  mounted() {
    this.typewrite();
  },
  methods: {
    typewrite() {
      if (this.currentIndex < this.fullText.length) {
        this.displayedText += this.fullText[this.currentIndex];
        this.currentIndex++;
        setTimeout(this.typewrite, 50); // Adjust the speed here (milliseconds)
      }
    },
  },
};
</script>

<style scoped>


.typewriter {
  font-family: 'VT323', monospace;
  white-space: pre;
  overflow: hidden; /* Ensures the text does not wrap */
  position: absolute;
  top: 10%;
  left: 20%;
  transform: translateY(-50%); /* Center vertically */
}

.typewriter-text {
  font-size: 1.25rem; /* Default font size */
  /*border-right: 2px solid black;  Cursor effect */
  /* animation: blink-cursor 0.75s; */
}

/* @keyframes blink-cursor {
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: black;
  }
} */

@media screen and (max-width: 768px) {
  .typewriter {
    top: 10%; /* Adjust positioning on smaller screens */
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .typewriter-text {
    font-size: 10px; /* Adjust font size for smaller screens */
  }
}
</style>
