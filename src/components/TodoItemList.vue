<template>
  <div class="todo-item-list-content" @dragover.prevent="dragOver" @drop="drop">
    <v-card
      class="todo-item-list-card"
      :style="{ background: props.backgroundColor }"
    >
      <v-card-title class="text-center">{{ title }}</v-card-title>
      <v-card-text>
        <!-- Lista de tarefas em andamento -->
        <todo-item-card
          :columnIdentifier="columnIdentifier"
          v-for="(item, index) in props.items"
          :key="index"
          :title="item.title"
          :description="item.description"
          @remove="removeItemTodo(index)"
          :index="index"
        ></todo-item-card>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { defineEmits, computed } from 'vue';
import TodoItemCard from '@/components/TodoItemCard.vue';
const emits = defineEmits(['onDropCardItem']);

import { defineProps } from 'vue';

const props = defineProps({
  items: Array,
  title: String,
  backgroundColor: {
    type: String,
  },
  columnIdentifier: {
    type: String,
    required: true,
    default: '',
  },
});

function drop(event) {
  event.preventDefault();
  if (event.dataTransfer.getData('text/plain')) {
    const dropedCard = JSON.parse(event.dataTransfer.getData('text/plain'));
    emits('onDropCardItem', dropedCard);
  }
}
</script>

<style lang="scss" scoped>
.todo-item-list-card {
  min-height: 400px;
  color: rgb(57, 57, 58);
}
</style>
