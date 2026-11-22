pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Create Env') {
            steps {
                sh 'cp .env.example .env'
            }
        }

        stage('Validate Compose') {
            steps {
                sh 'docker compose config'
            }
        }

        stage('Build Containers') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Start Containers') {
            steps {
                sh 'docker compose up -d'
            }
        }

        stage('Test API') {
            steps {
                sh '''
                for i in 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15; do
                  if curl --fail --silent http://host.docker.internal:3001/api/health; then
                    exit 0
                  fi
                  sleep 2
                done
                docker compose logs
                exit 1
                '''
            }
        }

        stage('Check Web') {
            steps {
                sh 'curl --fail --silent http://host.docker.internal:5173'
            }
        }
    }

    post {
        always {
            sh 'docker compose down'
        }
    }
}