# PR Comment Template

# Setting Up a PR Comment Template in GitHub

GitHub allows you to define templates for pull request descriptions, but for comment templates, you'll need to provide a reusable format for reviewers to use during the review process.

---

## Step 1: Create a Markdown File for the Template

1. **Navigate to Your Repository**:
   - Open your repository on [GitHub](https://github.com).

2. **Go to the `.github` Directory**:
   - If it doesn’t exist, create a new directory named `.github` in the root of your repository.

3. **Create a New File**:
   - Inside the `.github` directory, create a file named `PR_COMMENT_TEMPLATE.md`.

4. **Add the Template Content**:
   - Copy and paste the following structure into the file:

```markdown
# Pull Request Title
<!-- Provide a short summary of the changes in this pull request -->

## Description
<!-- Describe your changes in detail -->
- What problem does this solve?


## Type of Change
<!-- Please delete options that are not relevant -->
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] Feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Refactoring (non-functional changes, code improvements)

## Related Issue(s)
<!-- List the issues this pull request resolves -->
- Fixes #<issue_number>
- Related to #<issue_number>

## Screenshots or Demo (if applicable)
<!-- Attach screenshots or a short demo to highlight the changes -->

## Additional Notes
<!-- Add any additional information, context, or questions here -->



```

---

## Step 2: Save the Template in a Central Location

Save the file and commit it to your repository.
You can reference this template in your CONTRIBUTING.md file or team documentation.

