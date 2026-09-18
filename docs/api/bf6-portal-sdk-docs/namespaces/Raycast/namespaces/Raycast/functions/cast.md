[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [Raycast](../../../README.md) / [Raycast](../README.md) / cast

# Function: cast()

Casts a ray with specific callbacks. The callback vector types must match the `start` and `end` vector types.

## Example

```ts
Raycast.cast(player, { x: 0, y: 0, z: 0 }, { x: 10, y: 10, z: 10 }, {
    onHit: (hitPoint, hitNormal) => {
        console.log(`Ray hit at ${hitPoint.x}, ${hitPoint.y}, ${hitPoint.z}`);
    },
});
Raycast.cast(player, mod.CreateVector(0, 0, 0), mod.CreateVector(10, 10, 10), {
    onHit: (hitPoint, hitNormal) => {
        console.log(`Ray hit at ${mod.XComponentOf(hitPoint)}, ${mod.YComponentOf(hitPoint)}, ${mod.ZComponentOf(hitPoint)}`);
    },
});
```

## Param

**player**

The player to assign the ray to.

## Param

**start**

The start position of the ray.

## Param

**end**

The end position of the ray.

## Param

**callbacks**

The callbacks to be called (at least one must be provided).
  - `onHit`: The callback to be called when the ray hits a target.
  - `onMiss`: The callback to be called when the ray misses a target.

## Call Signature

> **cast**(`player`, `start`, `end`, `callbacks`): `void`

Defined in: node\_modules/bf6-portal-utils/raycast/index.ts:81

### Parameters

#### player

`Player`

#### start

[`Vector3`](../../../../Vectors/namespaces/Vectors/type-aliases/Vector3.md)

#### end

[`Vector3`](../../../../Vectors/namespaces/Vectors/type-aliases/Vector3.md)

#### callbacks

[`Callbacks`](../type-aliases/Callbacks.md)\<[`Vector3`](../../../../Vectors/namespaces/Vectors/type-aliases/Vector3.md)\>

### Returns

`void`

## Call Signature

> **cast**(`player`, `start`, `end`, `callbacks`): `void`

Defined in: node\_modules/bf6-portal-utils/raycast/index.ts:83

### Parameters

#### player

`Player`

#### start

`Vector`

#### end

`Vector`

#### callbacks

[`Callbacks`](../type-aliases/Callbacks.md)\<`Vector`\>

### Returns

`void`
