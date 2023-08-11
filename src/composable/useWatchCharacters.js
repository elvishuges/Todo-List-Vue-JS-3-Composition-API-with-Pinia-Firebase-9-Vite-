import { watch } from 'vue';

export default function useWatchCharacters(valuetoWatch, maxchars = 100) {
  watch(valuetoWatch, (newValue) => {
    if (newValue.length > maxchars) {
      alert(`Apenas ${maxchars} caracteres`);
    }
  });
}
