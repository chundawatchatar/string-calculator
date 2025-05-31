# String Calculator

A simple String Calculator built with Node.js and TypeScript using Test-Driven Development (TDD). Includes unit tests with Vitest.

---

## Features

- Add numbers in a string format
- Supports:
  - Empty string
  - Single number
  - Multiple comma-separated numbers
  - Newline (`\n`) as a delimiter
  - Custom delimiters (e.g., `//;\n1;2`)
  - Throws an error for negative numbers (lists them all)

---

## Tech Stack

- Node.js
- TypeScript
- [Vitest](https://vitest.dev/) (unit testing)
- ESLint (with TypeScript support)
- pnpm (as package manager)

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/chundawatchatar/string-calculator.git
cd string-calculator
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Run tests
```bash
pnpm test
```

