FROM cypress/included:14.5.4

# Working directory inside the container
WORKDIR /e2e

# Copy package files first to leverage Docker cache for deps
COPY package.json package-lock.json* ./

# Install project dependencies (devDependencies contain cypress and helpers)
RUN npm ci --only=dev || npm install

# Copy the rest of the project
COPY . .

# Default command runs the tests via npm script
CMD ["npm", "test"]
