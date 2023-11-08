FROM node:12.2.0-alpine
WORKDIR app
COPY . .
RUN npm install
#RUN npm run test
EXPOSE 4000
CMD ["node","index.js"]
