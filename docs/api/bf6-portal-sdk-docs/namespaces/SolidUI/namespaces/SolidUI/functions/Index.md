[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [SolidUI](../../../README.md) / [SolidUI](../README.md) / Index

# Function: Index()

> **Index**\<`T`\>(`each`, `render`, `options?`): `void`

Defined in: node\_modules/bf6-portal-utils/solid-ui/index.ts:740

A generic List Renderer optimized for Game UI.
Different from `array.map()` in that `Index` renders components based on their array position, not their value.
If data moves (e.g., `["A", "B"]` -> `["B", "A"]`), the widgets at index 0 and 1 stay in place and simply update
their content to match the elements at their respective indexes.
This avoids destroying/recreating widgets, which is crucial for performance and Z-order stability.

## Type Parameters

### T

`T`

## Parameters

### each

[`Accessor`](../type-aliases/Accessor.md)\<`T`[]\>

The array signal to iterate over.

### render

(`item`, `index`) => `unknown`

A builder function receiving the item (as a Signal) and the index (static number).

### options?

[`IndexOptions`](../type-aliases/IndexOptions.md)

The options for the index.

## Returns

`void`
