pipeline { 
    agent any 
    stages {
        stage('Build') { 
            steps {
                cd 'tree/main/natours-project-node-express'
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
