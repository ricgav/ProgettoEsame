# TAASSpringbootPostgresDocker
 

modify application.properties with correct login and PWD for Postgres

Position in project directory root

 ./mvnw -DskipTests=true clean package

docker-compose build && docker-compose up 

http://localhost:8080/ or using Postman:
 get: http://localhost:8080/api/v1/customers
 
 
 http://localhost:8080/api/v1/customers/create 
 Body: 
 {
 "name": "renata",
 "age": 62,
 "active": true,
 "date": "2022-12-25" 
   
}


docker-compose build && docker-compose up 
docker tag appbootrest giopetrone111/appbootrest:1.0.0
docker login
 docker push giopetrone111/appbootrest:1.0.0

