import { reactive } from 'vue';

export default function useRemoveAndGetItemFromArray() {
  const todo = reactive([]);
  const doing = reactive([]);
  const done = reactive([]);

  const removeAndGetItemFromArray = (index, from) => {
    let item = null;

    const removeFromArray = (arr) => arr.splice(index, 1)[0];

    switch (from) {
      case 'todo':
        item = removeFromArray(todo);
        break;
      case 'doing':
        item = removeFromArray(doing);
        break;
      case 'done':
        item = removeFromArray(done);
        break;
      default:
        break;
    }

    return item;
  };

  return {
    todo,
    doing,
    done,
    removeAndGetItemFromArray,
  };
}
