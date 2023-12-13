# Use an official Node runtime as a base image
FROM node:18.2.0

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the application code to the container
COPY . .

# Install app dependencies
RUN npm install

# Build the Next.js application
RUN npm run build

#RUN npm run start

# Define the command to run your app
CMD ["npm", "run", "dev"]