pipeline {
  agent { label 'ubuntu' }   // use the node label that has docker
  stages {
    stage('Checkout') {
      steps { git url: 'https://github.com/DevopsbyLalit/MY-JENKINS-PROJECT-WEBSITE.git', branch: 'main' }
    }
    stage('Deploy') {
      steps {
        sh '''
          sudo docker pull lalit25/jenkins-demo:latest
          sudo docker stop jenkins-app || true
          sudo docker rm jenkins-app || true
          sudo docker run -d -p 3000:3000 --name jenkins-app lalit25/jenkins-demo:latest
        '''
      }
    }
  }
}
