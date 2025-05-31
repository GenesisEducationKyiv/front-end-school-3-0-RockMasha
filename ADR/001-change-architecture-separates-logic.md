# ADR 001: transition to a new architecture that will separate logic

## Context

The current architecture (if it can even be called that) has many implicit connections. Business logic is mixed with UI, resulting in a big mess. Folder and file naming is inconsistent and misleading. The logic of many components is scattered throughout the project, which makes fixing bugs more difficult.

## Decision

It was decided to use a hybrid of modular architecture with FSD approaches.
[Modular Architecture – Figma Board](https://www.figma.com/board/6AzSNO2163kj5YYHm2w5sw/Player_update?node-id=0-1&t=VyVJ4I1cBvWoGu1E-1)

## Rationale

The combination of modular structure with FSD was chosen because it separates logic into distinct blocks and prevents them from being mixed. FSD alone provides good separation of concerns, but it’s not as convenient for a small project. Therefore, the hybrid approach is the optimal solution. The modular part is represented by the division into business domain areas (such as modules, redux/context, api).
The FSD approach is reflected in the layered structure: features, shared, UI, page.

- The `features` folder stores complete parts of a page, each with its own logic that does not overlap with other modules.
- The `components` folder is divided into:
  - `modules` — logic-heavy components that are part of features,
  - `ui` — small, purely presentational components without logic,
  - `layout` — layout templates and structural elements.
- The `api` directory holds basic Axios configuration and API requests organized by category.
- The `shared` folder contains reusable hooks, constants, and helpers 
- Depending on the decision to use context or Redux, the project will include either a `context` or `redux` folder to manage shared state across components.


## Future Consequences

**Positive consequences:**

- Clearly defined modules will emerge.
- The code will become more readable and scalable.
- Logic will be easier to extract into separate units.

**Negative consequences:**

- The `providers/redux` folder, which will store all global state, may become cluttered due to the accumulation of many states.
- the folder `api` may become cluttered if there are more requests

## Status `Accepted`

## Consequences After Execution

The decision on the introduction has not yet been made.
