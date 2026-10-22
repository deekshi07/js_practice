# Modern JavaScript (ES6+) Reference & Practice Guide ⚡

> Clean, structured codebase covering core JavaScript foundations, memory allocation (Stack vs. Heap), prototypical inheritance, higher-order functions, and asynchronous concurrency patterns.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![JavaScript](https://img.shields.io/badge/ECMAScript-ES6%2B-f7df1e?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Runtime-Node.js%2018%2B-339933?logo=node.js)](https://nodejs.org/)

---

## 📚 Curriculum Structure

```
js_practice/
├── 01_basics/
│   ├── 02_variables.js        # let vs const vs var & Temporal Dead Zone
│   ├── 03_dataTypes.js        # Primitive types (Symbol, BigInt, String, Number, Boolean)
│   ├── 04_typeConversion.js   # Implicit coercion vs explicit casting
│   ├── 05_comparison.js       # Strict equality (===) vs abstract equality (==)
│   ├── 06_memory.js           # Stack (primitive by value) vs Heap (reference)
│   ├── 07_strings.js          # Template literals, slicing, and string methods
│   ├── 08_numAndMath.js       # Number formatting, precision, and Math helpers
│   └── 09_dates.js            # UTC, timestamps, and Intl.DateTimeFormat
├── 02_basics/
│   ├── 01_arrays.js           # Push, pop, slice, splice, spread operator
│   ├── 02_arrays.js           # Flat, from, of, multi-dimensional array manipulation
│   └── 03_objects.js          # Object literals, destructuring, symbols as keys
├── 03_basics/
│   ├── 01_functions.js        # Rest operators, parameters, and return patterns
│   └── 02_scopes_and_arrow.js # Lexical scope, closures, this keyword, IIFE
├── 05_iterations/
│   └── higher_order_loops.js  # filter(), map(), and reduce() pipelines
└── 06_async/
    └── promises_and_fetch.js  # Promises, microtask queue, async/await, and Fetch API
```

---

## 🧠 Key Architectural Concepts

### 1. Memory Allocation: Stack vs. Heap
- **Stack:** Primitive data types (`number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`) are stored on the execution stack. Assignments copy values directly.
- **Heap:** Reference types (`Object`, `Array`, `Function`) are allocated in heap memory. Variables hold a memory reference pointer on the stack pointing to the heap.

### 2. Modern Concurrency: Asynchronous Event Loop
```
Call Stack ──> Web APIs (Fetch / Timer) ──> Microtask Queue (Promises) ──> Event Loop
                                        ──> Macrotask Queue (setTimeout)
```

---

## 🚀 Running Code Snippets

All files can be directly executed in Node.js without any build steps:

```bash
# Clone the repository
git clone https://github.com/deekshi07/js_practice.git
cd js_practice

# Run any module
node 01_basics/06_memory.js
node 03_basics/02_scopes_and_arrow.js
node 05_iterations/higher_order_loops.js
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
