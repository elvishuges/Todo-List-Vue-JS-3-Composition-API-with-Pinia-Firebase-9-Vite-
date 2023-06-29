<template>
  <div>
    <v-card class="ma-2">
      <v-toolbar color="rgba(0, 0, 0, 0)">
        <v-toolbar-title class="text-h6"> {{ title }} </v-toolbar-title>

        <template v-slot:append>
          <v-btn @click="handleRemove" icon="mdi-delete"></v-btn>
        </template>
      </v-toolbar>
      <v-card-item>
        <v-card-subtitle>{{ description }}</v-card-subtitle>
      </v-card-item>
    </v-card>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
const emits = defineEmits(['remove']);

const props = defineProps({
  title: String,
  description: String,
  index: Number,
});

function handleRemove() {
  emits('remove', props.index);
}
</script>

<style lang="scss" scoped></style>
