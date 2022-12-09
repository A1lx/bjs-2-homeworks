//1 задание
function getArrayParams(...arr) {
  let max = -Infinity;
  let min = Infinity;
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }

  avg = parseFloat((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}


//2 задание
function summElementsWorker(...arr) {
  let sumElements = 0;

  for (let i = 0; i < arr.length; i++) {
    sumElements += arr[i];
  }

  return sumElements;
}

function differenceMaxMinWorker(...arr) {
  let max = arr[0];
  let min = arr[0];

  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return (max - min);
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0; 
  let sumOddElement = 0;  

  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] % 2) === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  
  return (sumEvenElement - sumOddElement);
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0; 
  let countEvenElement = 0; 

  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] % 2) === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  return (sumEvenElement / countEvenElement);
}

//3 задание
function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  

  for (let i = 0; i < arrOfArr.length; i++) {
    const funcResult = func(...arrOfArr[i]);
    if (funcResult > maxWorkerResult) {
      maxWorkerResult = funcResult;
    }
  }

  return maxWorkerResult;
}
