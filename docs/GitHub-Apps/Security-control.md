# Code Security Control


##  Use Snyk for Code Security Control

**Snyk** is a developer-friendly security platform that identifies and fixes vulnerabilities in code, open-source dependencies, containers, and infrastructure as code, seamlessly integrating into CI/CD workflows and development tools.

---

## Step 1: Sign Up for Snyk

1. Visit [Snyk](https://snyk.io/) and sign up using your **GitHub account**.
2. Authorize Snyk to access your GitHub repositories.

---

## Step 2: Add a GitHub Repository to Snyk

1. After logging into Snyk, go to the **Dashboard**.
2. Click **Add Project**.
3. Select your GitHub repository from the list of available repositories.
4. Grant Snyk access to the repository by installing the Snyk GitHub App if prompted.

---

## Step 3: Analyze Your Repository

1. Once added, Snyk will automatically scan your repository for vulnerabilities in:
   - Dependencies (e.g., `package.json`, `requirements.txt`, etc.).
   - Docker containers (if applicable).
   - Infrastructure as code (IaC) files (e.g., `Terraform`, `Kubernetes`).

2. View detailed vulnerability reports in the Snyk **Dashboard**.

---

## Step 4: Fix Vulnerabilities

### Automatic Fix PRs:

- Snyk can automatically create pull requests (PRs) to fix vulnerabilities in your dependencies.
- To enable this, go to the repository's Snyk project settings and enable **Fix PRs**.

### Manual Fix:

- For vulnerabilities without automatic fixes, follow the suggested remediation steps in the Snyk **Dashboard**.

---

## Step 5: Update Test & Automated Pull Request Frequency
1. Log in to [Snyk](https://snyk.io/).
2. Navigate to the **Dashboard** and select the project for which you want to update settings.
3. Click on the **Settings** tab in the project's menu.
. Locate the **Testing frequency** section.
4. Choose the frequency at which Snyk tests your dependencies for vulnerabilities:
   - **Daily**: Tests will run every day.
   - **Weekly**: Tests will run once a week.
   - **Monthly**: Tests will run once a month.
5. Save your changes to apply the new frequency.

---

## Step 5: Monitor Vulnerabilities Over Time

1. Snyk continuously monitors your repositories for new vulnerabilities.
2. Notifications and alerts will appear in your email or GitHub issues if new vulnerabilities are discovered.

---

## Step 7: Customize Settings

### Policy Management:

- Define security thresholds for blocking builds or creating PRs.

### Ignore Rules:

- Temporarily ignore specific vulnerabilities if necessary, with a defined expiration period.

---

## Notes

- Snyk supports multiple languages and environments, including **JavaScript**, **Python**, **Java**, **Docker**, and **Terraform**.
- Public repositories are supported for free, while private repositories require a subscription.
- For more details, visit the [Snyk Documentation](https://docs.snyk.io/).

---

Using Snyk with GitHub ensures your code is secure and free from known vulnerabilities throughout the development lifecycle.
