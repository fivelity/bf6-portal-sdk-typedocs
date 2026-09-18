[**bf6-portal-sdk-docs**](../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../README.md) / [MultiClickDetector](../README.md) / MultiClickDetector

# Class: MultiClickDetector

Defined in: node\_modules/bf6-portal-utils/multi-click-detector/index.ts:6

## Constructors

### Constructor

> **new MultiClickDetector**(`player`, `callback`, `options?`): `MultiClickDetector`

Defined in: node\_modules/bf6-portal-utils/multi-click-detector/index.ts:87

Creates a new multi-click detector with specific options.

#### Parameters

##### player

`Player`

The player to detect multi-click sequences for.

##### callback

() => `void` \| `Promise`\<`void`\>

The callback to call when a multi-click sequence is detected.

##### options?

[`Options`](../namespaces/MultiClickDetector/interfaces/Options.md)

The options for the multi-click detector.

#### Returns

`MultiClickDetector`

## Methods

### destroy()

> **destroy**(): `void`

Defined in: node\_modules/bf6-portal-utils/multi-click-detector/index.ts:184

Destroys the multi-click detector.

#### Returns

`void`

***

### disable()

> **disable**(): `void`

Defined in: node\_modules/bf6-portal-utils/multi-click-detector/index.ts:177

#### Returns

`void`

***

### enable()

> **enable**(): `void`

Defined in: node\_modules/bf6-portal-utils/multi-click-detector/index.ts:173

#### Returns

`void`

***

### setLogging()

> `static` **setLogging**(`log?`, `logLevel?`, `includeRawError?`): `void`

Defined in: node\_modules/bf6-portal-utils/multi-click-detector/index.ts:17

Attaches a logger and defines a minimum log level and whether to include the runtime error in the log.

#### Parameters

##### log?

(`text`) => `void` \| `Promise`\<`void`\>

The logger function to use. Pass undefined to disable logging.

##### logLevel?

[`LogLevel`](../../Logging/enumerations/LogLevel.md)

The minimum log level to use.

##### includeRawError?

`boolean`

Whether to include the runtime error in the log.

#### Returns

`void`
