
const list = document.getElementsByTagName("ul")
console.log(list)


const length = list.length - 1;
console.log("Number of categories " + length)


// const ulElements = document.querySelectorAll("#categories ul");
// console.log(ulElements)

const headerTitle = document.querySelectorAll("h2")
console.log(headerTitle)

headerTitle.forEach((element) => {
console.log("Category: " + element.innerText),
console.log("Element: " + element.nextElementSibling.children.length)}


);


