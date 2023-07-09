<template>
  <div class="todo-item-list-content" @dragover.prevent="dragOver" @drop="onDrop">
    <v-card
      class="todo-item-list-card"
      :style="{ background: props.backgroundColor }"
    >
      <v-card-title class="text-center">
        <div class="information">{{ itensNumbers }}</div>
        <div class="content">
          {{ title }}
        </div></v-card-title
      >
      <v-card-text>
        <!-- Lista de tarefas em andamento -->
        <todo-item-card
          :columnIdentifier="columnIdentifier"
          v-for="(item, index) in props.items"
          :key="index"
          :title="item.title"
          :description="item.description"
          @remove="onRemoveItem(index)"
          :index="index"
        ></todo-item-card>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { defineEmits, computed } from 'vue';
import TodoItemCard from '@/components/TodoItemCard.vue';
const emits = defineEmits(['onDropCardItem', 'onRemoveItem']);

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

const itensNumbers = computed(() => {
  return props.items.length;
});

function onDrop(event) {
  event.preventDefault();
  if (event.dataTransfer.getData('text/plain')) {
    const dropedCard = JSON.parse(event.dataTransfer.getData('text/plain'));
    emits('onDropCardItem', dropedCard);
  }
}

function onRemoveItem(index) {
  emits('onRemoveItem', index);
}
</script>

<style lang="scss" scoped>
.todo-item-list-card {
  min-height: 400px;
  color: rgb(57, 57, 58);
}

.information {
  position: absolute;
  top: 0px;
  right: 10px;
  padding: 5px;
  border-radius: 5px;
  font-size: 12px;
}
</style>
