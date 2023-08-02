<template>
  <div>
    <v-card class="mt-5">
      <v-card-text>
        <div>
          {{ note.content }}
        </div>
      </v-card-text>
      <div class="d-flex pr-3 justify-space-between">
        <v-list-item-subtitle></v-list-item-subtitle>
        <v-list-item-subtitle>{{ characteresLength }}</v-list-item-subtitle>
      </div>

      <v-card-actions>
        <v-btn color="#5865f2"> Edit </v-btn>
        <v-spacer />
        <v-btn @click="deleteNote" color="#5865f2"> Delete </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { computed, defineEmits } from 'vue';
const emits = defineEmits(['deleteClicked']);
// props
const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

const characteresLength = computed(() => {
  let length = props.note.content.length;
  let description = length > 1 ? 'Characteres' : 'Character';
  return `${length} ${description}`;
});

const deleteNote = () => {
  emits('deleteClicked', props.note.id);
};
</script>

<style lang="scss" scoped></style>
