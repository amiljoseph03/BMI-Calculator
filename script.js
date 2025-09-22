

function calculate() {
    event.preventDefault();

    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value / 100; 
    let bmi = (weight / (height * height)).toFixed(1);
    let categoryText = document.getElementById('bmicategory');

    document.getElementById("bmivalue").innerText = "Your BMI is: " + bmi;

    let category = "";
    let angle = 0;

    if (bmi < 18.5) {
        category = "Underweight";
         categoryText.style.color = '#4fc3f7'; 
        angle = -90; 
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal";
        categoryText.style.color = '#81c784';
        angle = -45;
    } else if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
         categoryText.style.color = '#ffb74d';
        angle = 0;
    } else {
        category = "Obese";
         categoryText.style.color = '#e57373';
        angle = 45; 

    }

    document.getElementById("bmicategory").innerText = category;
    document.getElementById("needle").style.transform = `rotate(${angle}deg)`;
}

