// Iteration 1: Names and Input

let hacker1 = "Jan Colomer";
console.log("The driver's name is " + hacker1);

let hacker2 = "Sullivan Biardeau";
console.log("The navigator's name is " + hacker2);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log("the driver has de longest name" + hacker1.length);
} else if (hacker1.length < hacker2.length) {
  console.log(
    "The navigator has the longest name. Num of characters: " + hacker2.length
  );
} else if (hacker1.length == hacker2.length) {
  console.log(
    "Oops you have the same number of characters. Number of characters: " +
      hacker1.length
  );
}


// Iteration 3: Loops

//3.1. Print all the characters of the driver's name, separated by a space and in capitals
let name_capital_spacebetween = "";
for (i = 0; i < hacker1.length; i++) {
  name_capital_spacebetween += hacker1[i].toUpperCase() + " ";
}

console.log(name_capital_spacebetween);

//3.2. Print all the characters of the navigator's name, in reverse order.
let name_reversed = "";
for (i = hacker2.length - 1; i >= 0; i--) {
  name_reversed += hacker2[i];
}

console.log(name_reversed);

//3.3. Depending on the lexicographic order of the strings, print:
if (hacker1[0] < hacker2[0]) {
  console.log("The driver's name goes first");
} else if (hacker1[0] > hacker2[0]) {
  console.log("The navigator's name goes first");
} else if ((hacker1[0] = hacker2[0])) {
  console.log("What? you both have the same name");
}

// Bonus

let paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet quis felis eget tempus. Nullam lobortis imperdiet arcu, vel eleifend libero eleifend sed. Fusce pharetra augue leo, vel scelerisque risus sagittis ac. Morbi mattis ligula vel orci volutpat mollis. Nulla tempus tempor semper. Curabitur maximus ullamcorper consectetur. Proin ex augue, iaculis at sapien in, blandit facilisis nisi. Aliquam erat volutpat. Cras quis risus venenatis, placerat arcu in, sagittis libero. In porttitor finibus neque nec lacinia. Duis sed magna quis magna maximus dictum. Vivamus vestibulum tellus sed tempor condimentum. Aenean malesuada velit dui, sit amet vehicula nisi pellentesque interdum. Phasellus imperdiet pharetra lacinia. Praesent purus mauris, iaculis vitae tempor ac, condimentum eget felis. Duis id mattis est, ac efficitur nisi. Phasellus venenatis rhoncus ante sit amet aliquam. Curabitur vel justo quam. Pellentesque vitae vehicula lorem. Nullam sodales ornare turpis. Sed rhoncus est at pellentesque condimentum. Maecenas leo ante, vehicula vitae enim sed, blandit mollis tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In purus erat, dapibus in porta vitae, aliquet a ex. Etiam pulvinar, quam sed maximus dapibus, purus sapien pellentesque sem, quis tincidunt elit lorem eu lectus. Integer sit amet nunc id nulla imperdiet pulvinar. Duis lorem erat, lacinia vel libero id, gravida ullamcorper est. Sed vel est porta, sollicitudin lacus ut, scelerisque felis. Phasellus id eleifend risus. Vivamus maximus nunc ut ipsum hendrerit, eget aliquam tellus placerat. Fusce metus arcu, venenatis eu mattis tristique, pellentesque eget tortor. Donec non tristique arcu. Nulla porta quam sed lacus aliquet, sed volutpat nibh ultrices. Quisque massa augue, egestas eget luctus rutrum, luctus eu neque. Duis diam orci, sollicitudin sed odio non, dictum hendrerit urna.";

let numOfWords = paragraph.split(" ");

console.log(numOfWords.length);

let etCounter = 0;

for (i = 0; i < numOfWords.length; i++) {
  if (numOfWords[i] == "et") {
    etCounter += 1;
  }
}

console.log(etCounter);