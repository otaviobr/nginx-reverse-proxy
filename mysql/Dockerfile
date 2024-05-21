FROM mysql:5.7.16
WORKDIR /app
RUN chown -R root:root /app
RUN chmod 755 /app
COPY ./setup /docker-entrypoint-initdb.d/