<template>
  <div class="edit-note">
    <v-container>
      <AddEditNote v-model="editingNote" placeholder="Editar Nota...">
        <template #buttons>
          <v-btn
            color="indigo-darken-3"
            size="large"
            @click="$router.push('/notes')"
          >
            Cancelar
          </v-btn>
          <v-btn
            class="text-subtitle-1 white"
            color="indigo-darken-3"
            size="large"
            :disabled="!editingNote"
            @click="onEditNote"
            variant="flat"
          >
            Editar Nota
          </v-btn>
        </template>
      </AddEditNote>
    </v-container>
  </div>
</template>

<script setup>
import AddEditNote from './../components/AddEditNote.vue';
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useStoreNotes } from '@/store/notes';

const editingNote = ref('');
const storeNotes = useStoreNotes();
const route = useRoute();
const router = useRouter();

onMounted(() => {
  const id = route.params.id;
  const note = getStoreNoteById(id);
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
function onEditNote() {
  storeNotes.updateNote(route.params.id, editingNote.value);
  router.push('/notes');
}
</script>

<style lang="scss" scoped></style>
