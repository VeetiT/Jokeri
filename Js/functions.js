const list = document.querySelector('table')
const button = document.querySelector('button')
const numbers = []
const text = document.querySelector('p')
const string = ''

let totalRows = 0

button.addEventListener('click',() => {
    for(let i = 0; i < 7; i++)
    numbers[i] = getRandomIntNumberInRange(0,9)
    console.log(numbers)
    addRow()
    
})

const getRandomIntNumberInRange = (min,max) =>{
    return Math.floor(Math.random() * max) + min;
}

const addRow = () => {
    const tr = list.insertRow()
    const td1 = tr.insertCell(0)
    totalRows++;
    text.innerHTML = 'Arvottuja rivejä ' + totalRows
    td1.innerHTML = '<a>'+ numbers[0]
     + '</a>'+ ' '+'<a>'+ numbers[1]
      + '</a>'+ ' '+'<a>'+ numbers[2]
       + '</a>'+ ' '+'<a>'+ numbers[3] + '</a>'+ ' '+'<a>'+ numbers[4]
        + '</a>'+ ' '+'<a>'+ numbers[5] + '</a>'+ ' '+'<a>'+ numbers[6] + '</a>'
}