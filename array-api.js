const name = ["su", "ku", "i"];

// make a string out of an array

const makeString = name.join(); // 'su,ku,i'
const makeString1 = name.join("|"); // 'su,ku,i'
console.log(makeString);
console.log(makeString1);

//2. string to array
const fruits = "🍎,🍒,🍓,🍎";
const result = fruits.split(","); //(separator : string | RegExp. , limit )  ************************************
console.log(result);

//3. reverse
const array = [1, 2, 3, 4, 5];
const result1 = array.reverse();

//4.  make new array without the first two elements

//incorrect -> should make new!
const array1 = [1, 2, 3, 4, 5];
const result2 = array1.splice(0, 2);
console.log(result2); // [1,2]
console.log(array1); // [3,4,5]

//slice -> return a section of an array  ( start, end)
const array2 = array1.slice(2, 5); //[3,4,5]

//
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 90),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
console.log(students.find((student) => student.score === 90)); // find(predicate->true,)  단일 값

// Q6. make an array of enrolled students
console.log(students.filter((student) => student.enrolled)); // filter -> 여러 값

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
console.log(students.map((student) => student.age)); //같은 길이. 부속품만 뽑기.

// Q8. check if there is a student with the score lower than 50  -> true, false
console.log(students.some((student) => student.score < 50)); //일부 만족
console.log(!students.every((student) => student.score >= 50)); // 모든 만족

// Q9. compute students' average score

let sum = students.reduce((ac, student) => ac + student.score, 0); // init value => reduceRight   역순 (acc)
console.log(sum / students.length);

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
console.log(students.map((item) => item.score).join());
// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
//sort((a,b)=> a-b)
