[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [SolidUI](../../../README.md) / [SolidUI](../README.md) / Accessor

# Type Alias: Accessor\<T\>

> **Accessor**\<`T`\> = () => `T`

Defined in: node\_modules/bf6-portal-utils/solid-ui/index.ts:73

A generic function that retrieves the current value of a reactive signal.
Key Concept: Calling an Accessor establishes a "dependency."
If you call this function inside an Effect or Memo, that Effect will automatically re-run whenever the Signal's
value changes.

## Type Parameters

### T

`T`

## Returns

`T`
