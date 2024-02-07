const getInput = document.getElementById("name-input");
const getOutput = document.getElementById("name-output");

console.log(getOutput)

const getRes = getInput.addEventListener("input", (e) => {
    const inputValue = e.target.value.trim();

    console.log(e.target.value.trim())   

    getOutput.innerText = inputValue

})








