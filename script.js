

function calculate() {
    event.preventDefault();

    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value / 100; 
    let bmi = (weight / (height * height)).toFixed(1);

    document.getElementById("bmivalue").innerText = "BMI: " + bmi;

    let category = "";
    let angle = 0;

    if (bmi < 18.5) {
        category = "Underweight";
        angle = -90; 
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal";
        angle = -45;
    } else if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
        angle = 0;
    } else {
        category = "Obese";
        angle = 45; 
    }

    document.getElementById("bmicategory").innerText = category;
    document.getElementById("needle").style.transform = `rotate(${angle}deg)`;
}

