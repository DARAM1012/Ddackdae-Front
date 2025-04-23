# 1단계: React 빌드
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

# 2단계: nginx로 정적 파일 서빙
FROM nginx:1.25-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
