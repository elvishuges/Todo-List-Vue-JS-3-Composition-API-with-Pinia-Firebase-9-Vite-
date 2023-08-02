<template>
  <v-container>
    <v-sheet>
      <v-form @submit.prevent>
        <v-textarea
          v-model="newNote"
          autofocus
          ref="newNoteRef"
          bg-color="grey-lighten-2"
          color="#5865f2"
          label="Adicionar Nota..."
        ></v-textarea>
        <v-card-actions>
          <v-btn class="text-none text-subtitle-1" color="#5865f2">
            Clear
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            class="text-subtitle-1 white"
            color="indigo-darken-3"
            size="large"
            :disabled="!newNote"
            @click="onAddNote"
            variant="flat"
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-sheet>
    <Note
      v-for="note in storeNotes.notes"
      :note="note"
      :key="note.id"
      @deleteClicked="onDeleteNote"
    />
  </v-container>
</template>

<script setup>
// imports
import { ref } from 'vue';
import Note from './../components/Note.vue';
import { useStoreNotes } from '@/store/notes';

// notes

const newNote = ref('');
const notes = ref([]);
const newNoteRef = ref([]);
const storeNotes = useStoreNotes();

function onAddNote() {
  let currentDate = new Date().getTime(),
    id = currentDate.toString();

  let note = {
    id,
    content: newNote.value,
  };
  console.log('', note);
  notes.value.unshift(note);
  newNote.value = '';
  newNoteRef.value.focus();
}

// delete notes

const onDeleteNote = (idNote) => {
  console.log(idNote);
  notes.value = notes.value.filter((note) => note.id !== idNote);
};
</script>

<style lang="css" scoped>
.notes {
  margin-block: 10px;
}
</style>
