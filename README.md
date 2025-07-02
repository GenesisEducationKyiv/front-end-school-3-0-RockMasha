# Music Player

Audio player built on React + TypeScript + Vite.

## Setup and launch instructions

- clone the repository or download the source code.
- load dependencies: `npm i`
- create .env (more details in the section "Filling .env")
- start the local development server `npm run dev`
- you can view live page by link http://localhost:8000

## Filling .env

in .env you need to specify the api link

```bash
VITE_API_BASE_URL=SOME_URL
```

## Run tests

you can run tests by next commands

- `npm run test` – run all tests
- `npm run test:vitest` – run vitest unit and integration tests
- `npm run test:e2e` – run E2E tests
- `npm run test:ct` – run playwright component tests
