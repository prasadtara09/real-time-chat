pipeline {
    agent any

    environment {
        KUBE_NAMESPACE = 'app'
    }
    stages{
        stage("Clone Code"){
            steps{
                git url: "https://github.com/prasadtara09/real-time-chat.git", branch: "master"
            }
        }
        stage("Build and Test"){
            steps{
                sh "docker build . -t node-app-test-new"
            }
        }
        stage("Push to Docker Hub"){
            steps{
                withCredentials([usernamePassword(credentialsId:"dockerHub",passwordVariable:"dockerHubPass",usernameVariable:"dockerHubUser")])
                {
                    sh "docker tag node-app-test-new ${env.dockerHubUser}/real-time-chat:latest"
                    sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
                    sh "docker push ${env.dockerHubUser}/real-time-chat:latest"
                }
            }
        }
            stage ('EKS Deploy') {
                steps{
                    // Deploy the application to EKS
                    sh "kubectl apply -f Deployment.yaml -n $KUBE_NAMESPACE"
                }
                
        }
           
    }
    
}
    