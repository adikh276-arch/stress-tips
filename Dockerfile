# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Runtime stage
FROM nginx:alpine

# Create the target directory for subpath hosting
RUN mkdir -p /usr/share/nginx/html/stress_tips

# Copy build artifacts to the subpath directory
COPY --from=builder /app/dist /usr/share/nginx/html/stress_tips

# Copy custom nginx configuration
COPY vite-nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
