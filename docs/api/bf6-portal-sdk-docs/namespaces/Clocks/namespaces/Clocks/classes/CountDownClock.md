[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [Clocks](../../../README.md) / [Clocks](../README.md) / CountDownClock

# Class: CountDownClock

Defined in: node\_modules/bf6-portal-utils/clocks/index.ts:351

CountDownClock: Starts at Duration, goes down to 0.

## Extends

- `BaseClock`

## Constructors

### Constructor

> **new CountDownClock**(`durationSeconds`, `options?`): `CountDownClock`

Defined in: node\_modules/bf6-portal-utils/clocks/index.ts:359

Creates a new CountDownClock.

#### Parameters

##### durationSeconds

`number`

The duration of the countdown in seconds.

##### options?

[`ClockOptions`](../type-aliases/ClockOptions.md)

The options for the countdown clock.

#### Returns

`CountDownClock`

#### Overrides

`BaseClock.constructor`

## Accessors

### duration

#### Get Signature

> **get** **duration**(): `number`

Defined in: node\_modules/bf6-portal-utils/clocks/index.ts:374

##### Returns

`number`

The starting duration of the countdown in seconds.

***

### isComplete

#### Get Signature

> **get** **isComplete**(): `boolean`

Defined in: node\_modules/bf6-portal-utils/clocks/index.ts:204

##### Returns

`boolean`

#### Inherited from

`BaseClock.isComplete`

***

### isPaused

#### Get Signature

> **get** **isPaused**(): `boolean`

Defined in: node\_modules/bf6-portal-utils/clocks/index.ts:200

##### Returns

`boolean`

#### Inherited from

`BaseClock.isPaused`

***

### isRunning

#### Get Signature

> **get** **isRunning**(): `boolean`

Defined in: node\_modules/bf6-portal-utils/clocks/index.ts:196

##### Returns

`boolean`

#### Inherited from

`BaseClock.isRunning`

***

### seconds

#### Get Signature

> **get** **seconds**(): `number`

Defined in: node\_modules/bf6-portal-utils/clocks/index.ts:381

##### Returns

`number`

The current value of the countdown in seconds.

#### Overrides

`BaseClock.seconds`

## Methods

### \_adjustElapsedTime()

> `protected` **\_adjustElapsedTime**(`seconds`): `void`

Defined in: node\_modules/bf6-portal-utils/clocks/index.ts:134

Modifies the internal elapsed time. Used by add/subtract seconds.

#### Parameters

##### seconds

`number`

#### Returns

`void`

#### Inherited from

`BaseClock._adjustElapsedTime`

***

### \_checkCompletion()

> `protected` **\_checkCompletion**(): `boolean`

Defined in: node\_modules/bf6-portal-utils/clocks/index.ts:366

#### Returns

`boolean`

#### Overrides

`BaseClock._checkCompletion`

***

### \_getElapsedMilliseconds()

> `protected` **\_getElapsedMilliseconds**(): `number`

Defined in: node\_modules/bf6-portal-utils/clocks/index.ts:118

Returns the logical "Elapsed Time" of the clock in Milliseconds.
For CountUp, this is the value.
For CountDown, this is (Duration - Value).

#### Returns

`number`

#### Inherited from

`BaseClock._getElapsedMilliseconds`

***

### \_getElapsedSeconds()

> `protected` **\_getElapsedSeconds**(): `number`

Defined in: node\_modules/bf6-portal-utils/clocks/index.ts:127

Returns the logical "Elapsed Time" of the clock in Seconds.
For CountUp, this is the value.
For CountDown, this is (Duration - Value).

#### Returns

`number`

#### Inherited from

`BaseClock._getElapsedSeconds`

***

### addSeconds()

> **addSeconds**(`seconds`): `this`

Defined in: node\_modules/bf6-portal-utils/clocks/index.ts:392

Adds seconds to the countdown clock, so it wil take longer to complete.

#### Parameters

##### seconds

`number`

The number of seconds to add.

#### Returns

`this`

The clock instance.

#### Overrides

`BaseClock.addSeconds`

***

### pause()

> **pause**(): `this`

Defined in: node\_modules/bf6-portal-utils/clocks/index.ts:261

Pauses the clock (same as stop).

#### Returns

`this`

The clock instance.

#### Inherited from

`BaseClock.pause`

***

### reset()

> **reset**(): `this`

Defined in: node\_modules/bf6-portal-utils/clocks/index.ts:271

Resets the clock.
If the clock was running, it stays running and snaps to the starting time (elapsed 0), firing `onSecond`
(and possibly `onMinute`) for that position. If it was stopped or paused, it remains stopped.

#### Returns

`this`

The clock instance.

#### Inherited from

`BaseClock.reset`

***

### resume()

> **resume**(): `this`

Defined in: node\_modules/bf6-portal-utils/clocks/index.ts:253

Resumes the clock (same as start).

#### Returns

`this`

The clock instance.

#### Inherited from

`BaseClock.resume`

***

### setDuration()

> **setDuration**(`durationSeconds`): `this`

Defined in: node\_modules/bf6-portal-utils/clocks/index.ts:414

Sets the duration of the countdown clock.

#### Parameters

##### durationSeconds

`number`

The duration of the countdown in seconds.

#### Returns

`this`

The clock instance.

***

### start()

> **start**(): `this`

Defined in: node\_modules/bf6-portal-utils/clocks/index.ts:212

Starts the clock.

#### Returns

`this`

The clock instance.

#### Inherited from

`BaseClock.start`

***

### stop()

> **stop**(): `this`

Defined in: node\_modules/bf6-portal-utils/clocks/index.ts:230

Stops the clock.

#### Returns

`this`

The clock instance.

#### Inherited from

`BaseClock.stop`

***

### subtractSeconds()

> **subtractSeconds**(`seconds`): `this`

Defined in: node\_modules/bf6-portal-utils/clocks/index.ts:403

Subtracts seconds from the countdown clock, so it will complete faster.

#### Parameters

##### seconds

`number`

The number of seconds to subtract.

#### Returns

`this`

The clock instance.

#### Overrides

`BaseClock.subtractSeconds`
