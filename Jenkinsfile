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
                sh 'npx mochawesome-merge cypress/reports/*.json > cypress/reports/report.json'
                sh 'npx marge cypress/reports/report.json -f report -o cypress/reports'
            }
        }

        stage('Archive Reports') {
            steps {
                archiveArtifacts artifacts: 'cypress/reports/**/*', allowEmptyArchive: true
            }
        }
    }
}


    post {
        always {
            emailext(
                subject: "Cypress Test Report - Build #${BUILD_NUMBER}",
                body: """
                <h2>Test Execution Summary</h2>
                <p>Job: ${JOB_NAME}</p>
                <p>Build Number: ${BUILD_NUMBER}</p>
                <p>Status: ${currentBuild.currentResult}</p>
                <p>Check attached report for details.</p>
                """,
                to: "your-email@gmail.com",
                attachmentsPattern: "cypress/reports/*.html"
            )
        }
    }
}

