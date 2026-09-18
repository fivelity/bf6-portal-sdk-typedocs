[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [PortalGadget](../../../README.md) / [PortalGadget](../README.md) / Handler

# Type Alias: Handler

> **Handler** = (`player`, `isZooming`, `getTarget`) => `void`

Defined in: node\_modules/bf6-portal-utils/portal-gadget/index.ts:48

A handler function for the Portal Gadget's events.

## Parameters

### player

`mod.Player`

The player who started the fire.

### isZooming

`boolean`

Whether the player is zooming.

### getTarget

() => `Promise`\<`mod.Vector` \| `undefined`\>

An async function that returns the target position.

## Returns

`void`
