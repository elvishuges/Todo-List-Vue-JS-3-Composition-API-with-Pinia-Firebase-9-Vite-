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
          @onDropCardItem="onDropCardItemTodo"
          @onRemoveItem="onRemoveItemTodo"
          columnIdentifier="todo"
          backgroundColor="#E2D6D8"
        />
      </v-col>
      <v-col cols="4" class="drop-zone">
        <todo-item-list
          :items="doing"
          title="Fazendo"
          columnIdentifier="doing"
          @onDropCardItem="onDropCardItemDoing"
          @onRemoveItem="onRemoveItemDoing"
          backgroundColor="#D6E2E8"
        />
      </v-col>
      <v-col cols="4" class="drop-zone">
        <todo-item-list
          :items="done"
          title="Feito"
          columnIdentifier="done"
          @onRemoveItem="onRemoveItemDone"
          @onDropCardItem="onDropCardItemDone"
          backgroundColor="#7DA3D9"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

import TodoItemForm from '@/components/TodoItemForm.vue';
import TodoItemList from '@/components/TodoItemList.vue';
import useRemoveAndGetItemFromArray from './../composable/useRemoveAndGetItemFromArray';

import { useTodo } from '@/store/todo';

const todoState = useTodo();

const { todo, doing, done, removeAndGetItemFromArray } =
  useRemoveAndGetItemFromArray();

watch(todo, async (newTodo, oldTodo) => {
  todoState.updateTodoNumber(newTodo.length);
});
watch(doing, async (newDoing, oldDoing) => {
  todoState.updateDoingNumber(newDoing.length);
});
watch(done, async (newDone, oldDoing) => {
  todoState.updateDoneNumber(newDone.length);
});

function handleFormSubmit(payload) {
  addItemTodo(payload);
}

function addItemTodo(newTodo) {
  todo.push(newTodo);
}

function onRemoveItemTodo(index) {
  todo.splice(index, 1)[0];
}

function onRemoveItemDoing(index) {
  doing.splice(index, 1)[0];
}
function onRemoveItemDone(index) {
  done.splice(index, 1)[0];
}

function onDropCardItemTodo(payload) {
  if (payload.originColumnName != 'todo') {
    let removed = removeAndGetItemFromArray(
      payload.cardIndex,
      payload.originColumnName
    );

    todo.push(removed);
  }
}
function onDropCardItemDone(payload) {
  if (payload.originColumnName != 'done') {
    let removed = removeAndGetItemFromArray(
      payload.cardIndex,
      payload.originColumnName
    );

    done.push(removed);
  }
}

function onDropCardItemDoing(payload) {
  if (payload.originColumnName != 'doing') {
    let removed = removeAndGetItemFromArray(
      payload.cardIndex,
      payload.originColumnName
    );

    doing.push(removed);
  }
}
</script>

<style scoped></style>
