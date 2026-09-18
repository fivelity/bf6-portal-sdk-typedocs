[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [SolidUI](../../../README.md) / [SolidUI](../README.md) / createStore

# Function: createStore()

> **createStore**\<`T`\>(`initialState`): \[`T`, (`fn`) => `void`\]

Defined in: node\_modules/bf6-portal-utils/solid-ui/index.ts:515

Creates a reactive proxy object for handling nested state.
Unlike `createSignal` (which tracks the whole value), `createStore` tracks individual properties.

Benefit: If you update `store.user.name`, only effects listening to `name` will run.
Effects listening to `store.user.age` will not run.

## Type Parameters

### T

`T` *extends* `object`

## Parameters

### initialState

`T`

The initial object.

## Returns

\[`T`, (`fn`) => `void`\]

A tuple `[store, setStore]`:
  - `store`: The reactive proxy object.
  - `setStore`: A setter function to update the store's properties.
