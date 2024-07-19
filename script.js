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
        result.style.color = 'red'
    } else {
        romanCoverter(parseInt(numberInput.value))
        result.style.color = 'white'
    }

    e.preventDefault()
}

function romanCoverter(num) {
    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];

    let resultString = '';
    for (const { value, numeral } of romanNumerals) {
        while (num >= value) {
            resultString += numeral;
            num -= value;
        }
    }
    result.innerText = resultString;
}

convertBtn.addEventListener('click', checkInput)