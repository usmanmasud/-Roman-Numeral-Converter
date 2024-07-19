const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('output');


const checkInput = (e) => {
    if (!numberInput.value) {
        result.innerText = "Please enter a valid number!"
        result.style.color = 'red' 
    } else if (numberInput.value < 0) {
        result.innerText = "Please enter a number greater than or equal to 1"
        result.style.color = 'red'
    } else if (numberInput.value >= 4000) {
        result.innerText = "Please enter a number less than or equal to 3999"
    }

    e.preventDefault()
}

convertBtn.addEventListener('click', checkInput)