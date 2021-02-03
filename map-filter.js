const numb = [3,4,5,6,7,8];
const result = [];

// for (let i = 0; i < numb.length; i++) {
//     const element = numb[i];
//     let output = element *element;
//     result.push(output);
// }
// console.log(result);

const output = numb.map(x=> x*x);
console.log(output);

const filterNumb = numb.filter(x=> x>5);
console.log(filterNumb);


const findNumb = numb.find(x=> x>5);
console.log(findNumb);