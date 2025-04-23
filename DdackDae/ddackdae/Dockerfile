FROM node:18-alpine AS builder
WORKDIR /app
COPY . .

# 먼저 install만 해보기 (여기서 실패하면 로그 확인 쉬움)
RUN npm install --legacy-peer-deps --no-audit --no-fund

# 그다음 빌드 시도
RUN npm run build

# 2단계: nginx로 정적 파일 서빙
FROM nginx:1.25-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
