function calculateBill(){
    let billAmount = parseFloat(document.querySelector(".billAmt").value)
    let tipPercent = parseFloat(document.querySelector(".tipAmt").value)
    let tipAmount = (billAmount*tipPercent)/100
    let totalAmount = (billAmount + tipAmount).toFixed(2)
    document.querySelector(".final").innerHTML = totalAmount
    // console.log(totalAmount)
    }
    
    let button = document.querySelector("button")
    button.addEventListener('click', (e) => calculateBill())