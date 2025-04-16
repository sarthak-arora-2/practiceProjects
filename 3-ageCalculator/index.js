function calculateAge(){
    let dateInput = document.querySelector('.date').value  // returns a date in string value.
    let date = new Date(dateInput)  // converts the string date to date Object.
    let bornDate = date.getDate()
    let bornMonth = date.getMonth()+1
    let bornYear = date.getFullYear()
    // console.log(bornDate)
    // console.log(bornMonth)
    // console.log(bornYear)

    let newDate = new Date()  // converts the string date to date Object.
    let currentDate = newDate.getDate()
    let currentMonth = newDate.getMonth()+1
    let currentYear = newDate.getFullYear()
    // console.log(currentDate)
    // console.log(currentMonth)
    // console.log(currentYear)

    let age = currentYear - bornYear
    if (currentMonth-bornMonth < 0){
        age = age -1
    }
    else if (currentMonth - bornMonth === 0){
        if (currentDate - bornDate < 0){
            age = age - 1
        }
    }

    // console.log(age)
    document.querySelector('span').innerHTML = `Your age is ${age} years old`


}
let button = document.querySelector('button')
button.addEventListener('click', (e) => calculateAge())
