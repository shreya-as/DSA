// 1 2 3

// 4 5 6

// 7 8 9

let count = 1;
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    process.stdout.write(count + " ");
    count++;
  }
  console.log("\n");
}

// 1

// 21

// 321

// 4321
let num = 4;
for (let i = 0; i < num; i++) {
  for (let j = i + 1; j > 0; j--) {
    process.stdout.write(j.toString());
  }
  console.log("\n");
}

// floyd's traingle pattern

// 1

// 2 3

// 4 5 6

// 7 8 9 10
let num1 = 4;
let count1 = 0;
for (let i = 0; i < num1; i++) {
  for (let j = 0; j < i + 1; j++) {
    count1 += 1;
    process.stdout.write(count1.toString() + " ");
  }
  console.log("\n");
}

//inverted triangle pattern

// 1111 = 4
//  222 = 3
//   33  =2
//    4  =1
let count3 = 1;
for (let i = num; i > 0; i--) {
  process.stdout.write(" ".repeat(num - i));
  for (let j = 0; j < i; j++) {
    process.stdout.write(count3.toString());
  }
  count3++;
  console.log("");
}

let count4 = "A";
for (let i = 0; i < num; i++) {
  process.stdout.write(" ".repeat(i + num - num));
  for (let j = 0; j < num - i; j++) {
    process.stdout.write(count4.toString());
  }
  count4 = String.fromCharCode(count4.charCodeAt(0) + 1);
  console.log("");
}
