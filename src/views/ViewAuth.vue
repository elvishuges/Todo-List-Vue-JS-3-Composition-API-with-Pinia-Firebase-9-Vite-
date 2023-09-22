<template>
  <v-container>
    <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
      <v-tab :value="'login'">Login</v-tab>
      <v-tab :value="'register'">Register</v-tab>
    </v-tabs>
    <v-window>
      <v-window-item class="window-item" value="login">
        <v-card
          class="mx-auto pl-10 pr-10 pb-10 pt-5"
          variant="outlined"
          max-width="600"
          :title="formTitle"
        >
          <v-form @submit.prevent="onsubmit">
            <v-text-field
              v-model="creadentials.email"
              label="Email"
            ></v-text-field>
            <v-text-field
              v-model="creadentials.password"
              label="Senha"
              type="password"
            ></v-text-field>
            <v-btn
              block
              class="text-none mb-4"
              color="indigo-darken-3"
              size="x-large"
              variant="flat"
              type="submit"
            >
              {{ formTitle }}
            </v-btn>
          </v-form>
        </v-card>
      </v-window-item>
    </v-window>
  </v-container>
</template>

<script setup>
import { ref, computed, reactive } from 'vue';
import { useStoreAuth } from './../store/auth';
const tab = ref('');

const storeAuth = useStoreAuth();

const formTitle = computed(() => (tab.value == 'login' ? 'Login' : 'Cadastro'));
const onsubmit = () => {
  if (!creadentials.email || !creadentials.password) {
    alert('Adicione email e senha');
  } else {
    if (tab.value == 'register') {
      storeAuth.registerUser(creadentials);
    } else {
      storeAuth.loginUser(creadentials);
    }
  }
};

const creadentials = reactive({
  email: '',
  password: '',
});
</script>

<style lang="scss" scoped>
.window-item {
  margin-top: 15px;
  min-height: 60vh;
}
.container-auth {
  background-color: aliceblue;
}
</style>
