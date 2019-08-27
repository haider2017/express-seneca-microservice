FROM node:10.0-alpine
WORKDIR /app
EXPOSE 8080
RUN npm install
ADD . /app
CMD ["npm", "start"]