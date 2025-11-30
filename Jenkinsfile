pipeline {
    agent { label 'lalit'}

    environment {
        DOCKER_IMAGE = "lalit25/jenkins-demo:latest"
    }

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/DevopsbyLalit/my-jenkins-project.git-website'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${DOCKER_IMAGE} ."
            }
        }

        stage('Login & Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin'
                    sh "docker push ${DOCKER_IMAGE}"
                }
            }
        }

        stage('Deploy on EC2 Agent') {
            agent { label 'lalit' }
            steps {
                sh "docker pull ${DOCKER_IMAGE}"
                sh 'docker stop jenkins-app || true'
                sh 'docker rm jenkins-app || true'
                sh "docker run -d -p 3000:3000 --name jenkins-app ${DOCKER_IMAGE}"
            }
        }
    }
}
