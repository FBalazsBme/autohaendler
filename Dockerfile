# Erster Schritt: Base Image pullen, Dependencies installieren, Builden 

# Base - Image pullen
FROM node:latest as build
RUN mkdir /app
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
# Zweiter Schritt:

# Deployment mehrerer Nginx - Server zur Redirection zu HTTPS
FROM nginx:alpine

# Build - Image von Node Container holen
COPY --from=build /app/dist/merlin-mobile /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
# Lokales Zertifikat generieren (idealerweise später Austauschen)

# Installation von Openssl und der Bourne - Again Shell
RUN apk update
RUN apk upgrade
RUN apk add bash
RUN apk add openssl
RUN /bin/bash -c "openssl req -x509 -out etc/ssl/localhost.crt -keyout etc/ssl/localhost.key \
      -newkey rsa:2048 -nodes -sha256 \
      -subj '/CN=localhost' -extensions EXT -config <( \
       printf '[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth')"