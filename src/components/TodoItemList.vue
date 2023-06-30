<template>
  <div
    class="todo-item-list-content"
    draggable="true"
    @dragstart="dragStart"
    @dragover.prevent="dragOver"
    @drop="drop"
  >
    <v-card class="todo-item-list-card">
      <v-card-title class="text-center">{{ listTitle }}</v-card-title>
      <v-card-text>
        <!-- Lista de tarefas em andamento -->
        <todo-item-card
          columnName="todo"
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
import { defineEmits } from 'vue';
import TodoItemCard from '@/components/TodoItemCard.vue';
const emits = defineEmits(['onDropCardItem']);

import { defineProps } from 'vue';

const props = defineProps({
  items: Array,
  listTitle: String,
});

function removeItemTodo(index) {
  console.log(index);
}
function parentCall(index) {
  console.log(index);
}

function drop(event) {
  console.log('ev', event.dataTransfer.getData('text/plain'));
  event.preventDefault();
  if (event.dataTransfer.getData('text/plain')) {
    const dragadObj = JSON.parse(event.dataTransfer.getData('text/plain'));
    emits('onDropCardItem', dragadObj);
  }
}

function dragStart(event) {
  console.log('111');
  let obj = JSON.stringify({
    cardIndex: props.index,
    cardColumnName: props.columnName,
  });
  console.log('obj', obj);

  event.dataTransfer.setData('text/plain', obj);
}
</script>

<style lang="scss" scoped>
.todo-item-list-card {
  min-height: 400px;
  background: rgb(218, 147, 147);
  color: aliceblue;
}
</style>
