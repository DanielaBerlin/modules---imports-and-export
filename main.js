//Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

import * as v from "./js/variable.js";
import { add } from "./js/functions.js";

console.log(v.num1);
console.log(v.num2);

// add(v.num1, v.num2);

console.log(add(v.num1, v.num2));