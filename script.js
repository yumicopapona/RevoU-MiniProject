var heightInput = document.querySelector(".height-input-field");
var weightInput = document.querySelector(".weight-input-field");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var statement = document.querySelector(".result-statement");
var BMI, height, weight;

calculateButton.addEventListener("click", ()=>{
    
    height = heightInput.value;
    weight = weightInput.value;
    BMI = (weight / ((height * height) / 10000)).toFixed(2); 
    result.innerText = BMI;

    if(BMI < 18.5){
        statement.innerText = "Hasil BMI dibawah 18.5";    
    }else if((BMI > 18.5) && (BMI <= 24.9)){
        statement.innerText = "Hasil BMI diantara 23 dan 24.9";
    }else if((BMI >= 25) && (BMI <= 29.9 )){
        statement.innerText = "Hasil BMI diantara 25 dan 29.9";
    }else{
        statement.innerText = "Anda berada dalam kategori overweight atay berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
    }
});



