# Getting Started

## Mission brief

The Portal SDK provides typed helpers for building custom Battlefield experiences. Start with a small ruleset, validate it in Portal, then grow the system around clear gameplay states.

## First deployment

1. Install the SDK package in the project that contains your Portal rules.
2. Import the helper functions you need from the SDK entry point.
3. Build a focused test mode and verify it in a private Portal session.
4. Move stable helpers into shared modules so your rules stay easy to audit.

```ts
import { And, IfThenElse, WaitUntil } from 'bf6-portal-sdk'

const isReady = And(playersReady, objectiveActive)
const message = IfThenElse(isReady, () => 'GO', () => 'HOLD')
await WaitUntil(10, () => objectiveActive)
```

## Operating principles

- Keep gameplay checks small and named.
- Prefer condition state helpers for one-shot transitions.
- Treat UI as a separate layer from game rules.
- Test both the active and inactive paths of every condition.

Continue to [Installation & Setup](/guide/installation) when your project is ready for the full toolchain.
