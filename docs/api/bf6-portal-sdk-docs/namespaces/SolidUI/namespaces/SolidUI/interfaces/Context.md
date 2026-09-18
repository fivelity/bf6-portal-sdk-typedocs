[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [SolidUI](../../../README.md) / [SolidUI](../README.md) / Context

# Interface: Context\<T\>

Defined in: node\_modules/bf6-portal-utils/solid-ui/index.ts:574

A definition object for a Context, used for dependency injection.
See [createContext](../functions/createContext.md).

## Type Parameters

### T

`T`

## Properties

### defaultValue

> **defaultValue**: `T`

Defined in: node\_modules/bf6-portal-utils/solid-ui/index.ts:576

***

### id

> **id**: `symbol`

Defined in: node\_modules/bf6-portal-utils/solid-ui/index.ts:575

***

### provide

> **provide**: (`value`, `fn`) => `void`

Defined in: node\_modules/bf6-portal-utils/solid-ui/index.ts:582

Runs the provided function within a scope where this Context is set to `value`.

#### Parameters

##### value

`T`

The value to provide.

##### fn

() => `void`

The function to run within the scope.

#### Returns

`void`
