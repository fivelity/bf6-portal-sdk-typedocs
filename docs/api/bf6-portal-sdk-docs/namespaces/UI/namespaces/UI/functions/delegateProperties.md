[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [UI](../../../README.md) / [UI](../README.md) / delegateProperties

# Function: delegateProperties()

> **delegateProperties**\<`T`, `S`\>(`target`, `source`, `properties`): `void`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:1011

Delegates properties from a source object to a target object.
Creates getters, setters, and setter methods (e.g., setPropertyName) for each property.

## Type Parameters

### T

`T` *extends* `object`

### S

`S` *extends* `object`

## Parameters

### target

`T`

The object to add properties to (typically `this`)

### source

`S`

The object to delegate to

### properties

readonly `string`[]

Array of property names to delegate

## Returns

`void`
