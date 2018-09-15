FROM node:8
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3033
CMD [ "npm", "start" ]