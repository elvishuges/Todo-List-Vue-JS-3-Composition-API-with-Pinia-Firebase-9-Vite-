<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <todo-item-form @submit="handleFormSubmit" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" class="drop-zone">
        <todo-item-list :items="todo" @onDropCardItem="onDropCardItemTodo" />
      </v-col>
      <v-col cols="4" class="drop-zone">
        <todo-item-list :items="doing" @onDropCardItem="onDropCardItemDoing" />
      </v-col>
      <v-col cols="4" class="drop-zone">
        <todo-item-list :items="done" @onDropCardItem="onDropCardItemDone" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

import TodoItemForm from '@/components/TodoItemForm.vue';
import TodoItemList from '@/components/TodoItemList.vue';

const todo = ref([]);
const doing = ref([]);
const done = ref([]);

function handleFormSubmit(payload) {
  console.log('handleFormSubmit', payload);
  addItemTodo(payload);
}

function addItemTodo(newTodo) {
  todo.value.push(newTodo);
}

function onDropCardItemTodo(payload) {
  console.log('111', payload);
}
function onDropCardItemDone(payload) {
  console.log('222', payload);
}
function onDropCardItemDoing(payload) {
  console.log('333', payload);
}
</script>

<style scoped></style>
