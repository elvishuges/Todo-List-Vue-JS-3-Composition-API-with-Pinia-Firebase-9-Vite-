<template>
  <v-container>
    <v-sheet>
      <v-form @submit.prevent>
        <v-textarea
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          autofocus
          ref="addEditNoteTextArea"
          bg-color="grey-lighten-2"
          color="#5865f2"
          label="Adicionar Nota..."
        ></v-textarea>
        <v-card-actions>
          <v-spacer></v-spacer>
          <slot name="buttons" />
        </v-card-actions>
      </v-form>
    </v-sheet>
  </v-container>
</template>

<script setup>
import { defineProps, defineEmits, defineExpose } from 'vue';
import { ref } from 'vue';
const emits = defineEmits(['update:modelValue']);
const addEditNoteTextArea = ref(null);

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

function focusTextarea() {
  addEditNoteTextArea.value.focus();
}

defineExpose({
  focusTextarea,
});
</script>

<style lang="scss" scoped></style>
