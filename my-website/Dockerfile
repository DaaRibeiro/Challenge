FROM node:14.19.0-bullseye

WORKDIR /app

COPY . .

RUN npm install && npm run build

CMD ["npm", "run", "serve", "--", "--port", "$PORT", "--host", "0.0.0.0"]
