FROM node:lts

#Creating a new directory for app files and setting path in the container
RUN mkdir -p /usr/src/app
#setting working directory in the container
WORKDIR /usr/src/app
#copying the package.json file(contains dependencies) from project source dir to container dir
COPY package.json /usr/src/app
# installing the dependencies into the container
RUN npm install --omit=dev
#copy the build output from project source dir to container dir
COPY . .
#container exposed network port number
EXPOSE 3000
#command to run within the container
CMD [ "node", "./app.js" ]



