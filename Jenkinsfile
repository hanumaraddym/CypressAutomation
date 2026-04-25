pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/hanumaraddym/CypressAutomation.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx cypress run --browser chrome --headless'
            }
        }

        stage('Generate Report') {
            steps {
                sh 'echo "Cleaning old reports..."'
                sh 'rm -f cypress/reports/report.json || true'

                sh 'echo "Merging reports..."'
                sh 'npx mochawesome-merge cypress/reports/mochawesome*.json > cypress/reports/report.json'

                sh 'echo "Generating HTML report..."'
                sh 'npx marge cypress/reports/report.json -f report -o cypress/reports'
            }
        }

        stage('Archive Reports') {
            steps {
                archiveArtifacts artifacts: 'cypress/reports/**/*.*', allowEmptyArchive: true
            }
        }

        stage('Send Email') {
            steps {
                emailext(
                    subject: "Cypress Report",
                    body: "Execution completed. Please find report attached.",
                    to: "your-email@gmail.com",
                    attachmentsPattern: "cypress/reports/report.html"
                )
            }
        }
    }
}