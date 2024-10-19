# Vite React Starter

This is my basic setup for starting a new React project using Vite. It uses TypeScript and SCSS, and included a few customizations.

## How This Was Created

- Uses Node 20
- Command: `yarn create vite`
  - Choices:
    - React
    - TypeScript + SWC

## Additional Packages

```
yarn add --dev @types/node
yarn add --dev sass
```

## Edits to tsconfg

- add types, and path to tsconfig.app.json (compilerOptions)

```
    "types": ["vite/client"],
    "paths": {
      "src/*": ["./src/*"]
    },
```

## Edits to vite.config.ts

- Add: `import { resolve } from "path";`
- Add to vite config in the defineConfig object:

```
  resolve: {
    alias: {
      src: resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
      },
    },
  },
```

## Additional Customizations

- Remove src/vite-env.d.ts; it's not needed when using `"types": ["vite/client"]`
- Rename main.tsx to index.tsx
- Load LayoutApp from src/layout/app.tsx
- Change index.css to src/style/index.scss
- Add .prettierignore: dist
- Add to .gitignore: `tsconfig.*.tsbuildinfo`

# Original Readme Below

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
