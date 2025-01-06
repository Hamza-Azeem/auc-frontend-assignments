let increment = document.querySelector('#increment');
let decrement = document.querySelector("#decrement");
let reset = document.querySelector("#reset");
let counter = document.querySelector("#counter");
increment.addEventListener("click", () => {
    let temp = Number(counter.textContent);
    counter.innerText = temp + 1;
});
decrement.addEventListener("click", () => {
    let temp = Number(counter.textContent);
    if(temp == 0){
        return;
    }
    counter.innerText = temp - 1;
});
reset.addEventListener("click", () => {
    let temp = Number(counter.textContent);
    counter.innerText = 0;
});