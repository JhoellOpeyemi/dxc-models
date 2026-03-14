---
name: app-test
description: A skill for conducting comprehensive testing of Next.js applications using Jest and React Testing Library for unit and integration tests. It automatically sets up testing dependencies and configuration if not present, runs tests prioritizing forms, API routes, user flows, and includes basic performance checks. Use this skill when you need to validate code changes, ensure application functionality, run regression tests, or perform standard quality checks on the Next.js app.
---

## Step-by-step instructions

1. **Assess current test setup**: Check package.json for testing dependencies (jest, @testing-library/react, etc.) and scan the codebase for existing test files (_.test.js, _.test.tsx, **tests** folders).

2. **Set up testing if needed**:
   - Install required packages: `jest`, `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`, `jest-environment-jsdom`.
   - Create or update `jest.config.js` with Next.js compatible configuration.
   - Add test scripts to package.json: `"test": "jest"`, `"test:watch": "jest --watch"`.

3. **Create sample tests if none exist**:
   - Generate basic unit tests for key components, especially forms and user interaction elements.
   - Create integration tests for API routes (/api/\*) using mocks for external dependencies.
   - Add tests for critical user flows like navigation, form submissions, and data fetching.

4. **Run the test suite**:
   - Execute `npm test` to run all tests.
   - Capture test results, including pass/fail counts, coverage if configured, and any error messages.

5. **Perform basic performance checks**:
   - Run `npm run build` to check for build errors and measure build time.
   - Optionally run a simple Lighthouse audit or check bundle size if tools are available.

6. **Report results and handle failures**:
   - Summarize test outcomes and performance metrics.
   - If tests fail, provide detailed error messages and debugging guidance (e.g., suggest checking component props, mocking dependencies, or reviewing async handling).
   - Stop execution on failures but offer suggestions for fixes.

## Examples of inputs and outputs

### Example 1: Basic test run

**Input**: "Test the app"
**Output**:

```
Setting up testing environment...
Installing dependencies: jest, @testing-library/react, ...
Running tests...
✓ Form validation test passed
✓ API route test passed
✓ User flow test passed
All tests passed (3/3)
Build successful in 45 seconds
Performance check: Bundle size within limits
```

### Example 2: Test with failures

**Input**: "Run tests on the contact form"
**Output**:

```
Running focused tests on contact form...
✗ Contact form submission test failed
Error: Expected form to submit successfully, but received validation error
Debugging guidance:
- Check if form fields are properly validated
- Ensure submit handler is correctly implemented
- Verify API endpoint is mocked or available
Suggestion: Add console.log to form onSubmit to inspect data
```

### Example 3: Performance check

**Input**: "Check app performance"
**Output**:

```
Running performance checks...
Build time: 42 seconds
Bundle analysis: Main bundle 1.2MB (gzipped)
No performance regressions detected
```

## Common edge cases

- **No existing tests**: Automatically generate starter test files for components in `/components` and API routes in `/app/api`.
- **Async operations**: Use `waitFor` from @testing-library/react for asynchronous tests, and mock timers for time-dependent code.
- **API route testing**: Mock Sanity client or external APIs using jest.mock, focus on request/response handling.
- **Environment differences**: Run tests in jsdom environment for browser simulation, handle SSR-specific logic carefully.
- **Large component trees**: Use React Testing Library's `render` with providers (e.g., wrap with necessary contexts like ModelsProvider).
- **Form testing**: Test both successful submissions and validation errors, use user-event for realistic interactions.
- **Performance in CI**: Skip heavy performance checks in CI environments or use lightweight alternatives.

## In your workflow

- **Development cycle**: Run tests after implementing new features or fixing bugs to ensure no regressions.
- **Pre-commit hooks**: Integrate with husky or similar to run tests before commits.
- **CI/CD integration**: Add test steps in GitHub Actions or other pipelines, using this skill to validate builds.
- **Code review**: Use test results to verify pull requests meet quality standards.
- **Regression testing**: Run full test suite before deployments to catch issues early.
- **Debugging workflow**: When tests fail, use the provided guidance to iteratively fix issues, re-running tests as needed.
