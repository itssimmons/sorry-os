# Build stage
FROM node:22-alpine as builder

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && \
    pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

# Runtime stage
FROM node:22-alpine as runtime

WORKDIR /www

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json /app/next.config.ts ./
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/public public

EXPOSE 49152

CMD ["npx", "next", "start", "-p", "49152"]
