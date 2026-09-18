[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [SolidUI](../../../README.md) / [SolidUI](../README.md) / setLogging

# Function: setLogging()

> **setLogging**(`log?`, `logLevel?`, `includeRawError?`): `void`

Defined in: node\_modules/bf6-portal-utils/solid-ui/index.ts:21

Attaches a logger and defines a minimum log level and whether to include the runtime error in the log.

## Parameters

### log?

(`text`) => `void` \| `Promise`\<`void`\>

The logger function to use. Pass undefined to disable logging.

### logLevel?

[`LogLevel`](../../../../Logging/enumerations/LogLevel.md)

The minimum log level to use.

### includeRawError?

`boolean`

Whether to include the runtime error in the log.

## Returns

`void`
