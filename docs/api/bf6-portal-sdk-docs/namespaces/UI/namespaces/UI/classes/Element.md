[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [UI](../../../README.md) / [UI](../README.md) / Element

# Abstract Class: Element

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:344

The base element class. All elements are nodes, and all nodes are UI widgets.

## Extends

- [`Node`](Node.md)

## Constructors

### Constructor

> **new Element**(`params`): `Element`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:363

The constructor for an element.

#### Parameters

##### params

[`FinalElementParams`](../type-aliases/FinalElementParams.md)

The parameters for the element.

#### Returns

`Element`

#### Overrides

[`Node`](Node.md).[`constructor`](Node.md#constructor)

## Properties

### \_anchor

> `protected` **\_anchor**: `UIAnchor`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:355

***

### \_bgAlpha

> `protected` **\_bgAlpha**: `number`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:352

***

### \_bgColor

> `protected` **\_bgColor**: `Vector`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:351

***

### \_bgFill

> `protected` **\_bgFill**: `UIBgFill`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:353

***

### \_deleted

> `protected` **\_deleted**: `boolean` = `false`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:357

***

### \_depth

> `protected` **\_depth**: `UIDepth`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:354

***

### \_height

> `protected` **\_height**: `number`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:350

***

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

### \_parent

> `protected` **\_parent**: [`Parent`](../type-aliases/Parent.md)

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:345

***

### \_receiver

> `protected` **\_receiver**: [`GlobalReceiver`](GlobalReceiver.md) \| [`TeamReceiver`](TeamReceiver.md) \| [`PlayerReceiver`](PlayerReceiver.md)

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:262

#### Inherited from

[`Node`](Node.md).[`_receiver`](Node.md#_receiver)

***

### \_uiInputModeWhenVisible

> `protected` **\_uiInputModeWhenVisible**: `boolean`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:356

***

### \_uiWidget

> `protected` **\_uiWidget**: `UIWidget`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:261

#### Inherited from

[`Node`](Node.md).[`_uiWidget`](Node.md#_uiwidget)

***

### \_visible

> `protected` **\_visible**: `boolean`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:346

***

### \_width

> `protected` **\_width**: `number`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:349

***

### \_x

> `protected` **\_x**: `number`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:347

***

### \_y

> `protected` **\_y**: `number`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:348

## Accessors

### anchor

#### Get Signature

> **get** **anchor**(): `UIAnchor`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:792

The anchor of the element.

##### Returns

`UIAnchor`

#### Set Signature

> **set** **anchor**(`anchor`): `void`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:800

Sets the anchor of the element.

##### Parameters

###### anchor

`UIAnchor`

The anchor to set.

##### Returns

`void`

***

### bgAlpha

#### Get Signature

> **get** **bgAlpha**(): `number`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:711

The background alpha of the element.

##### Returns

`number`

#### Set Signature

> **set** **bgAlpha**(`alpha`): `void`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:719

Sets the background alpha of the element.

##### Parameters

###### alpha

`number`

The background alpha to set.

##### Returns

`void`

***

### bgColor

#### Get Signature

> **get** **bgColor**(): `Vector`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:684

The background color of the element.

##### Returns

`Vector`

#### Set Signature

> **set** **bgColor**(`color`): `void`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:692

Sets the background color of the element.

##### Parameters

###### color

`Vector`

The background color to set.

##### Returns

`void`

***

### bgFill

#### Get Signature

> **get** **bgFill**(): `UIBgFill`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:738

The background fill of the element.

##### Returns

`UIBgFill`

#### Set Signature

> **set** **bgFill**(`fill`): `void`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:746

Sets the background fill of the element.

##### Parameters

###### fill

`UIBgFill`

The background fill to set.

##### Returns

`void`

***

### deleted

#### Get Signature

> **get** **deleted**(): `boolean`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:494

Whether the element is deleted. This is needed to block all setter operations after the element is deleted
but a reference to the element is still in memory and the experience code is still trying to use it.

##### Returns

`boolean`

***

### depth

#### Get Signature

> **get** **depth**(): `UIDepth`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:765

The depth of the element.

##### Returns

`UIDepth`

#### Set Signature

> **set** **depth**(`depth`): `void`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:773

Sets the depth of the element.

##### Parameters

###### depth

`UIDepth`

The depth to set.

##### Returns

`void`

***

### height

#### Get Signature

> **get** **height**(): `number`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:627

The height of the element.

##### Returns

`number`

#### Set Signature

> **set** **height**(`height`): `void`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:635

Sets the height of the element.

##### Parameters

###### height

`number`

The height to set.

##### Returns

`void`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:283

The name of the node. This is the name of the UIWidget.

##### Returns

`string`

#### Inherited from

[`Node`](Node.md).[`name`](Node.md#name)

***

### parent

#### Get Signature

> **get** **parent**(): [`Parent`](../type-aliases/Parent.md)

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:398

The parent of the element.

##### Returns

[`Parent`](../type-aliases/Parent.md)

#### Set Signature

> **set** **parent**(`parent`): `void`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:406

Sets the parent of the element.

##### Parameters

###### parent

[`Parent`](../type-aliases/Parent.md)

The parent to set.

##### Returns

`void`

***

### position

#### Get Signature

> **get** **position**(): [`Position`](../type-aliases/Position.md)

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:573

The position of the element.

##### Returns

[`Position`](../type-aliases/Position.md)

#### Set Signature

> **set** **position**(`params`): `void`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:581

Sets the position of the element.

##### Parameters

###### params

[`Position`](../type-aliases/Position.md)

The position to set.

##### Returns

`void`

***

### receiver

#### Get Signature

> **get** **receiver**(): [`GlobalReceiver`](GlobalReceiver.md) \| [`TeamReceiver`](TeamReceiver.md) \| [`PlayerReceiver`](PlayerReceiver.md)

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:297

The receiver of the node.

##### Returns

[`GlobalReceiver`](GlobalReceiver.md) \| [`TeamReceiver`](TeamReceiver.md) \| [`PlayerReceiver`](PlayerReceiver.md)

#### Inherited from

[`Node`](Node.md).[`receiver`](Node.md#receiver)

***

### size

#### Get Signature

> **get** **size**(): [`Size`](../type-aliases/Size.md)

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:654

The size of the element.

##### Returns

[`Size`](../type-aliases/Size.md)

#### Set Signature

> **set** **size**(`params`): `void`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:662

Sets the size of the element.

##### Parameters

###### params

[`Size`](../type-aliases/Size.md)

The size to set.

##### Returns

`void`

***

### uiInputModeWhenVisible

#### Get Signature

> **get** **uiInputModeWhenVisible**(): `boolean`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:819

Whether the element will request UI input mode to be enabled for its receiver when it becomes visible.

##### Returns

`boolean`

#### Set Signature

> **set** **uiInputModeWhenVisible**(`newValue`): `void`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:828

Sets whether the element will request UI input mode to be enabled for its receiver when it becomes visible.
Has an immediate effect on the receiver's input mode state.

##### Parameters

###### newValue

`boolean`

The new value.

##### Returns

`void`

***

### uiWidget

#### Get Signature

> **get** **uiWidget**(): `UIWidget`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:290

The UIWidget of the node.

##### Returns

`UIWidget`

#### Inherited from

[`Node`](Node.md).[`uiWidget`](Node.md#uiwidget)

***

### visible

#### Get Signature

> **get** **visible**(): `boolean`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:431

Whether the element is visible.

##### Returns

`boolean`

#### Set Signature

> **set** **visible**(`visible`): `void`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:439

Sets the visibility of the element.

##### Parameters

###### visible

`boolean`

The visibility to set.

##### Returns

`void`

***

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:600

The width of the element.

##### Returns

`number`

#### Set Signature

> **set** **width**(`width`): `void`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:608

Sets the width of the element.

##### Parameters

###### width

`number`

The width to set.

##### Returns

`void`

***

### x

#### Get Signature

> **get** **x**(): `number`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:519

The X position of the element.

##### Returns

`number`

#### Set Signature

> **set** **x**(`x`): `void`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:527

Sets the X position of the element.

##### Parameters

###### x

`number`

The X position to set.

##### Returns

`void`

***

### y

#### Get Signature

> **get** **y**(): `number`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:546

The Y position of the element.

##### Returns

`number`

#### Set Signature

> **set** **y**(`y`): `void`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:554

Sets the Y position of the element.

##### Parameters

###### y

`number`

The Y position to set.

##### Returns

`void`

## Methods

### \_isDeletedCheck()

> `protected` **\_isDeletedCheck**(): `boolean`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:386

#### Returns

`boolean`

***

### delete()

> **delete**(): `void`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:502

Deletes the element. Does not return `this` for chaining because the element is destroyed and no other calls
on it should be performed.

#### Returns

`void`

***

### hide()

> **hide**(): `this`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:476

Hides the element.

#### Returns

`this`

This element instance.

***

### setAnchor()

> **setAnchor**(`anchor`): `this`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:811

Sets the anchor of the element. Useful for chaining operations.

#### Parameters

##### anchor

`UIAnchor`

The anchor to set.

#### Returns

`this`

This element instance.

***

### setBgAlpha()

> **setBgAlpha**(`alpha`): `this`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:730

Sets the background alpha of the element. Useful for chaining operations.

#### Parameters

##### alpha

`number`

The background alpha to set.

#### Returns

`this`

This element instance.

***

### setBgColor()

> **setBgColor**(`color`): `this`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:703

Sets the background color of the element. Useful for chaining operations.

#### Parameters

##### color

`Vector`

The background color to set.

#### Returns

`this`

This element instance.

***

### setBgFill()

> **setBgFill**(`fill`): `this`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:757

Sets the background fill of the element. Useful for chaining operations.

#### Parameters

##### fill

`UIBgFill`

The background fill to set.

#### Returns

`this`

This element instance.

***

### setDepth()

> **setDepth**(`depth`): `this`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:784

Sets the depth of the element. Useful for chaining operations.

#### Parameters

##### depth

`UIDepth`

The depth to set.

#### Returns

`this`

This element instance.

***

### setHeight()

> **setHeight**(`height`): `this`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:646

Sets the height of the element. Useful for chaining operations.

#### Parameters

##### height

`number`

The height to set.

#### Returns

`this`

This element instance.

***

### setParent()

> **setParent**(`parent`): `this`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:423

Sets the parent of the element. Useful for chaining operations.

#### Parameters

##### parent

[`Parent`](../type-aliases/Parent.md)

The parent to set.

#### Returns

`this`

This element instance.

***

### setPosition()

> **setPosition**(`params`): `this`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:592

Sets the position of the element. Useful for chaining operations.

#### Parameters

##### params

[`Position`](../type-aliases/Position.md)

The position to set.

#### Returns

`this`

This element instance.

***

### setSize()

> **setSize**(`params`): `this`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:676

Sets the size of the element. Useful for chaining operations.

#### Parameters

##### params

[`Size`](../type-aliases/Size.md)

The size to set.

#### Returns

`this`

This element instance.

***

### setUiInputModeWhenVisible()

> **setUiInputModeWhenVisible**(`newValue`): `this`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:854

Sets whether the element will request UI input mode to be enabled for its receiver when it becomes visible.
Has an immediate effect on the receiver's input mode state.
Useful for chaining operations.

#### Parameters

##### newValue

`boolean`

The new value.

#### Returns

`this`

This element instance.

***

### setVisible()

> **setVisible**(`visible`): `this`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:458

Sets the visibility of the element. Useful for chaining operations.

#### Parameters

##### visible

`boolean`

The visibility to set.

#### Returns

`this`

This element instance.

***

### setWidth()

> **setWidth**(`width`): `this`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:619

Sets the width of the element. Useful for chaining operations.

#### Parameters

##### width

`number`

The width to set.

#### Returns

`this`

This element instance.

***

### setX()

> **setX**(`x`): `this`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:538

Sets the X position of the element. Useful for chaining operations.

#### Parameters

##### x

`number`

The X position to set.

#### Returns

`this`

This element instance.

***

### setY()

> **setY**(`y`): `this`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:565

Sets the Y position of the element. Useful for chaining operations.

#### Parameters

##### y

`number`

The Y position to set.

#### Returns

`this`

This element instance.

***

### show()

> **show**(): `this`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:467

Shows the element.

#### Returns

`this`

This element instance.

***

### toggle()

> **toggle**(): `this`

Defined in: node\_modules/bf6-portal-utils/ui/index.ts:485

Toggles the visibility of the element.

#### Returns

`this`

This element instance.
