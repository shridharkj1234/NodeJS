pipeline { 
    agent any 
    stages {
        stage('Build') { 
            steps {
                bat 'npm install'
                echo 'Build Done'
            }
        }
        stage('Test'){
            steps {
                echo 'Test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'deploy'
            }
        }
    }
}
