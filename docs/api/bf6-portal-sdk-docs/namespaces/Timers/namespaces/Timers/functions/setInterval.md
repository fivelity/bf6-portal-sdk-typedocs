[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [Timers](../../../README.md) / [Timers](../README.md) / setInterval

# Function: setInterval()

> **setInterval**(`callback`, `ms`, `immediate?`): `number`

Defined in: node\_modules/bf6-portal-utils/timers/index.ts:90

Schedules a repeated execution after the specified interval.

## Parameters

### callback

() => `void` \| `Promise`\<`void`\>

The callback to execute. Synchronous callbacks will delay the start of the next interval.

### ms

`number`

The interval in milliseconds.

### immediate?

`boolean` = `false`

If true, runs the callback immediately before the first wait period.

## Returns

`number`

The timer ID.
