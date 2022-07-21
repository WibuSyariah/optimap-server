# Optimap Server

Optimap Server is a REST API Based Server created for managing Users and Profiles data easily

## System Requirements

- PC that has atleast 1 Core and 1 Thread
- Atleast 512MB of RAM
- Less than 128MB of free disk space is enough to run the server, more needed if you want to store a lot of data(mainly photo on this Server)
- OS that support Node.js version > 16.x

## Installation

First of all, you need to install Node.js and npm, and clone the repository

    git clone

and then run the following command

    npm install

it should install all the dependencies, and run this command

    npx sequelize-cli db:create
    npx sequelize-cli db:migrate

it should create the database and migrate the schema

    touch .env

it should create a .env file and fill it with the following content, the value is up to you

    PORT=
    SECRET_KEY=

then run the following command

    npm run start
    or
    npx nodemon app.js
    or if you installed nodemon globally
    nodemon app.js

then the server will start, and ready to use.

## Endpoints

Endpoint list is on API-Documentation.md file
