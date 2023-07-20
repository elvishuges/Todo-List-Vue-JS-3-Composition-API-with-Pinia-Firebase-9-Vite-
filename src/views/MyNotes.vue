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
    <div v-for="item in notes" :key="item.id">
      <v-card class="mt-5">
        <v-card-text>
          <div>
            {{ item.content }}
          </div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="#5865f2"> Edit </v-btn>
          <v-spacer />
          <v-btn color="#5865f2"> Delete </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>

<script setup>
// imports
import { ref } from 'vue';

// notes

const newNote = ref('');
const notes = ref([]);
const newNoteRef = ref([]);

function onAddNote() {
  let currentDate = new Date().getTime,
    id = currentDate.toString();

  let note = {
    id,
    content: newNote.value,
  };
  notes.value.unshift(note);
  newNote.value = '';
  newNoteRef.value.focus();
}
</script>

<style lang="css" scoped>
.notes {
  margin-block: 10px;
}
</style>
