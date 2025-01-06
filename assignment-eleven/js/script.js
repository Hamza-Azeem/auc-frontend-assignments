let result = document.getElementById("result");

function add(){
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    result.value = Number(firstNumber) + Number(secondNumber);
    result.classList.remove("d-none");
}

sub = ()=>{
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    result.value = Number(firstNumber) - Number(secondNumber);
    result.classList.remove("d-none");
}

clear1 = ()=>{
    let firstNumber = document.getElementById("firstNumber");
    let secondNumber = document.getElementById("secondNumber");
    console.log(firstNumber);
    console.log(secondNumber);
    firstNumber.value = "";
    secondNumber.value = "";
    result.value = "";
    result.classList.add("d-none");
}
