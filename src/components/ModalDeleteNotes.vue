<template>
  <v-dialog
    :modelValue="modelValue"
    transition="dialog-bottom-transition"
    width="auto"
  >
    <v-card>
      <v-card-text>
        <div class="pl-10 pr-10">Deseja realmente deletar este item!?</div>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn variant="text" @click="onCancelClick">Cancelar</v-btn>
        <v-btn variant="text" @click="onDeleteClick">Deletar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
const emit = defineEmits(['update:ModalValue', 'deleteNote']);

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
    required: true,
  },
});

function onDeleteClick() {
  emit('deleteNote');
}
function onCancelClick() {
  emit('update:modelValue', false);
}
</script>

<style lang="scss" scoped></style>
