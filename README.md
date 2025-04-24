# Nuxt-useReducer

## Description
A simple useReducer implementation for Nuxt 3. It allows you to manage complex state logic in your components using a reducer function, similar to how you would in React. It using useState under the hood that allows you to share state between components.

## Installation
```bash
npm install @aaronsuuu/nuxt-use-reducer
```

## Setting up
Add the module to your `nuxt.config.ts` file:
```ts
export default defineNuxtConfig({
  modules: [
    '@aaronsuuu/nuxt-use-reducer'
  ]
})
```

## Usage
```vue
<script setup lang="ts">
<template>
  <div>
    <h1>Counter</h1>
    <button @click="() => dispatch('inc')">
      Add
    </button>
    <p>Count: {{ state.count }}</p>
  </div>
</template>

<script setup>

const initialState = { count: 0 }
const reducer = (state, action) => {
  switch (action) {
    case 'inc':
      return { count: state.count + 1 }
    case 'dec':
      return { count: state.count - 1 }
    case 'reset':
      return { count: 0 }
    case 'set':
      return { count: action.payload }
    default:
      return state
  }
}
const [state, dispatch] = useReducer('counter', reducer, initialState)
</script>
