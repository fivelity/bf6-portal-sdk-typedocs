[**bf6-portal-sdk-docs**](../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../README.md) / [ScavengerDrop](../README.md) / ScavengerDrop

# Class: ScavengerDrop

Defined in: node\_modules/bf6-portal-utils/scavenger-drop/index.ts:7

## Constructors

### Constructor

> **new ScavengerDrop**(`body`, `onScavenge`, `options?`): `ScavengerDrop`

Defined in: node\_modules/bf6-portal-utils/scavenger-drop/index.ts:33

Creates a new scavenger drop.
Should be called immediately after a player dies in the `OnPlayerDied` event handler so that the player's position is still valid.

#### Parameters

##### body

`Player`

The body of the player that the scavenger drop is on.

##### onScavenge

(`player`) => `void` \| `Promise`\<`void`\>

The callback to invoke when a scavenger is found.

##### options?

[`Options`](../namespaces/ScavengerDrop/interfaces/Options.md)

The options for the scavenger drop.

#### Returns

`ScavengerDrop`

## Methods

### stop()

> **stop**(): `void`

Defined in: node\_modules/bf6-portal-utils/scavenger-drop/index.ts:121

Stops the scavenger drop.

#### Returns

`void`

***

### setLogging()

> `static` **setLogging**(`log?`, `logLevel?`, `includeRawError?`): `void`

Defined in: node\_modules/bf6-portal-utils/scavenger-drop/index.ts:18

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
