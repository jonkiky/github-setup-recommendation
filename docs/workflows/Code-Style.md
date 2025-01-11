# Code Styling (ESlint)

## Maintaining Consistent Code Styling with ESLint and GitHub Actions

## Problem to Solve

When working on a shared codebase with multiple developers, maintaining consistent code formatting and styling can be challenging. Inconsistent styling can cause inefficiencies, merge conflicts, and reduced code readability.

---

## Solution Overview

To ensure consistent styling across your codebase, you can use **ESLint** to enforce coding standards and integrate it with **Prettier** for detailed formatting rules. By automating code checks using **GitHub Actions**, you can enforce these standards at the pull request (PR) level, ensuring contributions are compliant before merging.

---

## How to Use ESLint with GitHub Actions

### 1. Configure ESLint and Prettier
- Follow the latest instructions in the [Getting Started with ESLint guide](https://eslint.org/docs/latest/getting-started) to set up ESLint in your project.
- Optionally, integrate **Prettier** with ESLint to handle formatting in addition to linting.

---

### 2. Add a Linting Script to Your Project
Add a script to your `package.json` file to define the linting process:

```json
"lint:ci": "eslint . --ignore-path .gitignore --max-warnings 0"

```

---

This script enforces strict linting rules and allows no warnings. Test it locally by running:

```bash

npm run lint:ci
```

### 3. Create a GitHub Action for Linting

Automate the linting process by creating a GitHub Action. Add a workflow file at .github/workflows/lint.yml with the following content:

```yaml
name: Lint Codebase

on:
  pull_request:
    branches:
      - main

jobs:
  lint:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'

      - name: Install dependencies
        run: npm install

      - name: Run ESLint
        run: npm run lint:ci

```

---

###  4. Test the GitHub Action
Open a new pull request to test the linting workflow.
GitHub Actions will run the linting script and block merging if any linting errors are detected.

