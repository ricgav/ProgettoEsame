cd api-gateway
./gradlew bootRun &
docker build -t api-gateway .
cd ../customer-service
./gradlew bootRun &
docker build -t customer-service .
cd ../order-service
./gradlew bootRun &
docker build -t order-service .
cd ../payment-service
./gradlew bootRun &
docker build -t payment-service .
cd ../service-discovery-server
./gradlew bootRun &
docker build -t service-discovery-server .
cd ..
