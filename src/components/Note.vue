<template>
  <div>
    <v-card class="mt-5">
      <v-card-text>
        <div>
          {{ note.content }}
        </div>
      </v-card-text>
      <div class="d-flex pl-4 pr-3 justify-space-between">
        <v-list-item-subtitle>{{ dateFormated }}</v-list-item-subtitle>
        <v-list-item-subtitle>{{ characteresLength }}</v-list-item-subtitle>
      </div>

      <v-card-actions>
        <v-btn @click="editNote" color="#5865f2"> Edit </v-btn>
        <v-spacer />
        <v-btn @click="deleteNote" color="#5865f2"> Delete </v-btn>
      </v-card-actions>
    </v-card>
    <ModalDeleteNotes
      v-model="modals.deleteNote"
      @deleteNote="ondeleteNoteModalComfirm"
    />
  </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue';
import { computed, defineEmits } from 'vue';
import { useNow, useDateFormat } from '@vueuse/core';
import ModalDeleteNotes from './ModalDeleteNotes.vue';

const emits = defineEmits(['deleteClicked', 'editClicked']);
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

const dateFormated = computed(() => {
  let date = new Date(parseInt(props.note.date));
  let formattedDate = useDateFormat(date, 'DD-MM-YYYY HH:mm');
  return formattedDate.value;
});

const deleteNote = () => {
  modals.deleteNote = true;
};
const editNote = () => {
  emits('editClicked', props.note.id);
};
const ondeleteNoteModalComfirm = () => {
  emits('deleteClicked', props.note.id);
};

const modals = reactive({
  deleteNote: false,
});

/**
 * date formatted
 */
</script>

<style lang="scss" scoped></style>
