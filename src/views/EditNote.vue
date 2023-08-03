<template>
  <div class="edit-note">
    <v-container>
      <AddEditNote v-model="editingNote">
        <template #buttons>
          <v-btn
            class="text-subtitle-1 white"
            color="indigo-darken-3"
            size="large"
            :disabled="!editingNote"
            @click="onEditNote"
            variant="flat"
          >
            Editar Nota
          </v-btn></template
        >
      </AddEditNote>
    </v-container>
  </div>
</template>

<script setup>
import AddEditNote from './../components/AddEditNote.vue';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useStoreNotes } from '@/store/notes';

const editingNote = ref('');
const storeNotes = useStoreNotes();
const route = useRoute();

onMounted(() => {
  const id = route.params.id;
  const note = getStoreNoteById(id);
  console.log('note', note);
  if (note) {
    editingNote.value = note.content;
    return;
  }
  alert('Nota Não Encontrada');
});

function getStoreNoteById(idNote) {
  const foundedNote = storeNotes.notes.find((note) => note.id == idNote);
  return foundedNote;
}
function onEditNote(idNote) {
  // TODO
  console.log('edit note');
}
</script>

<style lang="scss" scoped></style>
