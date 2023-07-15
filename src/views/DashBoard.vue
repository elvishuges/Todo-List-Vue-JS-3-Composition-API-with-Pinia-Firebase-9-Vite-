<template>
  <v-container>
    <v-row dense>
      <v-col cols="4">
        <v-card @click="goToKaban" color="#385F73" theme="dark">
          <v-card-title class="text-h5">{{ todoState.title }} </v-card-title>
          <v-card-subtitle>Acompanhando Suas Tarefas</v-card-subtitle>

          <v-card-text>
            Tarefas Pendentes:{{ todoState.todoNumber }}<br />
            Tarefas Pendentes:{{ todoState.doingNumber }}<br />
            Tarefas Pendentes:{{ todoState.doneNumber }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card @click="goToMyNotes" color="#385F73" theme="dark">
          <v-card-title class="text-h5">{{ todoState.title }} </v-card-title>
          <v-card-subtitle>Acompanhando Suas Notas</v-card-subtitle>
          <v-card-text> </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useTodo } from '@/store/todo';
import { useRouter } from 'vue-router';

const todoState = useTodo();
const router = useRouter();

function goToKaban() {
  router.push('/kaban');
}
function goToMyNotes() {
  router.push('/notes');
}
</script>

<style lang="scss" scoped></style>

<style></style>
