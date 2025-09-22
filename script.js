// function calculate(event) {
//   // Prevent form refresh
//   event.preventDefault();

//   // Get input values
//   let age = document.getElementById('age').value;
//   let weight = document.getElementById('weight').value;
//   let height = document.getElementById('height').value;

//   // Convert height from cm to meters
//   height = height / 100;

//   // Calculate BMI
//   let bmi = weight / (height * height);

//   // Round BMI to 1 decimal
//   bmi = bmi.toFixed(1);

//   // Show BMI value
//   document.getElementById('bmivalue').innerText = 'Your BMI: ' + bmi;

//   // Decide category
//   let category = '';
//   let position = 0; // for marker left %

//   if (bmi < 18.5) {
//     category = 'Underweight';
//     position = 10;
//   } else if (bmi >= 18.5 && bmi < 25) {
//     category = 'Normal weight';
//     position = 35;
//   } else if (bmi >= 25 && bmi < 30) {
//     category = 'Overweight';
//     position = 65;
//   } else {
//     category = 'Obese';
//     position = 90;
//   }

//   // Show category
//   document.getElementById('bmicategory').innerText = 'Category: ' + category;

//   // Move marker
//   document.getElementById('marker').style.left = position + '%';
// }




function calculate() {
    event.preventDefault();

    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value / 100; // cm → m
    let bmi = (weight / (height * height)).toFixed(1);

    document.getElementById("bmivalue").innerText = "BMI: " + bmi;

    let category = "";
    let angle = 0;

    if (bmi < 18.5) {
        category = "Underweight";
        angle = -90; // left side
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal";
        angle = -45;
    } else if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
        angle = 0;
    } else {
        category = "Obese";
        angle = 45; // right side
    }

    document.getElementById("bmicategory").innerText = category;
    document.getElementById("needle").style.transform = `rotate(${angle}deg)`;
}

