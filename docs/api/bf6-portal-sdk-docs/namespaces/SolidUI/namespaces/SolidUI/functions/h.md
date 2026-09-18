[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [SolidUI](../../../README.md) / [SolidUI](../README.md) / h

# Function: h()

> **h**\<`P`, `T`\>(`component`, `props?`, `options?`): `T`

Defined in: node\_modules/bf6-portal-utils/solid-ui/index.ts:652

The "HyperScript" factory function. Creates a UI Component and sets up reactivity.

## Type Parameters

### P

`P` *extends* `object`

### T

`T`

## Parameters

### component

`Constructable`\<`P`, `T`\> \| `FunctionalComponent`\<`P`, `T`\>

Either a `UI` Class Constructor (e.g., `UI.Button`) or a Functional Component.

### props?

`Reactive`\<`P`\> = `{}`

An object of properties. Values can be static OR reactive (Signals/Accessors).

### options?

[`ComponentOptions`](../type-aliases/ComponentOptions.md)

The options for the component reactivity.

## Returns

`T`

The created UI Instance.
