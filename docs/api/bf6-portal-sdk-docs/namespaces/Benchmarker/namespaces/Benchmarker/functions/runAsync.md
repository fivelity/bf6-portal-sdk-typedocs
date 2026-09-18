[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [Benchmarker](../../../README.md) / [Benchmarker](../README.md) / runAsync

# Function: runAsync()

> **runAsync**(`fn`, `iterations?`): `Promise`\<`number`\>

Defined in: node\_modules/bf6-portal-utils/benchmarker/index.ts:28

Profiles an asynchronous function, accounting for microtask drainage.
WARNING: Only use async benchmarking for pure-JS Promises. Do not pass any functions containing `mod.Wait` (or
`setTimeout`). Because those functions yield to the game engine, the benchmark will stall until the next server
tick (~33ms), completely invalidating your target budget and time measurements.

## Parameters

### fn

() => `void` \| `Promise`\<`void`\>

The asynchronous function to execute.

### iterations?

`number` = `1`

How many times to run it.

## Returns

`Promise`\<`number`\>

A promise that resolves to the total milliseconds elapsed.
