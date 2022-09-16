
let views = document.querySelector("#amount");
let amount = document.querySelector("#amount-dollars");
let toggle = document.querySelector("#switch");
let values = [8 , 12 , 16 , 24 , 36]

function updateAmount(){
    const slider = document.querySelector("#input-slider");
    
    let sliderValue = Number(slider.value);
if(sliderValue == 8){
    views.innerHTML = "10k";
    amount.innerHTML = `$${sliderValue}`;
}
if(sliderValue == 12){
    views.innerHTML = "50k"
    amount.innerHTML = `$${sliderValue}`;
}
if(sliderValue == 16){
    views.innerHTML = "100k"
    amount.innerHTML = `$${sliderValue}`;
}
if(sliderValue == 24){
    views.innerHTML = "500k"
    amount.innerHTML = `$${sliderValue}`;
}
if(sliderValue == 36){
    views.innerHTML = "1M"
    amount.innerHTML = `$${sliderValue}`;
}

// console.log(sliderValue)

}

setInterval(updateAmount ,500 )