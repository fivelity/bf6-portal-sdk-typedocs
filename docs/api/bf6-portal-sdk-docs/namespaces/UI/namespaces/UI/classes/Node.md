[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [UI](../../../README.md) / [UI](../README.md) / Node

# Abstract Class: Node

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:258

The base node class. All elements are nodes, adn all nodes are UI widgets.

## Extended by

- [`Root`](Root.md)
- [`Element`](Element.md)

## Constructors

### Constructor

> **new Node**(`name`, `uiWidget`, `receiver`): `Node`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:270

The constructor for a node.

#### Parameters

##### name

`string`

The name of the node.

##### uiWidget

`UIWidget`

The UI widget of the node.

##### receiver

[`GlobalReceiver`](GlobalReceiver.md) \| [`TeamReceiver`](TeamReceiver.md) \| [`PlayerReceiver`](PlayerReceiver.md)

The receiver of the node.

#### Returns

`Node`

## Properties

### \_logging

> `protected` `readonly` **\_logging**: [`Logging`](../../../../../../classes/Logging.md) = `logging`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:259

***

### \_name

> `protected` **\_name**: `string`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:260

***

### \_receiver

> `protected` **\_receiver**: [`GlobalReceiver`](GlobalReceiver.md) \| [`TeamReceiver`](TeamReceiver.md) \| [`PlayerReceiver`](PlayerReceiver.md)

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:262

***

### \_uiWidget

> `protected` **\_uiWidget**: `UIWidget`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:261

## Accessors

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:283

The name of the node. This is the name of the UIWidget.

##### Returns

`string`

***

### receiver

#### Get Signature

> **get** **receiver**(): [`GlobalReceiver`](GlobalReceiver.md) \| [`TeamReceiver`](TeamReceiver.md) \| [`PlayerReceiver`](PlayerReceiver.md)

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:297

The receiver of the node.

##### Returns

[`GlobalReceiver`](GlobalReceiver.md) \| [`TeamReceiver`](TeamReceiver.md) \| [`PlayerReceiver`](PlayerReceiver.md)

***

### uiWidget

#### Get Signature

> **get** **uiWidget**(): `UIWidget`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:290

The UIWidget of the node.

##### Returns

`UIWidget`
