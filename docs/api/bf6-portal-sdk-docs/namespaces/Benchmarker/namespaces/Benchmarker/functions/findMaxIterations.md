[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [Benchmarker](../../../README.md) / [Benchmarker](../README.md) / findMaxIterations

# Function: findMaxIterations()

> **findMaxIterations**(`fn`, `targetMs?`, `batchSize?`): `number`

Defined in: node\_modules/bf6-portal-utils/benchmarker/index.ts:45

Determines how many times a function can safely execute within a given time budget.

## Parameters

### fn

() => `void`

The function to test.

### targetMs?

`number` = `10`

The maximum time budget in milliseconds.

### batchSize?

`number` = `100`

How many executions to bundle between time checks (reduces `Date.now()` overhead).

## Returns

`number`

The total number of safe iterations executed.
