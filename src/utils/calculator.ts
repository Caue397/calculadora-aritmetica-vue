export function calculator(num1: number, num2: number, operator: string) {
  let result: number;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        return "Divisão por zero";
      }
      result = num1 / num2;
      break;
    default:
      result = 0;
      break;
  }

  if (!Number.isInteger(result)) {
    return result.toFixed(5);
  }

  return result;
}
