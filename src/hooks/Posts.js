import { ref } from 'vue';

export default function useTaskList() {
  const posts = ref([]);
  const newPost = ref('');

  function addTask() {
    posts.value.push(newPost.value.content);
    newPost.value.content = '';
  }
  function addCommentToPost(postId) {
    const post = posts.value.find((p) => p.id === postId);
    if (post) {
      post.comments.push(comment);
    }
  }
  function removeCommentFromPost(postId, commentId) {
    const post = posts.value.find((p) => p.id === postId);
    if (post) {
      post.comments = post.comments.filter((c) => c.id !== commentId);
    }
  }

  return {
    posts,
    comments,
    addTask,
    addCommentToPost,
    removeCommentFromPost,
  };
}
