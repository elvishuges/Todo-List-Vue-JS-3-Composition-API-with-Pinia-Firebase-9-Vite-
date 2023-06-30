<template>
  <div
    draggable="true"
    @dragstart="dragStart"
    class="todo-item-card-container"
    :id="`todo-item-card${props.index}`"
  >
    <v-card draggable class="ma-2">
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
  columnName: String,
});

function handleRemove() {
  emits('remove', props.index);
}

function dragStart(event) {
  let obj = JSON.stringify({
    cardIndex: props.index,
    cardColumnName: props.columnName,
  });

  event.dataTransfer.setData('text/plain', obj);
}
</script>

<style lang="css" scoped>
.todo-item-card-container {
  cursor: move;
  transition: 100ms;
}

.todo-item-card-container:hover {
  transform: scale(1.02);
  border-color: red;
}
</style>
