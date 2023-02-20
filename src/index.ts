export type GreetInput = string;

const greet = (name: GreetInput) => `Hello ${name}!`;

console.log(greet("John Doe"));
