<template>
  <v-container>
    <AddEditNote ref="addEditNoteRef" v-model="newNote">
      <template #buttons>
        <v-btn
          class="text-subtitle-1 white"
          color="indigo-darken-3"
          size="large"
          :disabled="!newNote"
          @click="onAddNote"
          variant="flat"
        >
          Adicionar Nota
        </v-btn></template
      >
    </AddEditNote>
    <v-progress-linear
      v-if="!storeNotes.notesLoaded"
      color="deep-purple-accent-4"
      indeterminate
      rounded
      height="6"
    ></v-progress-linear>
    <div v-else>
      <Note
        v-for="note in storeNotes.notes"
        :note="note"
        :key="note.id"
        @deleteClicked="onDeleteNote"
        @editClicked="onEditClicked"
      />
    </div>
    <div class="text-center text-disabled" v-if="!storeNotes.notes.length">
      Não há notas aqui...
    </div>
  </v-container>
</template>

<script setup>
// imports
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import Note from './../components/Note.vue';
import AddEditNote from './../components/AddEditNote.vue';
import { useStoreNotes } from '@/store/notes';
import useWatchCharacters from './../composable/useWatchCharacters.js';

const router = useRouter();

// notes
const newNote = ref('');
const notes = ref([]);
const addEditNoteRef = ref(null);

const storeNotes = useStoreNotes();
useWatchCharacters(newNote);

function onAddNote() {
  storeNotes.addNote(newNote.value);
  newNote.value = '';
  addEditNoteRef.value.focusTextarea();
}

// delete notes

const onDeleteNote = (idNote) => {
  storeNotes.deleteNote(idNote);
};
// edit note
const onEditClicked = (idNote) => {
  router.push({ name: 'editNote', params: { id: idNote } });
};
</script>

<style lang="css" scoped>
.notes {
  margin-block: 10px;
}
</style>
