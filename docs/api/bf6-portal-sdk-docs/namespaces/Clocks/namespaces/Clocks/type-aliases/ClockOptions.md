[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [Clocks](../../../README.md) / [Clocks](../README.md) / ClockOptions

# Type Alias: ClockOptions

> **ClockOptions** = `object`

Defined in: node\_modules/bf6-portal-utils/clocks/index.ts:31

Options for the clock.

## Properties

### onComplete?

> `optional` **onComplete?**: () => `Promise`\<`void`\> \| `void`

Defined in: node\_modules/bf6-portal-utils/clocks/index.ts:43

Callback fired when the clock completes.

#### Returns

`Promise`\<`void`\> \| `void`

***

### onMinute?

> `optional` **onMinute?**: (`currentMinutes`) => `Promise`\<`void`\> \| `void`

Defined in: node\_modules/bf6-portal-utils/clocks/index.ts:39

Callback fired when the minute integer changes.

#### Parameters

##### currentMinutes

`number`

#### Returns

`Promise`\<`void`\> \| `void`

***

### onSecond?

> `optional` **onSecond?**: (`currentSeconds`) => `Promise`\<`void`\> \| `void`

Defined in: node\_modules/bf6-portal-utils/clocks/index.ts:35

Callback fired when the second integer changes.

#### Parameters

##### currentSeconds

`number`

#### Returns

`Promise`\<`void`\> \| `void`
