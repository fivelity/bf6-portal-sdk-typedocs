[**bf6-portal-sdk-docs**](../../../../../../README.md)

***

[bf6-portal-sdk-docs](../../../../../../README.md) / [FFASpawnPoints](../../../README.md) / [FFASpawnPoints](../README.md) / InitializeOptions

# Type Alias: InitializeOptions

> **InitializeOptions** = `object`

Defined in: node\_modules/bf6-portal-utils/ffa-spawn-points/index.ts:51

Optional overrides for spawn selection thresholds, delays, and candidate limits when calling `initialize()`:

## Properties

### initialPromptDelay?

> `optional` **initialPromptDelay?**: `number`

Defined in: node\_modules/bf6-portal-utils/ffa-spawn-points/index.ts:71

The initial delay before prompting the player to spawn (in seconds).

***

### maximumInterestingDistance?

> `optional` **maximumInterestingDistance?**: `number`

Defined in: node\_modules/bf6-portal-utils/ffa-spawn-points/index.ts:63

The maximum distance a spawn point must be to another player to be considered acceptable.

***

### maxSpawnCandidates?

> `optional` **maxSpawnCandidates?**: `number`

Defined in: node\_modules/bf6-portal-utils/ffa-spawn-points/index.ts:55

The maximum number of random spawns to consider when trying to find a spawn point for a player.

***

### minimumSafeDistance?

> `optional` **minimumSafeDistance?**: `number`

Defined in: node\_modules/bf6-portal-utils/ffa-spawn-points/index.ts:59

The minimum distance a spawn point must be to another player to be considered safe.

***

### promptDelay?

> `optional` **promptDelay?**: `number`

Defined in: node\_modules/bf6-portal-utils/ffa-spawn-points/index.ts:75

The delay between prompts (in seconds).

***

### queueProcessingDelay?

> `optional` **queueProcessingDelay?**: `number`

Defined in: node\_modules/bf6-portal-utils/ffa-spawn-points/index.ts:79

The delay between processing the spawn queue (in seconds).

***

### safeOverInterestingFallbackFactor?

> `optional` **safeOverInterestingFallbackFactor?**: `number`

Defined in: node\_modules/bf6-portal-utils/ffa-spawn-points/index.ts:67

The amount to scale the midpoint between the `minimumSafeDistance` and `maximumInterestingDistance` to evaluate a fallback spawn.
