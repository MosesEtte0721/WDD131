// Get elements
let lmodified = document.querySelector("#lastModified");
let studentNameElement = document.querySelector(".authorName"); // corrected the id
let cYear = document.querySelector("#currentYear");

// Set student name
studentNameElement.textContent = "Moses Ette";
studentNameElement.style.fontWeight = "bold";
studentNameElement.style.fontSize = "2.4em";
studentNameElement.style.color = "black";

// Set current year
let currentYear = new Date().getFullYear();
console.log(`Current Year: ${currentYear}`);
cYear.textContent = ` ${currentYear} ${studentNameElement.textContent} Nigeria`;

// Format last modified date
let date = new Date();
let dateFormat = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "2-digit",
});
let timeFormat = new Intl.DateTimeFormat("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});
let dateString = dateFormat.format(date);
let timeString = timeFormat.format(date);

// Set last modified text
lmodified.textContent = `${dateString} at ${timeString}`;
lmodified.style.color = "black";
lmodified.style.fontWeight = "bold";

console.log(`Last Modified: ${dateString} at ${timeString}`);