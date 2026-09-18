[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [PerformanceStats](../../../README.md) / [PerformanceStats](../README.md) / getSpotHealthFactor

# Function: getSpotHealthFactor()

> **getSpotHealthFactor**(): `number`

Defined in: node\_modules/bf6-portal-utils/performance-stats/index.ts:151

## Returns

`number`

A normalized health factor from 0.0 to 1.0. Good for compute scaling.
1.0 = Perfect 30Hz performance.
< 1.0 = Engine is bogged down, scale your compute back.
