/////Q1 function that reverse
let reverse = (mystring) => {
  let stringArray = mystring.split("");
  let reverseArray = stringArray.reverse();
  let reversedString = reverseArray.join("");
  console.log(reversedString);
};

///Q2 function that accepts a string converts the first letter of each to upperCase
let upperCase = (mystring) => {
  let stringArray = mystring.split(" ");
  let NewArray = [];
  for (let index = 0; index < stringArray.length; index++) {
    const element = stringArray[index];
    NewArray.push(
      stringArray[index].charAt(0).toUpperCase() + stringArray[index].slice(1)
    );
  }
  let newString = NewArray.join(" ");
  console.log(newString);
};

////Q3 count number Of Vowels in string
let numberOfVowels = (mystring) => {
  let vowels = "aeiouyYAEIOU";
  let count = 0;
  for (let index = 0; index < mystring.length; index++) {
    if (vowels.indexOf(mystring[index]) !== -1) {
      count += 1;
    }
  }
  console.log(count);
};

///Q4 check if the number is peime or not
let primeNum = (mynumber) => {
  if (mynumber <= 1) {
    console.log("false");
    return;
  } else if (mynumber == 2) {
    console.log("true");
    return;
  } else {
    for (let num = 2; num < mynumber; num++) {
      if (mynumber % num === 0) {
        console.log("false");
        return;
      }
    }
    console.log("true");
    return;
  }
};
///Q5 find the longest word within the string
let findLongestWord = (mystring) => {
  let myAaaray = mystring.split(" ");
  let longest = 0;
  let longestWord;

  for (const word of myAaaray) {
    if (word.length > longest) {
      longest = word.length;
    }
    if (word.length == longest) {
      longestWord = word;
    }
  }

  console.log(longestWord);
  return;
};
//Q6 sort string by Alphabets
let sortAlphabets = (mystring) => {
  let sortedWord = mystring.split("").sort().join("");
  console.log(sortedWord);
  return;
};

//Q7 sum of two number
let sum = (num1, num2) => {
  let total = num1 + num2;
  console.log("the total is " + total);
  return;
};

//Q8 age in days
let ageinDay = (age) => {
  let result = age * 365;
  console.log(result);
};

//Q9 convert houre to second
let convertHourtoSecond = (hour) => {
  let second = hour * 3600;
  console.log(second);
};

//Q10 check if the number is negative or 0
let negativeNum = (num) => {
  if (num <= 0) {
    console.log("true");
  } else {
    console.log("false");
  }
};

//Q11 count the  amount of digits in the given integer num
let amountOfDigits = (num) => {
  let numString = String(num);
  console.log(numString.length);
};

//Q12 convert object into array
let ObjectToArray = (object) => {
  const entries = Object.entries(object);
  console.log(entries);
};

//Q13 possible number of paths
let possiblePath = (num) => {
  let total = 1;
  for (let index = 1; index <= num; index++) {
    total *= index;
    console.log(total);
  }
};
//Q14 IdenticalLetters
let CheckIdenticalLetters = (mystring) => {
  for (let i = 1; i < mystring.length; i++) {
    if (mystring[i - 1] === mystring[i]) {
      console.log("true");
      return;
    }
  }
  console.log("false");
  return;
};

//15 get current date
let currentDate = (sp) => {
  today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //As January is 0.
  let yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  return mm + sp + dd + sp + yyyy;
};

////////////////////////////////////////////////////////////////
//Q16
let getDeffirenceBwtweenDate = (date1, date2) => {
  // To calculate the time difference of two dates
  let Difference_In_Time = date2.getTime() - date1.getTime();

  // To calculate the no. of days between two dates
  let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  //To display the final no. of days (result)
  console.log("Total number of days is " + Difference_In_Days);
};
//Q17 find hidden animal
let findHiddenAnimal = (mystring) => {
  animals = [
    "dog",
    "cat",
    "bat",
    "cock",
    "cow",
    "pig",
    "fox",
    "ant",
    "bird",
    "lion",
    "wolf",
    "deer",
    "bear",
    "frog",
    "hen",
    "mole",
    "duck",
    "goat",
  ];

  for (animal of animals) {
    let nameAnimal = prompt("find hide animal in" + mystring);
    if (nameAnimal == animal) {
      console.log("Excelent you find " + nameAnimal);
      mystring = mystring.replace("nameAnimal", "");
    } else {
      console.log("try again");
    }
  }
};

//Q18 larger number
let comparNum = (num1, num2) => {
  if (num1 < num2) {
    console.log(num2);
  } else {
    console.log(num1);
  }
};
///reverse("98765");
//upperCase("najla mohammad");
//numberOfVowels("nauyijla");
//primeNum(7);
//findLongestWord("find the longest word within the string");
//sortAlphabets("najla");
///sum(-9, -8);
///ageinDay(20);
//convertHourtoSecond(5);
//negativeNum(-3);
//amountOfDigits(100);
// const fullName = {
//   firstName: "najla",
//   lastName: "aldossary",
// };
// ObjectToArray(fullName);
//possiblePath(9);
//CheckIdenticalLetters("tool");
///console.log(currentDate("/"));
//getDeffirenceBwtweenDate(new Date("June 14, 2019"), new Date("June 20, 2019"));
//comparNum(50, 20);

findHiddenAnimal("goatcode");
