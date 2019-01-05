FROM mysql:5.7.24

ENV MYSQL_ROOT_PASSWORD="Cations0!"
ENV MYSQL_DATABASE="yelp"

COPY ./schema.sql /docker-entrypoint-initdb.d/
