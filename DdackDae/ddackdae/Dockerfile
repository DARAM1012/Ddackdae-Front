FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
COPY .env .

RUN npm install --legacy-peer-deps --no-audit --no-fund
RUN npm run build  # → 결과는 /app/dist 생성됨

FROM nginx:1.25-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
# test
