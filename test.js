// Task-01
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits);

// task-02
let student = ["Pavi", "Satha", "Santhu", "Resia", "Jasi"];
console.log(student);
let marks = [90, 75, 88, 95, 80];
console.log(marks);
let cities = ["jaffna", "colombo", "kandy", "galle", "trincomalee"];
console.log(cities);

// task-03
let animals = ["Dog", "Cat", "Rabbit", "Lion", "Tiger"];
console.log(animals[0]);
console.log(animals[2]);
let lastanimal = animals[animals.length-1];
console.log(lastanimal);

// task-04
let colors = ["Red", "Blue", "Green", "Yellow"];
colors[1]="Purple";
colors[3]="Black";
console.log(colors);



// task-05
let students = ["john", "Harry", "Ani", "Dilak", "Divi", "Kajan"];
console.log(students.length);
console.log(students[0]);
console.log(students[5]);


// task-06
let cart = ["Laptop", "Mouse"];
cart.push("Keyboard");
console.log(cart);

cart.push("Monitor");
console.log(cart);

cart.push("USB");
console.log(cart);


// task-07
let foods = ["Rice","Pizza","Burger","Pasta","Ice Cream"];
foods.pop();

foods.pop();
console.log(foods);

// task-08
let playlist = [];
playlist.push("Dreamers", "CalmDown", "stamina", "Digidi", "Nannare");
playlist.pop();
console.log(playlist);


// task-09
let queue = ["John", "Sara", "David"];
queue.unshift("Alex");
queue.shift();
console.log(queue);


//   task-10
let subjects = ["Maths","Science","ICT","English"];
console.log(subjects.includes("ICT"));
console.log(subjects.includes("History"));
console.log(subjects.includes("English"));


// task-11
let countries = ["Sri Lanka","India","Japan","Australia"];
console.log(countries.indexOf("Japan"));
console.log(countries.indexOf("India"));
console.log(countries.indexOf("Nepal"));


// task-12
let words = ["Welcome", "to", "JavaScript"];
console.log(words.join(" "));
console.log(words.join("_"));
console.log(words.join(","))





// task-13
let numbers = [10,20,30,40,50];
console.log(numbers)
console.log(numbers.reverse())

// task-14
let names = ["John","Alex","Mary","Sara"];
names.sort();
console.log(names);

let marks1 = [75,90,65,100,45];
marks1.sort();
console.log(marks1);


// task-15
let months = ["January","February","March","April","May","June"];
console.log(months.slice(0,3));
console.log(months.slice(3));
console.log(months.slice(2,4));

// task-16  
  let fruit = ["Apple","Banana","Orange","Mango"];
  console.log(fruit.splice(1,1));;
  fruit.splice(1,1, "Grapes");
  console.log(fruit);
  fruit.unshift("Pineapple");
  console.log(fruit);


//task-17
 let frontend = ["HTML","CSS","JavaScript"];
let backend = ["Node.js","Express"];
let fullstack =frontend.concat(backend)
console.log(fullstack)





 
