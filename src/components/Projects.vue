<template>
  <v-main class="container">
    <v-container class="my-container">
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          class="card-col"
        >
          <v-card data-aos="zoom-in" class="my-card">
            <v-card-title>
              <span class="typewriter">{{ card.title }}</span>
            </v-card-title>
            <v-card-text>
              <p class="typewriter-text">{{ card.description }}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                :href="card.github"
                target="_blank"
                icon
                class="mr-2"
                @click="checkDemo(card)"
              >
                <v-icon>mdi-github</v-icon>
              </v-btn>
              <v-btn color="primary" @click="checkDemo(card)">
                Demo
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Coming Soon</v-card-title>
        <v-card-text>
          The demo for this project is coming soon. Stay tuned!
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-main>
</template>

<script>
import AOS from 'aos';

export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          title: 'ITS',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          github: 'https://github.com/user/project1',
          demo: 'https://user.github.io/project1',
        },
        {
          id: 2,
          title: 'PediGo',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          github: '',
          demo: '',
        },
        {
          id: 3,
          title: 'OmniVision',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          github: 'https://github.com/user/project3',
          demo: '', // This project is in progress
        },
        {
          id: 4,
          title: 'Keepr',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          github: 'https://github.com/user/project3',
          demo: '', // This project is in progress
        },
        {
          id: 5,
          title: 'ARDragon',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          github: 'https://github.com/user/project3',
          demo: '', // This project is in progress
        },
        {
          id: 6,
          title: 'PlusTire',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          github: 'https://github.com/user/project3',
          demo: '', // This project is in progress
        },
        {
          id: 7,
          title: 'Theia',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          github: 'https://github.com/user/project3',
          demo: '', // This project is in progress
        },
      ],
      dialog: false, // Control the dialog
    };
  },

  mounted() {
    this.initializeAOS();
  },
  updated() {
    this.initializeAOS();
  },
  methods: {
    initializeAOS() {
      AOS.init({
        duration: 1200,
      });
    },
    checkDemo(card) {
      if (card.demo) {
        window.open(card.demo, '_blank');
      } else {
        this.dialog = true;
      }
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #B3E2A7;
  height: 80vh;
}

.my-container {
  padding: 20px;
}

.card-col {
  padding: 10px;
}

.my-card {
  background-color: #F9F9E0;
}

.typewriter {
  font-family: 'VT323', monospace;
  font-size: 24px;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
}

.typewriter-text {
  font-family: 'VT323', monospace;
  white-space: pre-wrap;
  overflow: hidden;
  display: inline-block;
}

@media (max-width: 768px) {
  .typewriter {
    font-size: 18px;
  }
  .typewriter-text {
    font-size: 14px;
  }
  .card-col {
    padding: 5px;
  }
  .my-card {
    padding: 10px;
    top: 5%;
    height: 155px;
  }
}
</style>
