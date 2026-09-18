[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [CallbackHandler](../../../README.md) / [CallbackHandler](../README.md) / invokeNoArgs

# Function: invokeNoArgs()

> **invokeNoArgs**(`callback`, `errorContext`, `logging`, `logLevel?`): `void`

Defined in: node\_modules/bf6-portal-utils/callback-handler/index.ts:48

Safely invokes a callback with no arguments that may be sync or async, catching and logging errors.

## Parameters

### callback

() => `void` \| `Promise`\<`void`\>

The callback to invoke (may be undefined).

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
