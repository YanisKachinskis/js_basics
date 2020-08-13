"use strict";

let a = 4;
let b = -7;
if (a > 0 && b > 0) {
    alert(a - b);
}
if (a < 0 && b < 0) {
    alert(a * b);
}
if (Math.sign(a) != Math.sign(b)) {
    alert(a + b);
}