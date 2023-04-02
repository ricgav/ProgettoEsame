FROM openjdk:13-alpine
EXPOSE 9191
ARG DEPENDENCY=target
ADD ${DEPENDENCY}/*.jar api-gateway.jar
ENTRYPOINT ["java","-jar","/api-gateway.jar"]
