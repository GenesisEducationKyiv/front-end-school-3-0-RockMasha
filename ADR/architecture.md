# ADR N: Transition to Modular Architecture

## Context

The current architecture (if it can even be called that) has many implicit connections. Business logic is mixed with UI, resulting in a big mess. Folder and file naming is inconsistent and misleading. The logic of many components is scattered throughout the project, which makes fixing bugs more difficult.

## Decision

Decided to adopt a modular architecture with slightly modified parts.  
It can be viewed at the following link:  
[Modular Architecture – Figma Board](https://www.figma.com/board/6AzSNO2163kj5YYHm2w5sw/Player_update?node-id=0-1&t=VyVJ4I1cBvWoGu1E-1)

## Rationale

A modular structure was chosen because it separates logic into distinct parts and prevents them from being mixed. At the same time, it doesn't overly complicate the structure for a small project like this, as something like FSD (Feature-Sliced Design) would.

- The `models` directory stores complete page sections with their own logic that do not overlap with other modules.
- The `components` folder contains parts of those models that also include their own logic.
- The `ui` directory holds small, purely presentational components with no logic.
- The `services` folder includes basic Axios configuration and reusable API requests.
- The `shared` directory stores hooks, constants, and other utility functions used across the project.

Depending on the decision to keep or replace `createContext` providers with Redux, the project will include either a `providers` or `redux` folder. This folder will manage shared state for components.

## Future Consequences

**Positive consequences:**

- Clearly defined modules will emerge.
- The code will become more readable and scalable.
- Logic will be easier to extract into separate units.

**Negative consequences:**

- The `providers/redux` folder, which will store all global state, may become cluttered due to the accumulation of many states.

## Status `proposed`

## Consequences After Execution

The decision on the introduction has not yet been made.
