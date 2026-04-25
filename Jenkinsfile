pipeline {
    agent any

    tools {
        nodejs "NodeJS"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/hanumaraddym/CypressAutomation.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run --browser chrome --headless'
            }
        }

        stage('Generate Report') {
            steps {
                sh 'mkdir -p cypress/reports'
                sh 'ls -l cypress/reports || true'

                sh '''
                if ls cypress/reports/*.json 1> /dev/null 2>&1; then
                    echo "Merging reports..."
                    npx mochawesome-merge cypress/reports/*.json > cypress/reports/report.json
                    npx marge cypress/reports/report.json -f report -o cypress/reports
                else
                    echo "No JSON reports found. Skipping report generation."
                fi
                '''
            }
        }

        stage('Archive Reports') {
            steps {
                archiveArtifacts artifacts: 'cypress/reports/**/*', allowEmptyArchive: true
            }
        }

        stage('Send Email') {
            steps {
                emailext (
                    subject: "Jenkins Build: ${currentBuild.currentResult}",
                    body: """
                        Build Status: ${currentBuild.currentResult}
                        Job Name: ${env.JOB_NAME}
                        Build Number: ${env.BUILD_NUMBER}

                        Check console output for details.
                    """,
                    to: "your-email@gmail.com",
                    attachmentsPattern: 'cypress/reports/*.html'
                )
            }
        }
    }
}