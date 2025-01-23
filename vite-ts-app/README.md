# React + TypeScript + Vite

This application harnesses the power of React v18.3.1, TypeScript v5.2.2, and Vite v5.2.0.

Combining React with TypeScript and Vite offers a robust approach to constructing scalable and maintainable web applications. TypeScript introduces static typing to JavaScript, enhancing code reliability and minimizing errors. React, a widely-used library for crafting user interfaces, seamlessly integrates with TypeScript, enabling the creation of resilient applications. Vite, a swift and lightweight build tool, further elevates the development experience by furnishing rapid build times and a simplified configuration. Collectively, these technologies streamline the development process, facilitating the creation of efficient, error-free code and delivering high-performance web applications.

After initializing the project, modifications were made to App.tsx and App.css. Additionally, a blog.json file was created to simulate API requests. The src/components/Blog.tsx component was introduced to showcase information such as title, author, cover, and id, which were subsequently integrated into App.tsx.

This setup establishes a foundational structure for constructing React applications with TypeScript and Vite.


# Project Setup

This project was initialized by following the instructions outlined in the [LogRocket blog](https://blog.logrocket.com/build-react-typescript-app-vite/).

## Commands Used to start the project:

```bash
cd vite-ts-app
npm install
```

## Run - (Development)

```bash
npm run dev
```
**Output**

```bash
> vite-ts-app@0.0.0 dev
> vite


  VITE v5.2.12  ready in 300 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

## Run - (Production)

```bash
$ npm run build
```

**Output**

```bash
> vite-ts-app@0.0.0 build
> tsc && vite build

vite v5.2.12 building for production...
✓ 34 modules transformed.
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/index-DuwzS9E0.css    1.39 kB │ gzip:  0.65 kB
dist/assets/index-CPkWm-u8.js   143.41 kB │ gzip: 46.12 kB
✓ built in 1.03s
```

```bash
$ npm run preview
```

**Output**
```bash
> vite-ts-app@0.0.0 preview
> vite preview

  ➜  Local:   http://localhost:4173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

```