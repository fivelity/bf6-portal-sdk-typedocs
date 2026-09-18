[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [CallbackHandler](../../../README.md) / [CallbackHandler](../README.md) / invoke

# Function: invoke()

> **invoke**\<`T`\>(`callback`, `args`, `errorContext`, `logging`, `logLevel?`): `void`

Defined in: node\_modules/bf6-portal-utils/callback-handler/index.ts:13

Safely invokes a callback that may be sync or async, catching and logging errors.

## Type Parameters

### T

`T` *extends* (...`args`) => `void` \| `Promise`\<`void`\>

## Parameters

### callback

`T`

The callback to invoke (may be undefined).

### args

`Parameters`\<`T`\>

Arguments to pass to the callback.

### errorContext

`string`

Context for error messages.

### logging

[`Logging`](../../../../../../classes/Logging.md)

Logging instance to use for error reporting.

### logLevel?

[`LogLevel`](../../../../Logging/enumerations/LogLevel.md) = `Logging.LogLevel.Error`

Log level for error messages.

## Returns

`void`
