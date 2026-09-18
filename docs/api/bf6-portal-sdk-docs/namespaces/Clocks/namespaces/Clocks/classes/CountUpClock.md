[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [Clocks](../../../README.md) / [Clocks](../README.md) / CountUpClock

# Class: CountUpClock

Defined in: node\_modules/bf6-portal-utils/clocks/index.ts:292

CountUpClock: Starts at 0, goes up. Optional limit.

## Extends

- `BaseClock`

## Constructors

### Constructor

> **new CountUpClock**(`options?`): `CountUpClock`

Defined in: node\_modules/bf6-portal-utils/clocks/index.ts:299

Creates a new CountUpClock.

#### Parameters

##### options?

[`CountUpOptions`](../type-aliases/CountUpOptions.md)

The options for the count up clock.

#### Returns

`CountUpClock`

#### Overrides

`BaseClock.constructor`

## Accessors

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

Defined in: node\_modules/bf6-portal-utils/clocks/index.ts:320

##### Returns

`number`

The current value of the count up clock in seconds.

#### Overrides

`BaseClock.seconds`

***

### timeLimit

#### Get Signature

> **get** **timeLimit**(): `number`

Defined in: node\_modules/bf6-portal-utils/clocks/index.ts:313

##### Returns

`number`

The time limit of the count up clock in seconds.

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

Defined in: node\_modules/bf6-portal-utils/clocks/index.ts:306

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

Defined in: node\_modules/bf6-portal-utils/clocks/index.ts:330

Adds seconds to the count up clock.

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

Defined in: node\_modules/bf6-portal-utils/clocks/index.ts:341

Subtracts seconds from the count up clock.

#### Parameters

##### seconds

`number`

The number of seconds to subtract.

#### Returns

`this`

The clock instance.

#### Overrides

`BaseClock.subtractSeconds`
