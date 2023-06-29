<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <todo-item-form @submit="handleFormSubmit" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-card color="#d5d5d5">
          <v-card-title class="text-center">Fazer</v-card-title>
          <v-card-text>
            <todo-item-card
              v-for="(todo, index) in todos"
              :key="index"
              :title="todo.title"
              :description="todo.description"
              @remove="removeItemTodo(index)"
              :index="index"
            />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card>
          <v-card-title class="text-center">Fazendo</v-card-title>
          <v-card-text>
            <!-- Lista de tarefas em andamento -->
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card>
          <v-card-title class="text-center">Feito</v-card-title>
          <v-card-text>
            <!-- Lista de tarefas concluídas -->
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

import TodoItemCard from '@/components/TodoItemCard.vue';
import TodoItemForm from '@/components/TodoItemForm.vue';

const todos = ref([]);

function handleFormSubmit(payload) {
  console.log('handleFormSubmit', payload);
  addItemTodo(payload); // Adiciona um novo item à lista de tarefas
}

function addItemTodo(newTodo) {
  todos.value.push(newTodo); // Adiciona o novo item na lista de tarefas
}

function removeItemTodo(index) {
  todos.value.splice(index, 1); // Remove o item correspondente ao índice da lista de tarefas
}
</script>

<style></style>
