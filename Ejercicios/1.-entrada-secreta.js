import { data } from "../data.js";

const showPassword = (array) => {
  let currentPosition = 50;
  let paswwordCount = 0;

  for (const element of array) {
    let value = parseInt(element.substring(1));
    let isLeft = element[0] === "L";

    if (isLeft) {
      currentPosition = (currentPosition - value + 100) % 100;
    } else {
      currentPosition = (currentPosition + value) % 100;
    }
    if (currentPosition === 0) paswwordCount++;
  }
  return paswwordCount;
};
console.log(showPassword(data));
