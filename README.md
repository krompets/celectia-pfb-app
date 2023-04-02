# Full stack application for submitting PayForBlob transactions
This is an example application built with Angular on the frontend and Flask on the backend. It uses docker-compose to manage the development environment.

## Prerequisites
Before you can run this application, you need to have the following software installed on your machine:
 - Docker
 - docker-compose

## Running the application
To run the application, clone this repository to your local machine and navigate to the project directory. Then, start the application using `docker-compose`:
```
docker-compose up -d
```
This will start the frontend and backend services in separate containers.
You will be able to access the application at http://localhost:80. 
The backend service will be running on http://localhost:5000, and the frontend service will proxy requests to the backend service automatically.
