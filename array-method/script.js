let names = ["Toyota", "BMW", "Mercedes", "BMW"];

let stringNames = names.toString();
// console.log(stringNames);

let joinNames = names.join(",");
// console.log(joinNames);

let concatNames = names.concat("Vinfast", "Porsche", "Lambogini");
// console.log(concatNames);

// let spliceNames = names.splice(0, 1, ["Vinfast"]);
// console.log(spliceNames);
// console.log(names);

let sliceName = names.slice(0, 3);
// console.log(sliceName);

let index = names.lastIndexOf("BMW");
// console.log(index);

// let nums = [1, 3, 4, 5, 6, 2, [6, 9, [1, 3, [2, 1]]]];

// let flat = nums.flat(Infinity);
// console.log(flat);

// HIGHTER ORDER FUNCTION
//- FUNCTION AS ARGUMENT AND RETURN A FUNCTION
//- THAT OPERATE ON ORTHER FUNCTION

// names.forEach((name) => {
//   console.log(name);
// });

// let arr = flat.map((num) => (num += 1));

// console.log(arr);

let posts = [
  { title: "Post1", author: "Dan" },
  { title: "Post2", author: "Jack" },
  { title: "Post3", author: "Dan" },
];

let postByDan = posts.filter((post) => post.author === "Dan");
// console.log(postByDan);

let nums = [9, 1, 2, 3, 4];

// let total = nums.reduce((total, curentValue) => {
//   console.log("total", total, "current value", curentValue);
//   return total + curentValue;
// }, 0);
// console.log(total);

let maxArr = nums.reduce((maxValue, curentValue) =>
  Math.max(maxValue, curentValue)
);
// console.log(maxArr);
// console.log(...[3, 5, 4, 3, 6, 2, 3, 4, ...[1, 2]]);
// console.log(Math.max(...[3, 5, 4, 3, 6, 2, 3, 4]));

// some

// every

// find


// sort((number1, number2) => number1 - number2)
// number1 - number2 < 0: a before b
// number1 - number2 > 0: a after b



