FROM node:14
WORKDIR /usr/src/app
RUN npm install -g express-gateway
COPY ./config ./config
EXPOSE 8080
CMD ["eg", "gateway", "start"]