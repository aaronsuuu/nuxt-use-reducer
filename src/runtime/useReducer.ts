import { useState } from 'nuxt/app'
import { readonly, type DeepReadonly, type Ref } from 'vue'

export type Reducer<T, U> = (state: T, action: U, payload?: Partial<T>) => T

export function useReducer<T, U>(
  key: string,
  reducer: Reducer<T, U>,
  initialArgs: T,
  init?: (args: T) => T,
): [Readonly<Ref<DeepReadonly<T>>>, (action: U, payload?: Partial<T>) => void] {
  const state = useState<T>(key, init ? () => init(initialArgs) : () => initialArgs)

  const dispatch = function (action: U, payload?: Partial<T>) {
    state.value = reducer(state.value, action, payload)
  }

  return [readonly(state), dispatch]
}
