[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [SolidUI](../../../README.md) / [SolidUI](../README.md) / createSignal

# Function: createSignal()

> **createSignal**\<`T`\>(`initialValue`): \[[`Accessor`](../type-aliases/Accessor.md)\<`T`\>, [`Setter`](../type-aliases/Setter.md)\<`T`\>\]

Defined in: node\_modules/bf6-portal-utils/solid-ui/index.ts:383

Creates a simple reactive state (a "Signal").
Signals are the atoms of reactivity. They hold a value and notify subscribers when changed.

## Type Parameters

### T

`T`

## Parameters

### initialValue

`T`

The starting value.

## Returns

\[[`Accessor`](../type-aliases/Accessor.md)\<`T`\>, [`Setter`](../type-aliases/Setter.md)\<`T`\>\]

A tuple `[read, write]`:
  - `read`: An [Accessor](../type-aliases/Accessor.md) to get the value and subscribe.
  - `write`: A [Setter](../type-aliases/Setter.md) to update the value.
