// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else if (totalSpent < 5000) {
//     discount = BASE_DISCOUNT;
//   }
//   // Change code above this line
//   return discount;
// }
// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   switch (password) {
//     case null:
//       message = 'Canceled by user!';
//       break;
//     case ADMIN_PASSWORD:
//       message = 'Welcome!';
//       break;
//     default:
//       message = 'Access denied, wrong password!';
//   }

//   return message;
// }

// console.log(checkPassword(null));

// function getShippingCost(country) {
//   let message;

//   switch (country) {
//     case 'China':
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case 'Chile':
//       price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case 'Australia':
//       price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case 'Jamaica':
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     default:
//       message = 'Sorry, there is no delivery to your country';
//   }

//   return message;
// }

// console.log(getShippingCost('Australia'));

// const arr = [1, 4, 6, 3, 6];
// const newArr = arr.slice(0, 3);
// console.log(newArr);
// console.log(arr);

// function calculateEngravingPrice(message, pricePerWord) {
//   return message.split(' ').length * pricePerWord;
// }

// console.log(calculateEngravingPrice('JavaScript is in my blood', 20));

// function makeStringFromArray(array, delimeter) {
//   return (string = array.join(delimeter));
// }

// console.log(makeStringFromArray(['top', 'picks', 'for', 'you'], '_'));

// function slugify(title) {
//   return title.toLowerCase().split(' ').join('-');
// }

// console.log(slugify('English for developer'));

// function makeArray(firstArray, secondArray, maxLength) {
//   const newArray = firstArray.concat(secondArray);
//   if (newArray.length > maxLength) {
//     return newArray.slice(0, maxLength);
//   } else {
//     return newArray;
//   }
// }
// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4));

// function calculateTotal(number) {
//   let total = 0;
//   for (let i = 0; i <= number; i += 1) {
//     total += i;
//   }
//   return total;
// }
// console.log(calculateTotal(18));

// function findLongestWord(string) {
// let words = string.split(' ');
// let longestWord;
// for (let word of words) {
//   longestWord = word[0];
//   console.log(word);
//   if (longestWord.length > word.length) {
//     console.log(longestWord.length);
//     word = longestWord;
//   }
// }
// return longestWord;
// let longestWord = '';
// for (const elem of string) {
//   console.log(elem);
//   if (elem.length > string.length[0]) {
//     elem.length = longestWord;
//   }
// }
// return longestWord;
// const stringByWords = string.split(' ');
// let longestWord = stringByWords[0];
// // console.log(longestWord);
// for (const elem of stringByWords) {
//   if (elem.length < longestWord.length) {
//     longestWord = elem.length;
//   }
//   // console.log(elem);
// }
// return longestWord;

//   const stringByWords = string.split(' ');
//   let longestWord = '';
//   console.log(stringByWords);
//   for (let i = 0; i < stringByWords.length; i += 1) {
//     if (longestWord.length < stringByWords[i].length) {
//       longestWord = stringByWords[i];
//     }
//   }
//   return longestWord;
// }
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));

// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   for (let i = min; i <= max; i += 1) {
//     console.log(i);
//     numbers.push(i);
//   }

//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));

// function filterArray(numbers, value) {
//   const result = [];

//   for (const number of numbers) {
//     if (number > value) {
//       result.push(number);
//     }
//   }
//   return result;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// function getCommonElements(array1, array2) {
//   const result = [];

//   for (const elemOfFirstArray of array1) {
//     if (array2.includes(elemOfFirstArray)) {
//       result.push(elemOfFirstArray);
//     }
//   }
//   return result;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));

// function getEvenNumbers(start, end) {
//   const result = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       result.push(i);
//     }
//   }
//   return result;
// }
// console.log(getEvenNumbers(6, 12));

// function fn() {
//   for (let i = 0; i <= 5; i += 1) {
//     console.log(i);

//     if (i === 3) {
//       console.log('Знайшли число 3, робимо повернення, перериваючи цикл і функцію');
//       return i;
//     }
//   }

//   // Цей console.log не виконається
//   console.log('Лог після циклу в тілі функції');
// }

// const result = fn();
// console.log('Лог після виходу з функції');
// console.log(`Результат виконання функції ${result}`);

// const user = {
//   name: 'Roman',
//   surname: 'Markanych',
//   age: 23,
//   position: 'junior',
//   hobbies: ['coding', 'learning English', 'table games'],

// getAge() {
//   console.log(this.age);
// },

// addHobbies(nameHobby) {
//   this.hobbies.push(nameHobby);
// },
// };
// for (const key of Object.keys(user)) {
//   console.log(user[key]);
// }

// console.log(user);
// console.log(Object.values(user));
// console.log(Object.keys(user));
// console.log(Object.keys(user).length);

// const userSurname = 'surname';
// console.log(Object.entries(user));
// console.log(user[userSurname]);
// user.getAge();
// user.addHobbies('watching footbal');

// function countProps(object) {
//   let propCount = 0;

//   for (key in object) {
//     // console.log(object[key]);
//     if (object.hasOwnProperty(key)) {
//       // console.log(object.hasOwnProperty(key));
//       propCount += object.hasOwnProperty(key);
//     }
//   }
//   return propCount;
// }

// console.log(countProps({ name: 'Mango', age: 2 }));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   const keys = products;
//   for (const key of keys) {
//     if (productName === key.name) {
//       return key.price;
//     }
//   }
//   return null;
// }
// console.log(getProductPrice('Gripf'));

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const res = [];
//   if (products[0].hasOwnProperty(propName)) {
//     console.log(products[0]);
//     for (const product of products) {
//       res.push(product[propName]);
//     }
//   }
//   return res;
// }
// console.log(getAllPropValues('quantity'));

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;
//   for (const product of products) {
//     if (product.name === productName) {
//       totalPrice += product.price * product.quantity;
//     }
//   }
//   return totalPrice;
// }
// console.log(calculateTotalPrice('Radar'));

// function findMatches(numArray, ...nums) {
//   const matches = [];
//   for (let num of nums) {
//     if (numArray.includes(num)) {
//       matches.push(num);
//     }
//   }

//   return matches;
// }

// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));

// function monkeyCount(n) {
//   const arr = [];
//   for (let i = 1; i < n; i += 1) {
//     arr.push(i);
//   }
//   return arr;
// }

// function divisibleBy(numbers, divisor) {
//   const result = [];
//   for (let number of numbers) {
//     if (number % divisor === 0) {
//       result.push(number);
//     }
//   }
//   return result;
// }

// console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],

//   updateBook(oldName, newName) {
//     let index = this.books.indexOf(oldName);
//     this.books.splice(index, 1, newName);
//   },
// };

// bookShelf.updateBook('Haze', 'Dungeon chronicles');

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         this.potions.push(newPotion);
//         return;
//       }
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
//   },
//   removePotion(potionName) {
//     for (let i = 0; i <= this.potions.length; i += 1) {
//       if (potionName === this.potions[i].name) {
//         this.potions.splice(i, 1);
//         return;
//       }
//       return `Potion ${potionName} is not in inventory!`;
//     }
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i <= this.potions.length; i += 1) {
//       if (oldName === this.potions[i].name) {
//         this.potions.splice(i, 1, newName);
//         return;
//       }
//       return `Potion ${oldName} is not in inventory!`;
//     }
//   },
// };

// console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
// console.log(atTheOldToad.addPotion({ name: 'Power potion', price: 270 }));

// console.log(atTheOldToad.removePotion('Dragon breath'));

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion'));
// console.log(atTheOldToad);

// function digitize(n) {
//   return (n + '').split('').reverse().map(Number);
// }
// console.log(digitize(35231));

// function changeEven(numbers, value) {
//   // Change code below this line
//   let result = [];
//   numbers.forEach(element => {
//     if (element % 2 === 0) {
//       result.push(element + value);
//     } else if (element % 2 !== 0) {
//       result.push(element);
//     }
//   });
//   return result;

// Change code above this line
// }

// function changeEven(numbers, value) {
//   // Change code below this line
//   let result = [];
//   numbers.forEach(element => {
//     element % 2 === 0 ? result.push(element + value) : result.push(element);
//   });
//   return result;

//   // Change code above this line
// }

// console.log(changeEven([17, 24, 68, 31, 42], 100));

// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));

// const cars = [
//   {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: 'Honda',
//     model: 'Accord',
//     type: 'sedan',
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: 'Mazda',
//     model: 'Mazda 6',
//     type: 'sedan',
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: 'Mazda',
//     model: 'CX-9',
//     type: 'suv',
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: 'Toyota',
//     model: '4Runner',
//     type: 'suv',
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: 'Toyota',
//     model: 'Sequoia',
//     type: 'suv',
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: 'Toyota',
//     model: 'Tacoma',
//     type: 'truck',
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'F-150',
//     type: 'truck',
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'Fusion',
//     type: 'sedan',
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];

// const sortByAscendingAmount = array => [...array].sort((a, b) => a.amount - b.amount);

// const sortByAscendingAmount = array => [...array].model.sort();
// console.log(sortByAscendingAmount(cars));

// const sortByAscendingAmount = [...cars].sort(
//   (firstCar, secondCar) => firstCar.amount - secondCar.amount
// );
// console.log(cars);
// console.log(sortByAscendingAmount);

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];
// const getUsersWithFriend = (users, friendName) => users.filter(user => user.name == friendName);
// const allFriends = users.flatMap(user => user.friends);

// const getFriends = users => {
//   const allFriends = users.flatMap(user => user.friends);
//   const uniqueFriends = allFriends.filter(
//     (friend, array, index) => array.indexOf(friend) === index
//   );
//   return uniqueFriends;
// };
// console.log(getFriends(users));

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
//   .sort((a, b) => a.author.localeCompare(b.author))
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author);

// console.log(names);

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   // Change code above this line
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"
'use strict';
// let array = 4 - 'aw.5' + 0xf - '1e1';
// console.log(array);
// console.log(5 * '10');
// console.log(+'Infinity');
// console.log(+'0xf');
