[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [SolidUI](../../../README.md) / [SolidUI](../README.md) / createRoot

# Function: createRoot()

> **createRoot**\<`T`\>(`fn`): `T`

Defined in: node\_modules/bf6-portal-utils/solid-ui/index.ts:456

Creates a reactive scope that is detached from the parent.
Unlike Effects, a Root does not track dependencies and does not auto-dispose.
You must manually call the provided `dispose` function to clean up everything created inside it.

Use Case: Creating dynamic lists, global managers, or UI sections that live/die independently of their parent.

## Type Parameters

### T

`T`

## Parameters

### fn

(`dispose`) => `T`

A function that receives a `dispose` callback.

## Returns

`T`

The return value of `fn`.
