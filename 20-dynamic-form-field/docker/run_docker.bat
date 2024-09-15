@echo off
REM Ensure Docker is running

REM Build the Docker image
docker build -t my-react-app .

REM Run the Docker container
docker run -d -p 3000:3000 --name react-app-container dynamic-form-field

REM Check if the container is running
docker ps
