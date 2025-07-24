let code1;

code1 = 7 + 3;

let code2 = 90 / 2 - 5;

let code3 = 100 % 61;

let message = "The vault has been secured. The combination is:";

const codeA = code1 + "-" + code2 + "-" + code3;

const codeB = `${code1}-${code2}-${code3}`;

console.log(message + " " + codeA);

console.log(`${message}  ${codeB}`);
