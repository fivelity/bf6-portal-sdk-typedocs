[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [SolidUI](../../../README.md) / [SolidUI](../README.md) / createContext

# Function: createContext()

> **createContext**\<`T`\>(`defaultValue`): [`Context`](../interfaces/Context.md)\<`T`\>

Defined in: node\_modules/bf6-portal-utils/solid-ui/index.ts:590

Creates a Context object to pass data deeply without "prop drilling".

## Type Parameters

### T

`T`

## Parameters

### defaultValue

`T`

The value returned by `useContext` if no provider is found in the stack.

## Returns

[`Context`](../interfaces/Context.md)\<`T`\>

A [Context](../interfaces/Context.md) object.
