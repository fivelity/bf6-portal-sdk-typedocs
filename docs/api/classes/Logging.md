[**bf6-portal-sdk-docs**](../README.md)

***

[bf6-portal-sdk-docs](../README.md) / Logging

# Class: Logging

Defined in: node\_modules/bf6-portal-utils/logging/index.ts:2

## Constructors

### Constructor

> **new Logging**(`tag`): `Logging`

Defined in: node\_modules/bf6-portal-utils/logging/index.ts:3

#### Parameters

##### tag

`string`

#### Returns

`Logging`

## Methods

### log()

> **log**(`text`, `logLevel?`, `error?`): `void`

Defined in: node\_modules/bf6-portal-utils/logging/index.ts:53

#### Parameters

##### text

`string`

##### logLevel?

[`LogLevel`](../bf6-portal-sdk-docs/namespaces/Logging/enumerations/LogLevel.md) = `Logging.LogLevel.Warning`

##### error?

`unknown`

#### Returns

`void`

***

### setLogging()

> **setLogging**(`log?`, `logLevel?`, `includeRawError?`): `void`

Defined in: node\_modules/bf6-portal-utils/logging/index.ts:82

Attaches a logger and defines a minimum log level and whether to attempt to append a string form of the error to
the the text of the log message.

#### Parameters

##### log?

(`text`, `error?`) => `void` \| `Promise`\<`void`\>

The logger function: `(formattedText, error?) => void | Promise<void>`. `error` is the same value
             passed to `log()` (if any), for inspection (e.g. `instanceof Error`, `stack`). `formattedText` may
             also include ` - Error: …` when `includeRawError` is true.

##### logLevel?

[`LogLevel`](../bf6-portal-sdk-docs/namespaces/Logging/enumerations/LogLevel.md)

The minimum log level to use.

##### includeRawError?

`boolean`

When true and `log()` receives an error, attempts to append a string form of the error
                         to the text of the log message.

#### Returns

`void`

***

### willLog()

> **willLog**(`logLevel`): `boolean`

Defined in: node\_modules/bf6-portal-utils/logging/index.ts:49

Checks if a message with the given log level would actually be logged.
Use this to avoid building expensive log messages when logging is disabled or below the threshold.

#### Parameters

##### logLevel

[`LogLevel`](../bf6-portal-sdk-docs/namespaces/Logging/enumerations/LogLevel.md)

The log level to check.

#### Returns

`boolean`

True if logging will occur, false otherwise.
