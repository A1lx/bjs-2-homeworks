"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;

  if (d > 0) {
    let firstX = (-b + Math.sqrt(d)) / (2 * a); // 2 корня
    let secondX = (-b - Math.sqrt(d)) / (2 * a);
    arr[0] = firstX;
    arr[1] = secondX;
    return arr;
  } else if (d === 0) {
    let x = -b / (2 * a); // один корень
    arr[0] = x;
    return arr;
  } else {
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) === true) {
    console.log('Процентная ставка введена неверно');
    return false;
  }
  if (isNaN(contribution) === true) {
    console.log('Сумма первоначального взноса введена неверно');
    return false;
  }
  if (isNaN(amount) === true) {
    console.log('Сумма кредита введена неверно');
    return false;
  }

  let monthPercent = percent / 100 / 12;  
  let debt = amount - contribution;       
  let monthlyFee = debt * (monthPercent + (monthPercent / (((1 + monthPercent) ** countMonths) - 1))); 
  let totalAmount = parseFloat((monthlyFee * countMonths).toFixed(2));

  return totalAmount;
}