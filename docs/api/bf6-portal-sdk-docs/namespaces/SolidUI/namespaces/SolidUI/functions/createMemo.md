[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [SolidUI](../../../README.md) / [SolidUI](../README.md) / createMemo

# Function: createMemo()

> **createMemo**\<`T`\>(`fn`, `options?`): [`Accessor`](../type-aliases/Accessor.md)\<`T`\>

Defined in: node\_modules/bf6-portal-utils/solid-ui/index.ts:437

Creates a "Computed Value" or "Derived Signal".
Use this when a value depends on other signals. It is efficient because:
  - It caches the result.
  - It only notifies downstream listeners if the result actually changes.

## Type Parameters

### T

`T`

## Parameters

### fn

() => `T`

The function to memoize.

### options?

[`MemoOptions`](../type-aliases/MemoOptions.md)

The options for the memo.

## Returns

[`Accessor`](../type-aliases/Accessor.md)\<`T`\>

The [Accessor](../type-aliases/Accessor.md) for the memoized value.

## Example

```ts
const fullName = createMemo(() => `${firstName()} ${lastName()}`);
```
