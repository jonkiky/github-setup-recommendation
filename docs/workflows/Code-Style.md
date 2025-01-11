# Code Styling (ESlint)




## Maintaining Consistent Code Styling with ESLint

When working on a shared codebase with multiple developers, maintaining consistent code formatting and styling can be challenging. Inconsistent styling can cause inefficiencies, merge conflicts, and reduced code readability.

---

## Solution

To ensure consistent styling across your codebase, you can use **ESLint** to enforce coding standards and integrate it with **Prettier** for detailed formatting rules. By automating code checks using **GitHub Actions**, you can enforce these standards at the pull request (PR) level, ensuring contributions are compliant before merging.

---

## How to Use ESLint with GitHub Actions

### 1. Configure ESLint and Prettier

#### Step 1: Install ESLint

Install ESLint as a development dependency:

```bash
npm install eslint --save-dev
```


#### Step 2: Initialize ESLint

Set up an ESLint configuration file by running:


```bash
npx eslint --init

```

You will be prompted to answer several questions:

The purpose of ESLint (e.g., check syntax, find problems, enforce code style).
Your module system preference (CommonJS or ES Modules).
Your framework (e.g., React, Vue, etc.).
Whether you're using TypeScript.
Your preferred configuration format (JavaScript, JSON, or YAML).
After completing the setup, an .eslintrc file will be created in your project.

####  Step 3: Install Prettier
Install Prettier as a development dependency:

```bash
npm install prettier --save-dev
```

####  Step 4: Integrate ESLint and Prettier
Install additional plugins to integrate ESLint with Prettier:

```bash
npm install eslint-config-prettier eslint-plugin-prettier --save-dev
```

- eslint-config-prettier: Disables ESLint rules that conflict with Prettier.
- eslint-plugin-prettier: Allows Prettier to run as an ESLint rule, reporting formatting issues directly in ESLint.


####  Step 5: Update ESLint Configuration

Modify your .eslintrc file to include Prettier integration. Below is an example configuration:

``` json
{
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ]
  }
}
``` 
This configuration:

Extends ESLint's recommended rules.
Enables Prettier as a plugin.
Treats Prettier formatting issues as ESLint errors.
Step 6: (Optional) Add a Prettier Configuration File
To customize Prettier's formatting rules, create a .prettierrc file. Here's an example:

```  json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
``` 


####  Step 7: Test the Setup
Run ESLint to verify your configuration:

```  bash
npx eslint .
```  

To automatically fix formatting issues, use:

```  bash
npx eslint . --fix
```  

By following these steps, you'll have a fully configured ESLint and Prettier setup, ensuring consistent code formatting and styling across your project.


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

