[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [Raycast](../../../README.md) / [Raycast](../README.md) / pruneAllStates

# Function: pruneAllStates()

> **pruneAllStates**(): `void`

Defined in: node\_modules/bf6-portal-utils/raycast/index.ts:220

Used when a player leaves to clean up memory leaks by pruning all player states, like a Garbage Collector.
You can hook this into the global `OnPlayerLeaveGame` event, but it will already be called automatically every
`PRUNE_INTERVAL_MS`.

## Returns

`void`
