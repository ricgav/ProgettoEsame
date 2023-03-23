# ric says

- remember to set version of project to 17 SDK and in pom file java 1.8 (if you don't do this the project is IMPOSSIBLE to run)
- export JAVA_HOME=`/usr/libexec/java_home -v 17`
- java -version
- ./mvnw -DskipTests=true clean package
- docker-compose build && docker-compose up
- for testing you can find ".paw" file with all the api calls

for Endriu;

controllo quali ho installato
- /usr/libexec/java_home -V