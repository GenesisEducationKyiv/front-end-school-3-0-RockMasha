# ADR N: Using a Global Redux Store Instead of Contexts

## Context

There were many architecture examples using a store (Redux), which led to considering its implementation.

## Decision

Instead of using contexts created via `createContext`, we will use a global store implemented with Redux Toolkit.

## Rationale

This centralizes logic, allows the use of Redux DevTools, and enables interaction between distant components—similarly to context.

## Future Consequences

**Positive consequences:**
- We will be able to track events using Redux DevTools.

**Negative consequences:**
- Global state might not be necessary since the player is small.
- This could unnecessarily increase the amount of logic.

## Status `Proposed`

## Consequences After Execution

The decision to implement Redux has not yet been made.
