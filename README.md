# Simple CLI Calculator

This is a **Command-Line Interface (CLI) Calculator** built with **TypeScript** and **Inquirer.js** for an interactive and user-friendly experience.

## Features

- Supports basic arithmetic operations: **Addition (+), Subtraction (-), Multiplication (\*), and Division (/).**
- Prevents division by zero errors.
- Handles invalid inputs gracefully.
- Allows users to perform multiple calculations in a single session.

## Prerequisites

Ensure you have **Node.js** and **TypeScript** installed on your system.

### Install Node.js

[Download and install Node.js](https://nodejs.org/)

### Install TypeScript (if not installed)

```sh
npm install -g typescript
```

## Installation

Clone this repository and install dependencies:

```sh
git clone https://github.com/HassanEssam0110/cli-calculator-ts.git
cd cli-calculator-ts
npm install
```

## Usage

To run the CLI calculator, use the following command:

```sh
npm start
```

Alternatively, you can build the TypeScript code and run the compiled JavaScript file manually:

```sh
npm run build
node ./dist/index.js
```

## Example Interaction

```
? Enter first number? 10
? Select an operator? +
? Enter second number? 5

#########################
10 + 5 = 15
#########################

? Do you want to continue? (y/n)
```

## Project Structure

```
/simple-calculator
│── src/
│   ├── index.ts   # Main application logic
│── dist/          # Compiled JavaScript files
│── package.json   # Project configuration
│── tsconfig.json  # TypeScript configuration
│── README.md      # Project documentation
```

## Dependencies

- [Inquirer.js](https://www.npmjs.com/package/inquirer) for interactive prompts.

## Author

**Hassan Essam**

## License

This project is licensed under the ISC License.
