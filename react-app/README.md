# React

This application was built using React v18.3.1.

After setting up the initial project, the files App.js and App.css were customized. Additionally, to simulate API requests, a "blog.json" file was created within the "src/" folder (as React doesn't allow reading files outside the project root).

The component src/components/Blog.js was developed to showcase information such as title, author, cover, and id, which was later integrated into App.js.

This setup establishes a foundational structure for constructing a React application.


# Project Setup
## Run the project:

```bash
cd my-app
npm install
```

## Run
## Run - (Development)
```bash
$ npm start
```

**Output**

```bash
Compiled successfully!

You can now view my-app in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://xxx.xxx.x.xxx:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```

## Run - (Production)
```bash
$ npm run build
$ serve -s build
```
**Output**
```bash

   ┌──────────────────────────────────────────┐
   │                                          │
   │   Serving!                               │
   │                                          │
   │   - Local:    http://localhost:3000      │
   │   - Network:  http://xxx.xxx.x.xx:3000   │
   │                                          │
   │   Copied local address to clipboard!     │
   │                                          │
   └──────────────────────────────────────────┘

 HTTP  mm/dd/YYYY HH:MM:SS PM xxx.xxx.x.xx GET /ws
 HTTP  mm/dd/YYYY HH:MM:SS PM xxx.xxx.x.xx Returned 200 in xx ms
```
