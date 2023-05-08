export const calculate = (string_text: string) => {
  const regex = /[+\-*/]/g;
  const tokens = string_text.match(regex);
  const numbers = string_text.split(regex).map(Number);

  let result = numbers[0];

  if (tokens) {
    for (let i = 0; i < tokens?.length; i++) {
      const token = tokens[i];
      const number = numbers[i + 1];

      switch (token) {
        case "+":
          result += number;
          break;
        case "-":
          result -= number;
          break;
        case "*":
          result *= number;
          break;
        case "/":
          result /= number;
          break;
      }
    }
  }

  return string_text = result.toString();
};
