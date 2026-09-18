[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [Sounds](../../../README.md) / [Sounds](../README.md) / Sound3D

# Class: Sound3D

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:379

## Extends

- `Sound`

## Constructors

### Constructor

> **new Sound3D**(`sfxAsset`, `position`, `options?`): `Sound3D`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:394

#### Parameters

##### sfxAsset

`RuntimeSpawn_Common`

##### position

`Vector`

##### options?

[`Options3D`](../type-aliases/Options3D.md)

#### Returns

`Sound3D`

#### Overrides

`Sound.constructor`

## Properties

### \_amplitude

> `protected` **\_amplitude**: `number`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:55

#### Inherited from

`Sound._amplitude`

***

### \_disposed

> `protected` **\_disposed**: `boolean` = `false`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:49

#### Inherited from

`Sound._disposed`

***

### \_fadeTimer?

> `protected` `optional` **\_fadeTimer?**: `number`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:65

#### Inherited from

`Sound._fadeTimer`

***

### \_getPlayLog?

> `protected` `optional` **\_getPlayLog?**: (`duration?`) => `string`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:69

#### Parameters

##### duration?

`number`

#### Returns

`string`

#### Inherited from

`Sound._getPlayLog`

***

### \_play?

> `protected` `optional` **\_play?**: () => `void`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:67

#### Returns

`void`

#### Inherited from

`Sound._play`

***

### \_playing

> `protected` **\_playing**: `boolean` = `false`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:51

#### Inherited from

`Sound._playing`

***

### \_sfx

> `protected` **\_sfx**: `SFX`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:59

#### Inherited from

`Sound._sfx`

***

### \_sfxAsset

> `protected` **\_sfxAsset**: `RuntimeSpawn_Common`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:53

#### Inherited from

`Sound._sfxAsset`

***

### \_sfxId

> `protected` **\_sfxId**: `number`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:61

#### Inherited from

`Sound._sfxId`

***

### \_stopTimer?

> `protected` `optional` **\_stopTimer?**: `number`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:63

#### Inherited from

`Sound._stopTimer`

***

### \_target?

> `protected` `optional` **\_target?**: `Target`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:57

#### Inherited from

`Sound._target`

## Accessors

### amplitude

#### Get Signature

> **get** **amplitude**(): `number`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:122

##### Returns

`number`

#### Set Signature

> **set** **amplitude**(`amplitude`): `void`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:126

##### Parameters

###### amplitude

`number`

##### Returns

`void`

#### Inherited from

`Sound.amplitude`

***

### attenuationRange

#### Get Signature

> **get** **attenuationRange**(): `number`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:460

##### Returns

`number`

#### Set Signature

> **set** **attenuationRange**(`attenuationRange`): `void`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:464

##### Parameters

###### attenuationRange

`number`

##### Returns

`void`

***

### disposed

#### Get Signature

> **get** **disposed**(): `boolean`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:110

##### Returns

`boolean`

#### Inherited from

`Sound.disposed`

***

### location

#### Get Signature

> **get** **location**(): `Vector`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:456

##### Returns

`Vector`

***

### playing

#### Get Signature

> **get** **playing**(): `boolean`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:114

##### Returns

`boolean`

#### Inherited from

`Sound.playing`

***

### sfxAsset

#### Get Signature

> **get** **sfxAsset**(): `RuntimeSpawn_Common`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:118

##### Returns

`RuntimeSpawn_Common`

#### Inherited from

`Sound.sfxAsset`

***

### target

#### Get Signature

> **get** **target**(): `Target`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:139

##### Returns

`Target`

#### Inherited from

`Sound.target`

## Methods

### \_oneShot()

> `protected` **\_oneShot**(`options?`): () => `void`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:71

#### Parameters

##### options?

`OneShotOptions`

#### Returns

() => `void`

#### Inherited from

`Sound._oneShot`

***

### cancelFade()

> **cancelFade**(): `this`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:233

#### Returns

`this`

#### Inherited from

`Sound.cancelFade`

***

### cancelStop()

> **cancelStop**(): `this`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:224

#### Returns

`this`

#### Inherited from

`Sound.cancelStop`

***

### dispose()

> **dispose**(): `void`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:242

#### Returns

`void`

#### Inherited from

`Sound.dispose`

***

### fade()

> **fade**(`options?`): `this`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:181

#### Parameters

##### options?

[`FadeOptions`](../type-aliases/FadeOptions.md)

#### Returns

`this`

#### Inherited from

`Sound.fade`

***

### play()

> **play**(`duration?`): `this`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:143

#### Parameters

##### duration?

`number`

#### Returns

`this`

#### Inherited from

`Sound.play`

***

### setAmplitude()

> **setAmplitude**(`amplitude`): `this`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:134

#### Parameters

##### amplitude

`number`

#### Returns

`this`

#### Inherited from

`Sound.setAmplitude`

***

### setAttenuationRange()

> **setAttenuationRange**(`attenuationRange`): `this`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:472

#### Parameters

##### attenuationRange

`number`

#### Returns

`this`

***

### stop()

> **stop**(): `this`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:165

#### Returns

`this`

#### Inherited from

`Sound.stop`

***

### play()

> `static` **play**(`sfxAsset`, `position`, `options?`): () => `void`

Defined in: node\_modules/bf6-portal-utils/sounds/index.ts:384

#### Parameters

##### sfxAsset

`RuntimeSpawn_Common`

##### position

`Vector`

##### options?

[`OneShotOptions3D`](../type-aliases/OneShotOptions3D.md)

#### Returns

() => `void`
