<template>
  <div class="form-container">
    <form @submit.prevent="handleSubmit">
      <input v-model="commentContent" name="commentContent" type="text" />
      <button>Add New Todo</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup(props, { emit }) {
    const commentContent = ref('');

    function handleSubmit() {
      emit('formContent', commentContent.value);
    }
    return {
      commentContent,
      handleSubmit,
    };
  },
};
</script>

<style></style>
