## 🔧 Setup
```bash
npm install
npx cypress open
```

## 🧪 Running Tests
- UI Tests: `npx cypress run --spec "cypress/e2e/web-ui/**/*.cy.js"`

## 🧱 Adding Tests
- Place new UI specs in `cypress/e2e/web-ui/`
- Use Page Objects for UI tests in `cypress/pageObjects/`
- Store element locators in `cypress/locators/` to keep locators clean and maintainable
- Use existing commands and fixtures for reusability

## ⚙️ GitHub Actions
Tests are automatically run on push/PR to `main` using workflows defined in `.github/workflows/cypress-tests.yml`
