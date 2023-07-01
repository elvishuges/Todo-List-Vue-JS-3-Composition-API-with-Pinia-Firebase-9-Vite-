<template>
  <v-form @submit.prevent="handleSubmit('toDo')">
    <v-text-field
      autofocus
      v-model="title"
      label="Título"
      variant="outlined"
    ></v-text-field>
    <v-text-field
      v-model="description"
      label="Descricao"
      variant="outlined"
    ></v-text-field>
    <v-btn type="submit">Adicionar</v-btn>
  </v-form>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emits = defineEmits(['submit']);

const title = ref('');
const description = ref('');

function handleSubmit() {
  const payload = {
    title: title.value,
    description: description.value,
  };
  emits('submit', payload);
}
</script>

<style></style>
