# Branch Rules

## Released Tag Protection

A safeguard mechanism that ensures released tags remain immutable after being created. Once a tag is marked as released, it cannot be recreated, deleted, or modified, preserving the integrity and consistency of versioned releases.


See example:  https://github.com/jonkiky/github-setup-recommendation/settings/rules/3233309



## Development Branch Protection

A safeguard mechanism that ensures Development tags remain immutable after being created. Once a tag is marked as released, it cannot be recreated, deleted, or modified, preserving the integrity and consistency of versioned releases.





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

### Step 4: Define Target Branches or Tags
1. Specify which branches or tags the ruleset applies to:
   - Use the **Include** field to define patterns for the branches or tags you want to target.
   - Optionally, use the **Exclude** field to exclude specific branches or tags.

### Step 5: Configure Ruleset Conditions
1. Select the conditions to enforce for your branches or tags:
   - **Require a pull request before merging**: Ensure changes are merged only through a pull request.
   - **Require status checks to pass before merging**: Mandate that CI checks pass before merging.
   - **Require signed commits**: Enforce commit signing for added security.
   - **Restrict who can push**: Limit push access to specific users or teams.
2. Adjust rules according to the needs of your project.

### Step 6: Save the Ruleset
1. Click the **Create** or **Save ruleset** button to finalize your settings.

### Step 7: Manage and Test the Ruleset
1. Perform actions such as pushing commits or merging pull requests to verify the ruleset’s enforcement.
2. To make adjustments, return to the **Rulesets** section in the repository settings.

By following these steps, you can effectively manage branch or tag protection rules and maintain the integrity of your GitHub repository.
