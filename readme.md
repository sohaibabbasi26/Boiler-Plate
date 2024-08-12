# Fastify.js Boilerplate

## Overview

Welcome to the Fastify.js Boilerplate! This project is designed to kick-start your backend development service right away. With a comprehensive breakdown of request processing, multiple configurations, and handy utilities, this boilerplate ensures you can start building your application with minimal setup. Just clone the repository, install the dependencies, and you're ready to go!

## Features

### Request Processing Flow

Every request is meticulously broken down into three modules:

1. **primaryRoutes.js**: The entry point for incoming requests.
2. **primaryHandlers.js**: Handles business logic and routes requests to the appropriate services.
3. **primaryServices.js**: Manages the core processing and interacts with the database, APIs, or other services.

This flow allows for extensive customization:
- **Pre-processing**: Modify requests before they are processed in `primaryServices.js`.
- **Post-processing**: Alter responses before they are sent back to the client.

### Configurations

The boilerplate comes pre-configured with the following technologies:

- **Sequelize ORM Configuration with PostgreSQL**
- **TypeORM Configuration with PostgreSQL**
- **Socket.io Configuration**
- **RabbitMQ Configuration**
- **OpenAI Configuration**
- **Gmail Configuration**

### Utilities

This boilerplate also includes several useful utilities:

- **Entity Existence Check**: Easily check if entities exist in the database using Sequelize.
- **RabbitMQ Publisher and Consumer Functions**: Use these functions anywhere in your project for message queuing.
- **Password Encryption & Comparison**: Securely encrypt and compare passwords.
- **OpenAI Gateways**: Pre-built gateways for integrating OpenAI services.
- **Simple QUEUE Class**: A customizable queue class that can be tailored to your project needs.
- **Connectivity Ensuring Methods**: Utilities to ensure stable connections with your services.

## Getting Started

1. **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Configure your environment:**
    - Update the `.env` file with your configurations for PostgreSQL, RabbitMQ, Socket.io, OpenAI, and Gmail.

4. **Start the development server:**
    ```bash
    npm run dev
    ```

## Usage

- **Routes:** Define your API endpoints in `primaryRoutes.js`.
- **Handlers:** Implement your business logic in `primaryHandlers.js`.
- **Services:** Manage your core processing in `primaryServices.js`.

Feel free to customize and expand the boilerplate as per your project's requirements!

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any improvements or additional features.

## License

This project is licensed under the MIT License.
