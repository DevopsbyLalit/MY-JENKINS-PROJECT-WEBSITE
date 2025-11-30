pipeline {
    agent label { 'ubuntu' }

    environment {
        DOCKER_IMAGE = "DevopsbyLalit/jenkins-demo:latest"
    }

    stages {

        stage('Checkout') {
            agent { label 'ubuntu' }
            steps {
                git branch: 'main', url: 'https://github.com/DevopsbyLalit/MY-JENKINS-PROJECT-WEBSITE.git'
            }
        }

        stage('Debug user & docker access') {
            agent { label 'ubuntu' }
            steps {
                sh '''
                    whoami
                    groups
                    ls -l /var/run/docker.sock

                    echo "Testing sudo docker:"
                    sudo docker --version
                    sudo docker ps
                '''
            }
        }

        stage('Build Docker Image') {
            agent { label 'ubuntu' }
            steps {
                sh "sudo docker build -t ${DOCKER_IMAGE} ."
            }
        }

        stage('Push Docker Image') {
            agent { label 'ubuntu' }
            steps {
                withCredentials([usernamePassword(credentialsId:'dockerhub-creds', usernameVariable:'DUSER', passwordVariable:'DPASS')]) {
                    sh '''
                        echo "$DPASS" | sudo docker login -u "$DUSER" --password-stdin
                        sudo docker push ${DOCKER_IMAGE}
                    '''
                }
            }
        }

        stage('Deploy') {
            agent { label 'ubuntu' }
            steps {
                sh '''
                    sudo docker pull ${DOCKER_IMAGE}
                    sudo docker stop jenkins-app || true
                    sudo docker rm jenkins-app || true
                    sudo docker run -d -p 3000:3000 --name jenkins-app ${DOCKER_IMAGE}
                '''
            }
        }
    }
}
