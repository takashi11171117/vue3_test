import { ref } from 'vue'

export const useNumbers = () => {
  const number = ref(0)

  const increment = () => {
    number.value++
  }

  const decrement = () => {
    number.value--
  }

  return { increment, decrement, number }
}
