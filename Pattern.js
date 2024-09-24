let rows = 5;
let alpha = 65;
for (i = 1; i <= rows; i++) {
  let res = "";
  for (j = 1; j <= i; j++) {
    res = res + String.fromCharCode(alpha) + " ";
    alpha++;
  }
  console.log(res);
}
