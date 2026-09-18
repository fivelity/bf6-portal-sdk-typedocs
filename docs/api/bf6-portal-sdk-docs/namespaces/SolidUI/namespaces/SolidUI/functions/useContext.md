[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [SolidUI](../../../README.md) / [SolidUI](../README.md) / useContext

# Function: useContext()

> **useContext**\<`T`\>(`context`): `T`

Defined in: node\_modules/bf6-portal-utils/solid-ui/index.ts:616

Reads the current value of a Context. It climbs the scope stack to find the nearest `provide` call for this
context. If none is found, it returns the default value.

## Type Parameters

### T

`T`

## Parameters

### context

[`Context`](../interfaces/Context.md)\<`T`\>

The [Context](../interfaces/Context.md) to read.

## Returns

`T`

The current value of the [Context](../interfaces/Context.md).
