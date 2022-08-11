FROM openjdk:11
VOLUME /tmp
ADD ./backend.jar app.jar
EXPOSE 8080
RUN bash -c 'touch /app.jar'
ENTRYPOINT ["java","-Xmx1000m","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]
