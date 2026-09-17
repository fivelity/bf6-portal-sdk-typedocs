# Usage Examples

## Edge-triggered conditions

`ConditionState` returns `true` only when a condition changes from inactive to active. This is useful for awarding a single event when an objective becomes ready.

```ts
import { getGlobalCondition } from 'bf6-portal-sdk'

const objectiveReady = getGlobalCondition(0)

if (objectiveReady.update(objectiveIsReady)) {
  announceObjective()
}
```

## Working with arrays

Convert a Portal array to a normal JavaScript array when you need familiar iteration, then use `FilteredArray` when the result must return to the Portal runtime.

```ts
import { ConvertArray, FilteredArray } from 'bf6-portal-sdk'

const nearby = FilteredArray(allPlayers, (player) => isNearby(player))
const names = ConvertArray(nearby).map((player) => getPlayerName(player))
```

## Building UI from data

`ParseUI` accepts a JSON-like tree for containers, text, images, and buttons. Use stable names and keep the tree close to the screen or feature that owns it.

```ts
ParseUI({
  type: 'Container',
  name: 'objective-panel',
  children: [
    { type: 'Text', name: 'objective-title', textLabel: 'CAPTURE POINT' },
    { type: 'Button', name: 'objective-action', textLabel: 'DEPLOY' }
  ]
})
```
