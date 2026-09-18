[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [SolidUI](../../../README.md) / [SolidUI](../README.md) / createEffect

# Function: createEffect()

> **createEffect**(`fn`, `options?`): () => `void`

Defined in: node\_modules/bf6-portal-utils/solid-ui/index.ts:421

Creates a side effect that runs immediately and re-runs whenever its dependencies change.
This is the bridge between reactive state and the outside world (e.g., updating UI props, logs, timers).

Behavior:
  1. Runs `fn` immediately (synchronously).
  2. Tracks any Signal read during execution.
  3. Re-runs `fn` if any of those Signals change.

## Parameters

### fn

() => `void`

The function to execute.

### options?

[`EffectOptions`](../type-aliases/EffectOptions.md)

The options for the effect.

## Returns

A "disposer" function that manually stops the effect and frees memory.

() => `void`
