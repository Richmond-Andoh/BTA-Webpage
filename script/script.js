"use strict";

let number1 = document.querySelector(".firstCounter");
let number2 = document.querySelector(".secondCounter");
let number3 = document.querySelector(".lastCounter");

let count = 1;

//graduates count

let countGraduates = () => {
    setInterval(() => {
        if(count <= 749){
            count++
            number1.innerHTML = count + " +";
        }
    }, 5)
}

let countCompanies = () => {
    setInterval(() => {
       if(count <= 300){
        count ++;
        number2.innerHTML = count + "+";
       }
    }, 5)
}

let countMentors = () => {
    setInterval(() => {
      if(count <= 500){
        count ++;
        number3.innerHTML = count + " +";
      }
    }, 1)
}
countGraduates();
countCompanies();
countMentors();