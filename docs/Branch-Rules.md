# Branch Rules

## Released Tag Protection

A safeguard mechanism that ensures released tags remain immutable after being created. Once a tag is marked as released, it cannot be recreated, deleted, or modified, preserving the integrity and consistency of versioned releases.

In Branch Rules, enable :
- Restrict creations
- Restrict creations
- Restrict creations
- Block force pushes

See example:  https://github.com/jonkiky/github-setup-recommendation/settings/rules/3233309



## Development Branch Protection

Development Branch Protection enforces secure workflows by restricting branch creation/deletion, requiring pull requests with approvals, status checks, CodeQL scanning, blocking force pushes, and AI review via Copilot.

In Branch Rules, enable :
- Restrict branch creations
- Restrict branch deletions
- Require a pull request before merging
- Require at least 1 approval for pull requests
- Block force pushes
- Require status checks to pass before merging
- Require CodeQL code scanning results
- Automatically request pull request review from GitHub Copilot

See example:  
https://github.com/jonkiky/github-setup-recommendation/settings/rules/3233346


## Instructions for Creating a Branch or Tag Ruleset on GitHub

Follow these steps to create a branch or tag ruleset in your GitHub repository:

### Step 1: Access Repository Settings
1. Go to your **GitHub repository**.
2. Click on the **Settings** tab at the top of the repository page.

### Step 2: Open Rulesets
1. Scroll down to the **Code and automation** section.
2. Click on **Rulesets** to manage branch and tag rulesets.

### Step 3: Create a New Ruleset
1. Click the **New ruleset** button.
2. In the dialog window:
   - Enter a name for the ruleset in the **Name** field.
   - Choose whether the ruleset applies to **Branches** or **Tags**.

### Step 4: Configure Ruleset as needed


### Step 6: Save the Ruleset
1. Click the **Create** or **Save ruleset** button to finalize your settings.

### Step 7: Manage and Test the Ruleset
1. Perform actions such as pushing commits or merging pull requests to verify the ruleset’s enforcement.
2. To make adjustments, return to the **Rulesets** section in the repository settings.
