FROM openjdk:13-alpine
EXPOSE 8761
ARG DEPENDENCY=target
ADD ${DEPENDENCY}/*.jar service-registry.jar
ENTRYPOINT ["java","-jar","/service-registry.jar"]