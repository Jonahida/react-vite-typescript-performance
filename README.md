# FRONTEND | Practice - React, Vite and Typescript Performance Analysis

The aim of this project is to compare the performance of two web applications developed using different technology stacks for building a simple blog page. 

This repository contains two projects implementing the same simple blog page. The objective is to compare performance between a project using Vite, TypeScript, and React against one using only React.


# Project Descriptions

## 1. react-app | React
A blog project implemented with React only.


## 2. vite-test-app | React + TypeScript App with Vite
A blog project implemented with React, TypeScript, and Vite.


# Load Time Comparison Results


## 1. react-app

```bash
http://localhost:3000/ (REACT)
7 requests
1.75 MB / 378.83 kB transferred
Finish: 845 ms
DOMContentLoaded: 65 ms
load: 774 ms
```

## 2. vite-test-app

```bash
http://localhost:4173/  (REACT + VITE + TS - PRODUCTION)
8 requests
155.54 kB / 54.57 kB transferred
Finish: 555 ms
load: 424 ms
```

# Conclusion

Using Vite improved the load time significantly, reducing it from 774 ms to 424 ms, making it 350 ms faster.


# Note

When comparing both projects using development commands, the results were unexpectedly poor in performance. The details are as follows:

## Development Environment Comparison

### 1. react-app (Development)

```bash
http://localhost:3000/
9 requests
1.75 MB / 378.83 kB transferred
Finish: 901 ms
DOMContentLoaded: 51 ms
load: 838 ms
```

#### Production Commands for React:

```bash
npm run build
npm start
```

## 2. vite-test-app (Development)

```bash
http://localhost:5173/ 
78 requests
1.24 MB / 1.24 MB transferred
Finish: 5.63 min
DOMContentLoaded: 67 ms
load: 1.77 s
```

## Production Commands for Vite:


```bash
npm build
npm preview
```



