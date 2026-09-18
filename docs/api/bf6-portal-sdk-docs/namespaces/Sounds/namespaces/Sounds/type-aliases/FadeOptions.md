[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [Sounds](../../../README.md) / [Sounds](../README.md) / FadeOptions

# Type Alias: FadeOptions

> **FadeOptions** = `object`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:278

The options for sound fading.

## Properties

### delay?

> `optional` **delay?**: `number`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:283

The delay before the fade starts in milliseconds.
Default is 0.

***

### duration?

> `optional` **duration?**: `number`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:288

The duration of the fade in milliseconds.
Default is 2,000 milliseconds.

***

### steps?

> `optional` **steps?**: `number`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:298

The number of steps to use for the fade.
Default is 10.

***

### stopOnComplete?

> `optional` **stopOnComplete?**: `boolean`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:303

Whether to stop the sound when the fade is complete.
Default is true if `targetAmplitude` is 0, false otherwise.

***

### targetAmplitude?

> `optional` **targetAmplitude?**: `number`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:293

The target amplitude of the sound.
Default is 0 (which is a fade out).
