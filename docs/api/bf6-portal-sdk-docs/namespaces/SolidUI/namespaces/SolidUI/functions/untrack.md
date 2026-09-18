[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [SolidUI](../../../README.md) / [SolidUI](../README.md) / untrack

# Function: untrack()

> **untrack**\<`T`\>(`fn`): `T`

Defined in: node\_modules/bf6-portal-utils/solid-ui/index.ts:365

Executes a function without creating dependencies.
Any signals read inside `fn` will return their current value, but the surrounding Effect will not subscribe to
them.

## Type Parameters

### T

`T`

## Parameters

### fn

() => `T`

The function to execute.

## Returns

`T`

The return value of `fn`.

## Example

```ts
createEffect(() => {
    console.log(count()); // Tracks 'count'
    untrack(() => console.log(timer())); // Logs 'timer' but doesn't track it
});
```
