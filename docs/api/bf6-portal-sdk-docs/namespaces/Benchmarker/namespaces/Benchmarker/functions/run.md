[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [Benchmarker](../../../README.md) / [Benchmarker](../README.md) / run

# Function: run()

> **run**(`fn`, `iterations?`): `number`

Defined in: node\_modules/bf6-portal-utils/benchmarker/index.ts:9

Profiles a synchronous function.

## Parameters

### fn

() => `void`

The function to execute.

### iterations?

`number` = `1`

How many times to run it.

## Returns

`number`

The total milliseconds elapsed. Divide by iterations for per-op cost.
