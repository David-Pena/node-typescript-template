# Node.js TypeScript Starter Template

This starter template provides a robust foundation for building Node.js applications with TypeScript. It comes pre-configured with essential tools and structure to kickstart your project development.

## Features

- **Prettier and Eslint Setup**: Ensures code consistency and quality.
- **Nodemon Configuration**: Automatic server restarts on file changes for seamless development.
- **Modular Structure**: Organized into distinct directories for easy navigation and maintenance.
- **HTTP Client**: Includes an HttpClient for handling HTTP requests using Axios.
- **Types Definition**: Centralized location for storing type definitions used throughout the project.

## Structure

- **`index.ts`**: Entry point of the application, where the main route configuration is set up.
- **`src/router`**: Contains route definitions.
- **`src/controller`**: Houses controllers responsible for handling requests and responses.
- **`src/models`**: Contains data models and logic, simulating service functionalities.
- **`src/core`**: Core functionalities of the application.
  - **`http`**: Contains the HTTP client for making external requests.
- **`src/types`**: Holds type definitions used across various files.

Additional directories such as `middlewares`, `utils`, and `vendor` can be added as needed for handling middleware, utilities, and third-party connections like Nodemailer or Puppeteer.

## Getting Started

Follow these simple steps to start using the template:

1. **Clone the Project**: Clone this repository to your local machine.
2. **Create Environment File**: Create a `.env.dev` file and add the variable `PORT` to specify the port for the development environment.
3. **Run Development Server**: Execute `pnpm run dev` to start the development server.
4. **Customization**: Modify routes, controllers, and models as per your project requirements.

## Usage

Once set up, you can begin developing your Node.js application with TypeScript using this starter template. Utilize the provided structure and tools to build robust and scalable solutions effortlessly.

Happy coding! 🚀
