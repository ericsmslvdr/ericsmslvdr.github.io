FROM node:26-alpine

WORKDIR /app

# Install dependencies first so Docker can cache this layer until manifests change.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
