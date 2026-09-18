[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [UI](../../../README.md) / [UI](../README.md) / Root

# Class: Root

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:305

The root node. This is the root of the UI tree for the entire server.

## Extends

- [`Node`](Node.md)

## Implements

- [`Parent`](../type-aliases/Parent.md)

## Properties

### \_logging

> `protected` `readonly` **\_logging**: [`Logging`](../../../../../../classes/Logging.md) = `logging`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:259

#### Inherited from

[`Node`](Node.md).[`_logging`](Node.md#_logging)

***

### \_name

> `protected` **\_name**: `string`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:260

#### Inherited from

[`Node`](Node.md).[`_name`](Node.md#_name)

***

### \_receiver

> `protected` **\_receiver**: [`GlobalReceiver`](GlobalReceiver.md) \| [`TeamReceiver`](TeamReceiver.md) \| [`PlayerReceiver`](PlayerReceiver.md)

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:262

#### Inherited from

[`Node`](Node.md).[`_receiver`](Node.md#_receiver)

***

### \_uiWidget

> `protected` **\_uiWidget**: `UIWidget`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:261

#### Inherited from

[`Node`](Node.md).[`_uiWidget`](Node.md#_uiwidget)

***

### instance

> `readonly` `static` **instance**: `Root`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:309

The singleton instance of the root node.

## Accessors

### children

#### Get Signature

> **get** **children**(): [`Element`](Element.md)[]

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:320

The children of the root node.

##### Returns

[`Element`](Element.md)[]

#### Implementation of

`Parent.children`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:283

The name of the node. This is the name of the UIWidget.

##### Returns

`string`

#### Implementation of

`Parent.name`

#### Inherited from

[`Node`](Node.md).[`name`](Node.md#name)

***

### receiver

#### Get Signature

> **get** **receiver**(): [`GlobalReceiver`](GlobalReceiver.md) \| [`TeamReceiver`](TeamReceiver.md) \| [`PlayerReceiver`](PlayerReceiver.md)

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:297

The receiver of the node.

##### Returns

[`GlobalReceiver`](GlobalReceiver.md) \| [`TeamReceiver`](TeamReceiver.md) \| [`PlayerReceiver`](PlayerReceiver.md)

#### Implementation of

`Parent.receiver`

#### Inherited from

[`Node`](Node.md).[`receiver`](Node.md#receiver)

***

### uiWidget

#### Get Signature

> **get** **uiWidget**(): `UIWidget`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:290

The UIWidget of the node.

##### Returns

`UIWidget`

#### Implementation of

`Parent.uiWidget`

#### Inherited from

[`Node`](Node.md).[`uiWidget`](Node.md#uiwidget)

## Methods

### attachChild()

> **attachChild**(`child`): `void`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:328

Attaches a child to the root node.

#### Parameters

##### child

[`Element`](Element.md)

The child to attach.

#### Returns

`void`

#### Implementation of

`Parent.attachChild`

***

### detachChild()

> **detachChild**(`child`): `void`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:336

Detaches a child from the root node.

#### Parameters

##### child

[`Element`](Element.md)

The child to detach.

#### Returns

`void`

#### Implementation of

`Parent.detachChild`
