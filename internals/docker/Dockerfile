FROM node:10


WORKDIR /code



COPY package.json  ./

RUN npm install --silent

COPY . .

EXPOSE 3002

CMD ["npm", "start"]
