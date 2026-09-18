[**bf6-portal-sdk-docs**](../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../README.md) / [Logger](../README.md) / Logger

# Class: Logger

Defined in: node\_modules/bf6-portal-utils/logger/index.ts:6

## Constructors

### Constructor

> **new Logger**(`player`, `options?`): `Logger`

Defined in: node\_modules/bf6-portal-utils/logger/index.ts:69

Creates a new logger with specific options.

#### Parameters

##### player

`Player`

The player to to draw the logger for.

##### options?

[`Options`](../namespaces/Logger/interfaces/Options.md)

The options for the logger.

#### Returns

`Logger`

## Accessors

### maxRows

#### Get Signature

> **get** **maxRows**(): `number`

Defined in: node\_modules/bf6-portal-utils/logger/index.ts:119

##### Returns

`number`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: node\_modules/bf6-portal-utils/logger/index.ts:123

##### Returns

`string`

***

### visible

#### Get Signature

> **get** **visible**(): `boolean`

Defined in: node\_modules/bf6-portal-utils/logger/index.ts:127

##### Returns

`boolean`

#### Set Signature

> **set** **visible**(`visible`): `void`

Defined in: node\_modules/bf6-portal-utils/logger/index.ts:131

##### Parameters

###### visible

`boolean`

##### Returns

`void`

## Methods

### clear()

> **clear**(): `Logger`

Defined in: node\_modules/bf6-portal-utils/logger/index.ts:166

Clear the logger.

#### Returns

`Logger`

The logger instance.

***

### destroy()

> **destroy**(): `void`

Defined in: node\_modules/bf6-portal-utils/logger/index.ts:174

Destroy the logger.

#### Returns

`void`

***

### hide()

> **hide**(): `Logger`

Defined in: node\_modules/bf6-portal-utils/logger/index.ts:148

Hide the logger.

#### Returns

`Logger`

The logger instance.

***

### log()

> **log**(`text`, `rowIndex?`): `Logger`

Defined in: node\_modules/bf6-portal-utils/logger/index.ts:201

Log a message to the logger.

#### Parameters

##### text

`string`

The text to log.

##### rowIndex?

`number`

The row index to log the message to (if using static rows, default is 0).

#### Returns

`Logger`

The logger instance.

***

### logAsync()

> **logAsync**(`text`, `rowIndex?`): `Promise`\<`void`\>

Defined in: node\_modules/bf6-portal-utils/logger/index.ts:185

Log a message to the logger asynchronously (non-blocking microtask).

#### Parameters

##### text

`string`

The text to log.

##### rowIndex?

`number`

The row index to log the message to (if using static rows, default is 0).

#### Returns

`Promise`\<`void`\>

The logger instance.

***

### show()

> **show**(): `Logger`

Defined in: node\_modules/bf6-portal-utils/logger/index.ts:139

Show the logger.

#### Returns

`Logger`

The logger instance.

***

### toggle()

> **toggle**(): `Logger`

Defined in: node\_modules/bf6-portal-utils/logger/index.ts:157

Toggle the visibility of the logger.

#### Returns

`Logger`

The logger instance.
