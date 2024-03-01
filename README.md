![npm version](https://img.shields.io/badge/npm-v21.5.0-green)
![express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
<div align="center">
  <img src="https://raw.githubusercontent.com/drizzle-team/drizzle-orm/fed7bde872d649056888a53be72726bd5b7cbb55/misc/readme/logo-github-sq-dark.svg#gh-dark-mode-only" />
  <img src="https://raw.githubusercontent.com/drizzle-team/drizzle-orm/fed7bde872d649056888a53be72726bd5b7cbb55/misc/readme/logo-github-sq-light.svg#gh-light-mode-only" />
</div>

# Posts-Users Relations Sample Project using Drizzle ORM

This project demonstrates how to create a simple application using Node.js, Express, and TypeScript, along with the Drizzle ORM, to manage relations between posts and users in a database.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Introduction

This project showcases a basic setup for managing posts and users in a relational database. It utilizes Node.js for server-side scripting, Express as the web framework, TypeScript for type safety, and Drizzle ORM for database interaction.

## Features

- Creation, retrieval, updating, and deletion (CRUD) operations for posts and users.
- Establishment of a one-to-many relationship between posts and users (one user can have multiple posts).
- RESTful API endpoints for interacting with posts and users.
- TypeScript type definitions for enhanced code readability and maintainability.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/name-is-hai/node.ts-drizzle.git
2. Clone the repository:

   ```bash
   cd node.ts-drizzle
   npm install
3. Clone the repository:
  Create a .env file in the project root and add the following variables:
   ```bash
   SERVER_PORT=your_database_server_port
   DATABASE_HOST=your_database_host
   DATABASE_USERNAME=your_database_user
   DATABASE_PASSWORD=your_database_password
   DATABASE_NAME=post_user_relations
   
## Usage

1. Create Drizzle ORM database:

   ```bash
   npm run generate
2. Run the migration script:

   ```bash
   npm run migrate
   
2. See ui Drizzle database:

   ```bash
   npm run studio
3. To start the backend server, run:
   
   ```bash
   npm run dev
## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.
****
