<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <todo-item-form @submit="handleFormSubmit" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" class="drop-zone">
        <todo-item-list
          :items="todo"
          title="Fazer"
          columnIdentifier="todo"
          @onDropCardItem="onDropCardItemTodo"
          backgroundColor="#E2D6D8"
        />
      </v-col>
      <v-col cols="4" class="drop-zone">
        <todo-item-list
          :items="doing"
          title="Fazendo"
          columnIdentifier="doing"
          @onDropCardItem="onDropCardItemDoing"
          backgroundColor="#D6E2E8"
        />
      </v-col>
      <v-col cols="4" class="drop-zone">
        <todo-item-list
          :items="done"
          title="Feito"
          columnIdentifier="done"
          @onDropCardItem="onDropCardItemDone"
          backgroundColor="#7DA3D9"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';

import TodoItemForm from '@/components/TodoItemForm.vue';
import TodoItemList from '@/components/TodoItemList.vue';

const todo = ref([]);
const doing = ref([]);
const done = ref([]);

function handleFormSubmit(payload) {
  addItemTodo(payload);
}

function addItemTodo(newTodo) {
  todo.value.push(newTodo);
}

function onDropCardItemTodo(payload) {
  if (payload.originColumnName != 'todo') {
    let removed = removeAndGetItemFromArray(
      payload.cardIndex,
      payload.originColumnName
    );

    todo.value.push(removed);
  }
}
function onDropCardItemDone(payload) {
  if (payload.originColumnName != 'done') {
    let removed = removeAndGetItemFromArray(
      payload.cardIndex,
      payload.originColumnName
    );

    done.value.push(removed);
  }
}

function onDropCardItemDoing(payload) {
  if (payload.originColumnName != 'doing') {
    let removed = removeAndGetItemFromArray(
      payload.cardIndex,
      payload.originColumnName
    );

    doing.value.push(removed);
  }
}

function removeAndGetItemFromArray(index, from) {
  let item = null;
  if (from === 'todo') {
    item = todo.value.splice(index, 1)[0];
  }
  if (from === 'doing') {
    item = doing.value.splice(index, 1)[0];
  }
  if (from === 'done') {
    item = done.value.splice(index, 1)[0];
  }
  return item;
}
</script>

<style scoped></style>
