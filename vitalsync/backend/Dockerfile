FROM node:25-alpine3.23 AS builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm test

FROM node:25-alpine3.23
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY server.js .
COPY package.json .
EXPOSE 3000
CMD ["npm", "start"]