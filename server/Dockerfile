FROM node:19-alpine AS base
WORKDIR /app
COPY package*.json ./
# COPY prisma ./prisma
COPY src ./src
COPY tsconfig*.json ./
RUN npm install


# Stage 2 - Build the app
FROM base AS build
WORKDIR /app
RUN npm run build

# Stage 3 - Production
FROM node:19-alpine AS production
WORKDIR /app
COPY package*.json ./
# COPY --from=build /app/node_modules/.prisma ./node_modules/.prisma 
# COPY --from=build /app/node_modules/@prisma ./node_modules/@prisma
RUN npm install --omit=dev
COPY --from=build /app/build ./


CMD ["node", "main.js"]