<template>
  <div
    draggable="true"
    @dragstart="dragStart"
    @dragend="draggableEnd"
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
  columnIdentifier: String,
});

function handleRemove() {
  emits('remove', props.index);
}

function dragStart(event) {
  let obj = JSON.stringify({
    cardIndex: props.index,
    originColumnName: props.columnIdentifier,
  });

  event.dataTransfer.setData('text/plain', obj);
}

function draggableEnd(event) {
  event.dataTransfer?.clearData();
}
</script>

<style lang="css" scoped>
.todo-item-card-container {
  cursor: move;
}

.todo-item-card-container:hover {
  border-color: red;
}
</style>
