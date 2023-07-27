let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
    count++;
    // console.log("The button was clicked" + " " + count + " " + "times!");
    console.log(`The button was clicked ${count} times!`);
    countEl.innerHTML = count;
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    let totalDataCount = " " + count + " - ";
    saveEl.textContent += totalDataCount;
    console.log(`${count} people are there!`);
    countEl.textContent = 0;
    count = 0;
}









































// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

