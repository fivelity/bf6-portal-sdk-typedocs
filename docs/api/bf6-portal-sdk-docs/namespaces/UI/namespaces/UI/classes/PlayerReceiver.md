[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [UI](../../../README.md) / [UI](../README.md) / PlayerReceiver

# Class: PlayerReceiver

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:236

The player receiver. This is the receiver for a single player.

## Extends

- `Receiver`\<`mod.Player`\>

## Properties

### \_id

> `protected` **\_id**: `string`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:125

#### Inherited from

`Receiver._id`

***

### \_inputModeRequesters

> `protected` **\_inputModeRequesters**: `Set`\<[`Element`](Element.md)\>

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:129

#### Inherited from

`Receiver._inputModeRequesters`

***

### \_nativeReceiver

> `protected` **\_nativeReceiver**: `Player`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:127

#### Inherited from

`Receiver._nativeReceiver`

## Accessors

### id

#### Get Signature

> **get** **id**(): `string`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:139

The ID of the receiver. Used mainly for generating UI Widget names and for debugging purposes.

##### Returns

`string`

#### Inherited from

`Receiver.id`

***

### isInputModeRequested

#### Get Signature

> **get** **isInputModeRequested**(): `boolean`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:153

Whether input mode is requested for this receiver.

##### Returns

`boolean`

#### Inherited from

`Receiver.isInputModeRequested`

***

### nativeReceiver

#### Get Signature

> **get** **nativeReceiver**(): `T`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:146

The native receiver of the receiver. This is the actual player or team object, not the receiver object.

##### Returns

`T`

#### Inherited from

`Receiver.nativeReceiver`

## Methods

### addInputModeRequester()

> **addInputModeRequester**(`element`): `void`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:161

Adds an element to the input mode requesters.

#### Parameters

##### element

[`Element`](Element.md)

The element to add.

#### Returns

`void`

#### Inherited from

`Receiver.addInputModeRequester`

***

### removeInputModeRequester()

> **removeInputModeRequester**(`element`): `void`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:179

Removes an element from the input mode requesters.

#### Parameters

##### element

[`Element`](Element.md)

The element to remove.

#### Returns

`void`

#### Inherited from

`Receiver.removeInputModeRequester`

***

### getInstance()

> `static` **getInstance**(`receiver`): `PlayerReceiver`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:250

Gets or creates the instance of the player receiver for a given player.

#### Parameters

##### receiver

`Player`

The player to get the instance for.

#### Returns

`PlayerReceiver`

The instance of the player receiver.
