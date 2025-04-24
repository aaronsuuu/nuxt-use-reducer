<template>
  <div>
    Nuxt module playground!
    <button @click="() => dispatch('inc')">
      Add
    </button>
    <p>Count: {{ state.count }}</p>
  </div>
</template>

<script setup>
const [state, dispatch] = useReducer('counter', (s, a) => {
  if (a === 'inc') return { count: s.count + 1 }
  return s
}, { count: 0 })
</script>
