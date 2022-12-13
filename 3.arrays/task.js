function compareArrays(arr1, arr2) {  
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    return true;
  } else {
    return false;
  }
}

function getUsersNamesInAgeRange(users, gender) {
  return users.filter(user => user.gender === gender).map(result => result.age).reduce((summ, userAge, index, array) => {
    summ += userAge;
    if (index === array.length - 1) {
      return summ / array.length;
    }
    return summ;
  }, 0);
}