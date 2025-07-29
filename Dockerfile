# Use Node.js LTS
FROM node:18

# Set working dir
WORKDIR /usr/src/app

# Copy only package files first
COPY package*.json ./

# Install deps
RUN npm install --production

COPY .env .env
# Copy all source
COPY . .

# PORT arg + env
ARG PORT=8080
ENV PORT=${PORT}

# Expose that port
EXPOSE ${PORT}

# Launch the app
CMD ["npm", "run", "dev"]
