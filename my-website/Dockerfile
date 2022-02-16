FROM node:14.19.0-bullseye

WORKDIR /app

COPY . .

#RUN ["npm", "install","run", "install", "build"]
RUN npm install && timeout 1m npm run build || true

CMD ["npm", "run", "serve", "--", "--port", "$PORT", "--host", "0.0.0.0"]