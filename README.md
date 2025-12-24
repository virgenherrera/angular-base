# Angular Base

Lean Angular 21 starter tuned for fast feedback, predictable builds, and editor-friendly defaults.

## Navigation

- [Requirements](#requirements)
- [Quick start](#quick-start)
- [Developer workflow](#developer-workflow)
- [Angular docs](#angular-docs)

## Requirements

[(back to menu)](#navigation)

- Check the `engines` field in `package.json` for the source of truth on supported Node and pnpm versions.

## Quick start

[(back to menu)](#navigation)

1. Install dependencies: `pnpm install`.
2. Start the dev server: `pnpm start`.
3. Open `http://localhost:4200/`. Hot reload is on by default.

## Developer workflow

[(back to menu)](#navigation)

- **Mini CI locally**: `pnpm test` runs cleanup, security audit, ESLint, Prettier check, unit tests, and a production build in one go.
- **Focused checks**: `pnpm run test:static` (security + lint + format), `pnpm run test:unit` (Angular tests), `pnpm run build:app` (production build), `pnpm run bumpDependencies` (dependency updates preview), `pnpm run cleanup` (clear `dist/` and `coverage/`).
- **Git hooks**: Husky runs lint-staged and the full `pnpm test` pipeline before commits. Override only with `--no-verify` when necessary.
- **Editor-ready**: VS Code launch configs start the dev server before debugging and stop it when you end the session (`Angular: Chrome/Edge/Firefox`).
- **Formatting & linting**: Prettier + ESLint configured for strict TypeScript; lint-staged applies fixes to staged files.

## Angular docs

[(back to menu)](#navigation)

Full CLI reference: [Angular CLI docs](https://angular.dev/tools/cli).
