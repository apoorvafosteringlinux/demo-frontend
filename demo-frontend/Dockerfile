# Use an official Node.js runtime as a base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the local project files to the working directory
COPY . .

# Build the Next.js app
# RUN npm run build

# Expose the port that Next.js runs on
EXPOSE 3000

# Command to run the application
# CMD ["npm", "start"]hist
CMD npm run dev