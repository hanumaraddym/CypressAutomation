pipeline {
    agent any

    tools {
        nodejs 'NodeJS'   // Make sure this is Node 18 in Jenkins config
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/hanumaraddym/CypressAutomation.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'echo "Cleaning old node modules..."'
                sh 'rm -rf node_modules package-lock.json'

                sh 'echo "Cleaning npm cache..."'
                sh 'npm cache clean --force'

                sh 'echo "Installing dependencies..."'
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
                sh 'npx mochawesome-merge "cypress/reports/mochawesome*.json" > cypress/reports/report.json'

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
                    subject: "Cypress Report - Build #${BUILD_NUMBER}",
                    body: """
                        <h2>Automation Test Report</h2>
                        <p><b>Build Number:</b> ${BUILD_NUMBER}</p>
                        <p><b>Status:</b> ${currentBuild.currentResult}</p>
                        <p>Report is attached.</p>
                    """,
                    mimeType: 'text/html',
                    to: "just.sdet2@gmail.com",   
                    attachmentsPattern: "cypress/reports/report.html"
                )
            }
        }
    }
}