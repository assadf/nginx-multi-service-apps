FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Next.js app with environment variables to skip fetch during build
RUN NEXT_PUBLIC_API_MOCKING=enabled npm run build

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]