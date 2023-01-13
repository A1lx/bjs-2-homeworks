//Задача № 1
function cachingDecoratorNew(func) {
  const cashe = [];

  return function(...args) {
    const hash = md5(args);
    const objectFromCache = cashe.find(object => object.hash === hash);
    if (objectFromCache) {
      console.log("Из кэша: " + objectFromCache.value);
      return "Из кэша: " + objectFromCache.value;
    } 

    const value = func(...args);
    cashe.push({hash, value});
    if (cashe.length > 5) {
      cashe.shift();
    }
    console.log("Вычисляем: " + value);
    return "Вычисляем: " + value;    
  }
}

//Задача № 2

function debounceDecoratorNew(func, delay) {
  let timeoutId = null;

  function wrapper(...args) {
    clearTimeout(timeoutId);
    if (!timeoutId) {
      console.log(func(...args));
      wrapper.count++;
    }  
    timeoutId = setTimeout(() => {
      console.log(func(...args));
      wrapper.count++;
    }, delay);
    wrapper.allCount++;
  }

  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}