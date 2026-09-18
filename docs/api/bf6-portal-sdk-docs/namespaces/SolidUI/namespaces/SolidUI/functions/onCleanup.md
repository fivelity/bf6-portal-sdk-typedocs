[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [SolidUI](../../../README.md) / [SolidUI](../README.md) / onCleanup

# Function: onCleanup()

> **onCleanup**(`fn`): `void`

Defined in: node\_modules/bf6-portal-utils/solid-ui/index.ts:632

Registers a cleanup callback for the current reactive scope.
If called inside a component, it runs when the component is deleted.
If called inside an Effect, it runs before the Effect re-executes (or when it dies).

Use Case: Clearing intervals, removing event listeners, or specialized cleanup logic.

## Parameters

### fn

() => `void`

The cleanup function to register.

## Returns

`void`
