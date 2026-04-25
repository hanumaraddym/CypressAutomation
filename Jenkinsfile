pipeline {
    agent any

    tools {
        nodejs "NodeJS"
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

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run --browser chrome --headless'
            }
        }

        stage('Generate Report') {
            steps {
                sh 'npx mochawesome-merge cypress/reports/*.json > cypress/reports/report.json'
                sh 'npx marge cypress/reports/report.json -f report -o cypress/reports'
            }
        }

        stage('Archive Reports') {
            steps {
                archiveArtifacts artifacts: 'cypress/reports/**/*'
            }
        }
    }
}