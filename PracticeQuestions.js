////////////////////////////////////////////////////////////
//// JAVASCRIPT JS BASICS
////////////////////////////////////////////////////////////

const x = 6;

// 1. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.

function sumNum(a, b) {
  return a + b + x;
}

console.log("1: ", sumNum(1, 2));

// 2. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.

const sumNumArrow = (a, b) => {
  return a + b + x;
};

console.log("2: ", sumNumArrow(1, 2));

// 3. Write a function that returns another function. (use arrow functions please)

const funcOne = () => {
  const funcTwo = () => "Hello World!";
  return funcTwo;
};

console.log("3: ", funcOne()());

// 4. Given the following code explain why the function that returns from getFunction still has access to variable "y" even when "y" is not a global variable.

const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};

console.log(getFunction()(2));

console.log(
  "4: Because JavaScript has the concept of closure. The insideFunction is enclosed with references to its surrounding state which gives it access to the outer function's scope."
);

// 5. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and and log the result to the console.
// Make sure to handle errors that could be thrown by "couldThrowError()"
// If there is an error log "sorry, there was an error" to the console.

const couldThrowError = () => {
  if (Math.ceil(Math.random() * 2) < 2) {
    throw new Error("Error was thrown");
  }

  return "success";
};

const myFunc = (myCallback) => {
  try {
    return console.log("5: ", myCallback());
  } catch (error) {
    console.log(error.message);
    return console.log("5: Sorry, there was an error");
  }
};

myFunc(couldThrowError);

////////////////////////////////////////////////////////////
//// Handling data:
////////////////////////////////////////////////////////////

const userData = [
  {
    id: "111",
    name: "Peter",
    favorites: {
      food: ["burgers", "pizza"],
      activites: ["basketball", "baseball"],
    },
  },
  {
    id: "222",
    name: "John",
    favorites: {
      food: ["burgers", "tacos"],
      activites: ["football", "golf"],
    },
  },
  {
    id: "333",
    name: "Mary",
    favorites: {
      food: ["pizza", "tacos", "fried chicken"],
      activites: ["volleyball", "softball"],
    },
  },
];

// 6. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]
userData.map((el) => {
  console.log("6: ");
  const id = el.id;
  const favoriteFoods = el.favorites.food.length;
  return console.log({ id: id, favoriteFoods: favoriteFoods });
});

// 7. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

const pizzaFolks = userData.reduce((pizzaArr, current) => {
  if (current.favorites.food.includes("pizza")) {
    pizzaArr.push(current.name);
  }
  return pizzaArr;
}, []);

console.log("7: Folks that like pizza: ", pizzaFolks);

// 8. Show an an example of a switch statement being used

const students = [
  { firstName: "Bob", age: 17 },
  { firstName: "Jane", age: 40 },
  { firstName: "Tim", age: 22 },
  { firstName: "Becca", age: 18 },
  { firstName: "Roger", age: "banana" },
];

students.map((student) => {
  console.log("8: ");
  switch (true) {
    case student.age < 18: {
      console.log("High school aged and in Advanced Placement Program.");
      break;
    }
    case student.age === 18:
      console.log(
        "Inquire, is student in high school and in Advanced Placement Program, or is student graduated and now enrolled in college."
      );
      break;
    case student.age > 18:
      console.log("College Student");
      break;
    default:
      console.log("Error there is something wrong with student age");
  }
});

////////////////////////////////////////////////////////////
//// OBJECT AND ARRAY DESTRUCTURING
////////////////////////////////////////////////////////////

const userPersonalData = {
  name: "peter",
  age: "56",
  birthday: "jan 1st",
};
const userGameData = {
  score: 4546,
  accomplishments: [
    "won award for being good gamer",
    "won 1st win",
    "got good score on the weekend",
  ],
};

// 9. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
// const user = {
//  name: 'peter',
//  age: '56',
//  birthday: 'jan 1st',
//  score: 4546,
//  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
// }

const userNine = { ...userPersonalData, ...userGameData };
console.log("9: ", userNine);

// 10. Make a copy of your new user object but override the birthday to december 31st

const copyUserNine = { ...userNine, birthday: "december 31st" };
console.log("10: ", copyUserNine);

// 11. Use the spread operator to make a copy of the accomplishments array and store it in a new variable

const copy = [...userGameData.accomplishments];
console.log("11: accomplishments ", copy);

//  12.Given the object bellow, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable name food

var user = {
  name: "pete",
  age: "32",
  favoriteThings: {
    food: ["pizza", "tacos", "burgers", "italian"],
    movies: [],
  },
};

const {
  favoriteThings: { food },
} = user;

console.log("12: ", food);

// 13. Once you have grabbed the favorite foods. Destructure the food array to grab only the first 2 values. //

const [one, two] = food;

console.log("13: ", one, " and ", two);

// 14. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food.
//    the food variable should have all the array items starting from the third one.
const data = ["peter", "34", "apple", "oranges", "pizza", "tacos"];

const [name] = data;
const [, age] = data;
const [, , ...foodz] = data;
console.log("14: ", name, ", ", age, ", and ", foodz);

// 15. use object destructuring to grab the following from the userInfo object:
// - The user's name and in a constant named userName.
// - The user's favorite food array and name it favoriteFood.
// - The users first favorite thing (cars) and name it favoriteThing
// - The users second favorite thing (jewelry) and name it secondfavoriteThing

const userInfo = {
  name: "Peter",
  favorites: {
    needs: {
      food: ["burger", "pizza", "tacos", "fried chicken", "sushi"],
    },
    wants: {
      things: ["cars", "jewelry"],
    },
  },
};

const { name: userName } = userInfo;
const {
  favorites: {
    needs: { food: favoriteFood },
  },
} = userInfo;
const {
  favorites: {
    wants: {
      things: [favoriteThing],
    },
  },
} = userInfo;
const {
  favorites: {
    wants: {
      things: [, secondfavoriteThing],
    },
  },
} = userInfo;

console.log(
  "15: ",
  userName,
  ", ",
  favoriteFood,
  ", ",
  favoriteThing,
  ", and ",
  secondfavoriteThing
);

var fetchData = () =>
  new Promise((resolve, reject) => {
    console.log("fetchingData from imaginary database");
    setTimeout(() => {
      try {
        // fetchingData from imaginary database
        if (Math.ceil(Math.random() * 2) < 2) {
          throw new Error("Error!");
        }
        resolve({ name: "john", age: 42 });
      } catch (error) {
        reject(error);
      }
    }, 5000);
  });

module.exports = fetchData;

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function that returns a promise.
var fetchData = () =>
  new Promise((resolve, reject) => {
    console.log("fetchingData from imaginary database");
    setTimeout(() => {
      try {
        // fetchingData from imaginary database
        if (Math.ceil(Math.random() * 2) < 2) {
          throw new Error("Error!");
        }
        resolve({ name: "john", age: 42 });
      } catch (error) {
        reject(error);
      }
    }, 5000);
  });

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
fetchData().then(
  (val) => {
    console.log("16: ", val);
  },
  (err) => {
    console.log("16: ", err.message);
  }
);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 17. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const asyncFetch = async () => {
  try {
    const newVar = await fetchData();
    console.log("17: ", newVar);
  } catch (error) {
    console.log("17: ", error.message);
  }
};

asyncFetch();
