# Use the official Node.js image as the base image
FROM node:20

# Set the PORT environment variable (default to 3000 if not provided)
ENV PORT=3000

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port on which Express.js is listening
EXPOSE $PORT 

# Start the Express.js application
CMD ["npm", "start"]
