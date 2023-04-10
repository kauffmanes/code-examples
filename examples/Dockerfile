FROM node:16

WORKDIR /app

COPY package.json package-lock.json ./

# opening a terminal session and running a command
# results are committed to the image as a layer
# shell form
RUN npm install

# copy local files over to the image
# use dockerignore so docker doesn't copy over local node modules
COPY . .

# set PORT to be used in the node.js file
ENV PORT=8080

# want to listen on 8080 and access the nodejs app publicly
# this means we need to expose the port so we can access it outside
# of the container
EXPOSE 8080

# Can only be one of these in a dockerfile 
# and it tells docker how to run the application
# "command", "param"
# exec form - array of strings, preferred way to do things, doesn't start up a shell session
CMD [ "npm", "start" ]