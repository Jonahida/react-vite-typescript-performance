# React + TypeScript + Vite

This application harnesses the power of React v18.3.1, TypeScript v5.2.2, and Vite v5.2.0.

Combining React with TypeScript and Vite offers a robust approach to constructing scalable and maintainable web applications. TypeScript introduces static typing to JavaScript, enhancing code reliability and minimizing errors. React, a widely-used library for crafting user interfaces, seamlessly integrates with TypeScript, enabling the creation of resilient applications. Vite, a swift and lightweight build tool, further elevates the development experience by furnishing rapid build times and a simplified configuration. Collectively, these technologies streamline the development process, facilitating the creation of efficient, error-free code and delivering high-performance web applications.

After initializing the project, modifications were made to App.tsx and App.css. Additionally, a blog.json file was created to simulate API requests. The src/components/Blog.tsx component was introduced to showcase information such as title, author, cover, and id, which were subsequently integrated into App.tsx.

This setup establishes a foundational structure for constructing React applications with TypeScript and Vite.


# Project Setup

This project was initialized by following the instructions outlined in the [LogRocket blog](https://blog.logrocket.com/build-react-typescript-app-vite/).

## Commands Used to Create the Project:

```bash
npm create vite@latest
```

Followed by the prompts:

```bash
✔ Project name: … vite-ts-app
✔ Select a framework: › React
✔ Select a variant: › TypeScript
```

To start the project:

```bash
cd vite-ts-app
npm install
```
## Run - (Development)
```bash
npm run dev 
```

## Run - (Production)
```bash
npm run preview

> vite-ts-app@0.0.0 preview
> vite preview

  ➜  Local:   http://localhost:4173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

```


# React + TypeScript + Vite (Default Readme)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
