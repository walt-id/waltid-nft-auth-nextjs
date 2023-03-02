# step 1 as builder
FROM node:16-alpine as builder

# copy the package.json to install dependencies
COPY package.json yarn.lock ./

# Install the dependencies and make the folder
RUN yarn && mkdir /next-pokedex && mv ./node_modules ./next-pokedex

WORKDIR /next-pokedex

COPY . .

# Build the project and copy the files
RUN yarn build

CMD [ "yarn", "start" ]

# FROM nginx:alpine

#!/bin/sh

# COPY nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
# RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
# COPY --from=builder /next-pokedex/out /usr/share/nginx/html

# ENTRYPOINT ["nginx", "-g", "daemon off;"]