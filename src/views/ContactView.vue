<template>
  <v-app class="contact-container">
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card data-aos="zoom-in" class="pa-5 card">
            <v-card-title>
              <span class="headline">Contact Me</span>
            </v-card-title>
            <v-card-text>
              <form
                ref="form"
                action="https://formsubmit.co/germeljohnmarata@gmail.com"
                method="POST"
              >
                <v-text-field
                  v-model="name"
                  label="Name"
                  :rules="[v => !!v || 'Name is required']"
                  name="name"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  label="Email"
                  :rules="[
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                  ]"
                  name="email"
                  required
                ></v-text-field>
                <v-textarea
                  v-model="message"
                  label="Message"
                  :rules="[v => !!v || 'Message is required']"
                  name="message"
                  required
                ></v-textarea>
                <v-btn color="secondary" type="submit">Submit</v-btn>
              </form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
};
</script>

<style scoped>
.contact-container {
  background-color: #B3E2A7;
  padding-top: 50px;
  font-family: 'VT323', monospace;
}

.card {
  background-color: #F9F9E0;
}
</style>
