# CypressAutomation
# 🚀 Cypress Automation Framework

## 📌 Overview
This project is a scalable Cypress automation framework designed using best practices like Page Object Model (POM), reusable commands, and data-driven testing.

The framework automates UI and API validation for the demo application:
👉 https://testautomationpractice.blogspot.com/

---

## 🧰 Tech Stack
- Cypress
- JavaScript (ES6)
- Node.js
- Mochawesome Reporting

---

## 📂 Project Structure
cypress/

 ├── e2e/

 │    └── tests/

 │         ├── formTest.cy.js

 │         ├── negativeTest.cy.js

 │         ├── apiTest.cy.js

 │         └── tableTest.cy.js

 │

 ├── pages/

 │    └── FormPage.js

 │

 ├── fixtures/

 │    └── user.json

 │

 ├── support/

 │    ├── commands.js

 │    └── e2e.js

 │

 ├── reports/

 

cypress.config.js

package.json

---

## ✅ Features Implemented
- Page Object Model (POM)
- Custom Commands (Reusable functions)
- Data-driven testing using Fixtures
- UI + API validation using cy.intercept()
- Negative test scenarios
- Table validation
- File upload handling
- Scroll and dropdown handling
- Mochawesome HTML reporting

---

## 🧪 Test Scenarios Covered
- Form submission (positive flow)
- Invalid email validation
- Empty form submission
- Dropdown selection
- Checkbox & radio button validation
- File upload validation
- Table data verification
- API interception and validation

---

## ▶️ How to Run the Project

### 1. Install dependencies
npm install

### 2. Open Cypress Test Runner
npx cypress open

### 3. Run tests in headless mode
npm run cy:run

---

## 📊 Generate Report

npm run report:merge npm run report:generate

👉 Open report:
cypress/reports/report.html

---

## ⚙️ Configuration

Base URL is configured in:
cypress.config.js

---

## 🔄 CI/CD (Future Enhancement)
- Can be integrated with GitHub Actions / Jenkins
- Supports automated execution on code push

---

## 💡 Key Highlights
- Modular and scalable framework design
- Separation of concerns using POM
- Reusable and maintainable test code
- API + UI combined validation
- Ready for CI/CD integration

---

## 👤 Author
Hanumaraddy M  
Senior QA Automation Engineer


