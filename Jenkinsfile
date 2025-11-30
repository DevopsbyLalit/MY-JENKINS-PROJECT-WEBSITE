pipeline {
    agent label { 'ubuntu '}

    environment {
        DOCKER_IMAGE = "DevopsbyLalit/jenkins-demo:latest"
    }

    stages {

        stage('Checkout') {
            agent { label 'agent2' }
            steps {
                git branch: 'main', url: 'https://github.com/DevopsbyLalit/MY-JENKINS-PROJECT-WEBSITE.git'
            }
        }

        stage('Debug user & docker access') {
            agent { label 'agent2' }
            steps {
                sh '''
                    echo "whoami: $(whoami)"
                    echo "groups: $(groups)"
                    echo "docker.sock perms:"
                    ls -l /var/run/docker.sock

                    echo "Testing docker with SUDO"
                    sudo docker --version
                    sudo docker ps
                '''
            }
        }

        stage('Build Docker Image') {
            agent { label 'agent2' }
            steps {
                sh "sudo docker build -t ${DOCKER_IMAGE} ."
            }
        }

        stage('Push to DockerHub') {
            agent { label 'agent2' }
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        echo "$DOCKER_PASS" | sudo docker login -u "$DOCKER_USER" --password-stdin
                        sudo docker push ${DOCKER_IMAGE}
                    '''
                }
            }
        }

        stage('Deploy on EC2') {
            agent { label 'agent2' }
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
