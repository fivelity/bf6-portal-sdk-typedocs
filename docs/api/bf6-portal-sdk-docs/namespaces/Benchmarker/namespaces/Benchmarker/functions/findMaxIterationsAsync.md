[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [Benchmarker](../../../README.md) / [Benchmarker](../README.md) / findMaxIterationsAsync

# Function: findMaxIterationsAsync()

> **findMaxIterationsAsync**(`fn`, `targetMs?`, `batchSize?`): `Promise`\<`number`\>

Defined in: node\_modules/bf6-portal-utils/benchmarker/index.ts:71

Determines how many times an asynchronous function can safely execute within a given time budget.
WARNING: Only use async benchmarking for pure-JS Promises. Do not pass any functions containing `mod.Wait` (or
`setTimeout`). Because those functions yield to the game engine, the benchmark will stall until the next server
tick (~33ms), completely invalidating your target budget and time measurements.

## Parameters

### fn

() => `void` \| `Promise`\<`void`\>

The asynchronous function to test.

### targetMs?

`number` = `10`

The maximum time budget in milliseconds.

### batchSize?

`number` = `100`

How many executions to bundle between time checks (reduces `Date.now()` overhead).

## Returns

`Promise`\<`number`\>

The total number of safe iterations executed.
