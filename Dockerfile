FROM node:12
# Create app directory
WORKDIR /usr/src/parking-manager

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 8080
CMD [ "npm", "start" ]