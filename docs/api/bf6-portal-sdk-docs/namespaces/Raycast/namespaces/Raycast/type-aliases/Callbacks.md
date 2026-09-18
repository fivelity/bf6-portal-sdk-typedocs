[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [Raycast](../../../README.md) / [Raycast](../README.md) / Callbacks

# Type Alias: Callbacks\<T\>

> **Callbacks**\<`T`\> = \{ `onHit`: [`HitCallback`](HitCallback.md)\<`T`\>; `onMiss?`: [`MissCallback`](MissCallback.md); \} \| \{ `onHit?`: [`HitCallback`](HitCallback.md)\<`T`\>; `onMiss`: [`MissCallback`](MissCallback.md); \}

Defined in: node\_modules/bf6-portal-utils/raycast/index.ts:48

A callback object type for the `cast()` method. Must have Hit (Miss optional) or Miss (Hit optional).

## Type Parameters

### T

`T` *extends* `mod.Vector` \| [`Vector3`](Vector3.md)
