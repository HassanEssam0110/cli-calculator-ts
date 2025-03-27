import inquirer from "inquirer";

type Operation = "+" | "-" | "*" | "/";

interface IAnswer {
  num1: number;
  op: Operation;
  num2: number;
}

const calculate = ({ num1, op, num2 }: IAnswer): number => {
  const operators: Record<Operation, (a: number, b: number) => number> = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  return operators[op](num1, num2);
};

const main = async (): Promise<void> => {
  // Get user input
  const answer = await inquirer.prompt([
    { message: "Enter first number?", name: "firstNumber", type: "number" },
    {
      message: "Select an operator?",
      name: "operator",
      type: "list",
      choices: ["+", "-", "*", "/"],
    },
    { message: "Enter second number?", name: "secondNumber", type: "number" },
  ]);

  // Convert input to numbers
  const num1: number = parseFloat(answer.firstNumber);
  const num2: number = parseFloat(answer.secondNumber);
  const op: Operation = answer.operator as Operation;

  // Validate numbers
  if (isNaN(num1) || isNaN(num2)) {
    console.log("\nInvalid input. Please enter a valid number.\n");
    return main();
  }
  if (op === "/" && num2 === 0) {
    console.log("\nError: Division by zero is not allowed.\n");
    return main();
  }

  // Perform calculation
  const result: number = calculate({ num1, op, num2 });
  console.log(
    `\n#########################    \n${num1} ${op} ${num2} = ${result}    \n#########################\n`
  );

  // Ask user if they want to continue
  const { continueCalc } = await inquirer.prompt([
    {
      message: "Do you want to continue?",
      name: "continueCalc",
      type: "confirm",
    },
  ]);

  if (continueCalc) {
    main();
  }
};

main();
