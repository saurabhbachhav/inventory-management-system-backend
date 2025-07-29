# Use an official Node runtime as the base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your code
COPY . .

# Use the PORT environment variable
ENV PORT=8080

# Expose the port
EXPOSE ${PORT}

# Start the app using the specified port
CMD ["node", "server.js"]
