FROM debian:bookworm

ARG DEBIAN_FRONTEND=noninteractive

# install postgres
RUN apt update --fix-missing
RUN apt install postgresql curl ca-certificates -y

# Install nvm version manager
ENV NVM_VERSION 0.39.7
ENV NVM_DIR /usr/local/nvm
RUN mkdir $NVM_DIR
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v$NVM_VERSION/install.sh | bash

# Install node
ENV NODE_VERSION 22.13.1
RUN . $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# Database environment variables
ENV DATABASE_URL_DEV=postgres://postgres:Saddock_2000@localhost:5432/agri-tech-rw-db
ENV NODE_ENV=development
ENV DB_HOST_TYPE=local

# Google OAuth environment variables
ENV GOOGLE_CLIENT_ID=365455022372-d62b4uahub2s7b39akbi72rctachhoqg.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=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
ENV SERVER_URL_PRO=http://localhost:5000


# copy your project in your work directory
RUN mkdir /app
WORKDIR /app

COPY ./package.json /app
COPY ./package-lock.json /app

RUN npm install

COPY . /app


# install packages and build

RUN npm run build

# allow the start script to be executable
RUN chmod +x start.sh

# expose running port
# to ignore all other setted ports as they won\'t be exposed anyway
ENV PORT 4000
EXPOSE 4000



CMD [ "/bin/bash", "./start.sh"]