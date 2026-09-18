[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [SolidUI](../../../README.md) / [SolidUI](../README.md) / Setter

# Type Alias: Setter\<T\>

> **Setter**\<`T`\> = (`newValue`) => `void`

Defined in: node\_modules/bf6-portal-utils/solid-ui/index.ts:81

A function used to update the value of a Signal.
You can pass either:
  - A raw value (e.g., `5`).
  - An "updater" function that receives the previous value (e.g., `prev => prev + 1`).

## Type Parameters

### T

`T`

## Parameters

### newValue

`T` \| ((`prev`) => `T`)

## Returns

`void`
