# Distributing system.

### Start kibana + Elastic APM
```
cd containers
docker-compose up
```
 - Open http://localhost:5601 to access Kibana
### Backend 1
```
cd backend1
mvn spring-boot:run
```

### Backend 2
```
cd backend2
mvn spring-boot:run
```

### Frontent
```
cd frontend/hello-world
ng serve --open
```

# Ref:
- https://levelup.gitconnected.com/how-to-integrate-elastic-apm-java-agent-with-spring-boot-7ce8388a206e
- https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html
- https://www.elastic.co/guide/en/apm/agent/rum-js/current/angular-integration.html
- https://www.elastic.co/guide/en/apm/guide/current/configuration-rum.html