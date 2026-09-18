[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [FFADropIns](../../../README.md) / [FFADropIns](../README.md) / Soldier

# Class: Soldier

Defined in: node\_modules/bf6-portal-utils/ffa-drop-ins/index.ts:289

Class representing a soldier whose spawning will be managed by this module.

## Constructors

### Constructor

> **new Soldier**(`player`, `showDebugPosition?`): `Soldier`

Defined in: node\_modules/bf6-portal-utils/ffa-drop-ins/index.ts:346

Every player that should be handled by this spawning system should be instantiated as a `Soldier`,
usually in the `OnPlayerJoinGame()` event.

#### Parameters

##### player

`Player`

The player to instantiate the `Soldier` for.

##### showDebugPosition?

`boolean` = `false`

Whether to show the debug position.

#### Returns

`Soldier`

## Accessors

### player

#### Get Signature

> **get** **player**(): `Player`

Defined in: node\_modules/bf6-portal-utils/ffa-drop-ins/index.ts:489

##### Returns

`Player`

The player associated with this `Soldier` instance.

***

### playerId

#### Get Signature

> **get** **playerId**(): `number`

Defined in: node\_modules/bf6-portal-utils/ffa-drop-ins/index.ts:496

##### Returns

`number`

The unique ID of the player associated with this instance.

## Methods

### deleteIfNotValid()

> **deleteIfNotValid**(): `boolean`

Defined in: node\_modules/bf6-portal-utils/ffa-drop-ins/index.ts:522

Deletes the `Soldier` instance if the player is no longer valid.

#### Returns

`boolean`

Whether the `Soldier` instance was deleted.

***

### startDelayForPrompt()

> **startDelayForPrompt**(`delay?`): `void`

Defined in: node\_modules/bf6-portal-utils/ffa-drop-ins/index.ts:506

Starts the countdown before prompting the player to spawn or delay again.
Usually called in the `OnPlayerJoinGame()` and `OnPlayerUndeploy()` events.
AI soldiers will skip the countdown and spawn immediately.

#### Parameters

##### delay?

`number` = `initialPromptDelay`

The delay to start the countdown for (in seconds). Defaults to the initial prompt delay.

#### Returns

`void`

***

### \_deleteSoldierIfNotValid()

> `static` **\_deleteSoldierIfNotValid**(`playerId`): `void`

Defined in: node\_modules/bf6-portal-utils/ffa-drop-ins/index.ts:296

#### Parameters

##### playerId

`number`

#### Returns

`void`

***

### forceIntoQueue()

> `static` **forceIntoQueue**(`player`): `void`

Defined in: node\_modules/bf6-portal-utils/ffa-drop-ins/index.ts:330

Forces a player to be added to the spawn queue, skipping the countdown and prompt.

#### Parameters

##### player

`Player`

The player to force into the queue.

#### Returns

`void`

***

### startDelayForPrompt()

> `static` **startDelayForPrompt**(`player`): `void`

Defined in: node\_modules/bf6-portal-utils/ffa-drop-ins/index.ts:314

Starts the countdown before prompting the player to spawn or delay again.
Usually called in the `OnPlayerJoinGame()` and `OnPlayerUndeploy()` events.
AI soldiers will skip the countdown and spawn immediately.

#### Parameters

##### player

`Player`

The player to start the delay for.

#### Returns

`void`
