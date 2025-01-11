# 508 Compliance

We use the `eslint-plugin-jsx-a11y` to ensure 508 compliance in our projects. To use this plugin, you need to install ESLint and configure it to include the `jsx-a11y` plugin. Below is an example configuration:

[Example ESLint Configuration](https://github.com/jonkiky/github-setup-recommendation/blob/main/.eslintrc.js)

Once the `eslint-plugin-jsx-a11y` is added, we can use a GitHub Action to trigger it during the pull request (PR) process.

Below is an example GitHub Action workflow:

[Example GitHub Action Workflow](https://github.com/jonkiky/INS-WebPortal/blob/main/.github/workflows/main.yml)

## How the Plugin Works

* The `eslint-plugin-jsx-a11y` plugin analyzes your JSX code for accessibility issues.
* It enforces various accessibility rules to ensure compliance with the 508 standards.
* When integrated with GitHub Actions, the linter runs automatically during the PR process.
* Any accessibility issues detected by the plugin will be highlighted, allowing developers to address them before merging code into the main branch.
