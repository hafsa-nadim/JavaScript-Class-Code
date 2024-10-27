// //(1) BOOK REFEARAL CODE :- 

// let firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// let lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// let fullNames = [];
//  for (var i = 0; i < firstNames.length; i++) {
//    for (var j = 0; j < lastNames.length; j++) {
// fullNames.push(firstNames[i] + lastNames[j] + "<br>");
//  }
//    }
// document.write(fullNames);

// [OUTPUT]

// BlueRay Zzz
// ,BlueRay Burp
// ,BlueRay Dogbone
// ,BlueRay Droop
// ,Upchuck Zzz
// ,Upchuck Burp
// ,Upchuck Dogbone
// ,Upchuck Droop
// ,Lojack Zzz
// ,Lojack Burp
// ,Lojack Dogbone
// ,Lojack Droop
// ,Gizmo Zzz
// ,Gizmo Burp
// ,Gizmo Dogbone
// ,Gizmo Droop
// ,Do-Rag Zzz
// ,Do-Rag Burp
// ,Do-Rag Dogbone
// ,Do-Rag Droop

//(2) ADDING ONE MORE ARRAY FOR BREAKING LINE: -

// let firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// let lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// let fullNames = [];
// // Generating full names
// for (var i = 0; i < firstNames.length; i++) {
//    for (var j = 0; j < lastNames.length; j++) {
//       fullNames.push(firstNames[i] + lastNames[j]);
//    }
// }
// // DISPLAY EACH FULL NAME ON A NEW LINE: -
// for (var k = 0; k < fullNames.length; k++) {
//    document.write(fullNames[k] + "<br>"); // Adds a line break after each name
// }

// [OUTPUT]

// BlueRay Zzz
// BlueRay Burp
// BlueRay Dogbone
// BlueRay Droop
// Upchuck Zzz
// Upchuck Burp
// Upchuck Dogbone
// Upchuck Droop
// Lojack Zzz
// Lojack Burp
// Lojack Dogbone
// Lojack Droop
// Gizmo Zzz
// Gizmo Burp
// Gizmo Dogbone
// Gizmo Droop
// Do-Rag Zzz
// Do-Rag Burp
// Do-Rag Dogbone
// Do-Rag Droop

// //(3) Generate and display each full name on a new line without storing in an array

// let firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// let lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// for (var i = 0; i < firstNames.length; i++) {
//    for (var j = 0; j < lastNames.length; j++) {
//       document.write(firstNames[i] + lastNames[j] + "<br>");
//    }
// }

// [OUTPUT]

// BlueRay Zzz
// BlueRay Burp
// BlueRay Dogbone
// BlueRay Droop
// Upchuck Zzz
// Upchuck Burp
// Upchuck Dogbone
// Upchuck Droop
// Lojack Zzz
// Lojack Burp
// Lojack Dogbone
// Lojack Droop
// Gizmo Zzz
// Gizmo Burp
// Gizmo Dogbone
// Gizmo Droop
// Do-Rag Zzz
// Do-Rag Burp
// Do-Rag Dogbone
// Do-Rag Droop

// //(4) WITH NEW join(); method: -

// let firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// let lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// let fullNames = [];

// // Generating full names with a line break for each entry
// for (var i = 0; i < firstNames.length; i++) {
//    for (var j = 0; j < lastNames.length; j++) {
//       fullNames.push(firstNames[i] + lastNames[j] + "<br>");
//    }
// }

// // Display all names at once
// document.write(fullNames.join("")); // Join all entries into a single string

// [OUTPUT]

// BlueRay Zzz
// BlueRay Burp
// BlueRay Dogbone
// BlueRay Droop
// Upchuck Zzz
// Upchuck Burp
// Upchuck Dogbone
// Upchuck Droop
// Lojack Zzz
// Lojack Burp
// Lojack Dogbone
// Lojack Droop
// Gizmo Zzz
// Gizmo Burp
// Gizmo Dogbone
// Gizmo Droop
// Do-Rag Zzz
// Do-Rag Burp
// Do-Rag Dogbone
// Do-Rag Droop

// (5) WITHOUT CREATING NEW ARRAY AND PUSH METHOD: -

let firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
let lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];

// Directly display each full name combination
for (var i = 0; i < firstNames.length; i++) {
   for (var j = 0; j < lastNames.length; j++) {
      document.write(firstNames[i] + lastNames[j] + "<br>"); // Display directly with a line break.
   }
}

// [OUTPUT]

// BlueRay Zzz
// BlueRay Burp
// BlueRay Dogbone
// BlueRay Droop
// Upchuck Zzz
// Upchuck Burp
// Upchuck Dogbone
// Upchuck Droop
// Lojack Zzz
// Lojack Burp
// Lojack Dogbone
// Lojack Droop
// Gizmo Zzz
// Gizmo Burp
// Gizmo Dogbone
// Gizmo Droop
// Do-Rag Zzz
// Do-Rag Burp
// Do-Rag Dogbone
// Do-Rag Droop
