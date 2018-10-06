module.exports = function getZerosCount(number, base) {
  // your implementation

  if (prostoe(base)) {
      return zerosNumber(number, base);
  } else {
    let baseFactorize = baseFactorization(base);
    let f = baseFactorize[0];
    let min = Math.floor( zerosNumber(number, baseFactorize[0]) / countElInArray(baseFactorize[0], baseFactorize) );
    for ( let i = 1; i < baseFactorize.length; i++ ) {
      let newMin = Math.floor( zerosNumber(number, baseFactorize[i]) / countElInArray(baseFactorize[i], baseFactorize) );
      min = newMin < min ? newMin : min;
    }
    return min;
  }
  
  function countElInArray(f, array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === f) {
        count++;
      }
    }
    return count;
  }

  function prostoe(base) {
      for( let i = 2; i < base; i++) {
        if (base % i === 0) {
          return false;
        }
      }
      return true;
  }

  function baseFactorization(base) {
    let factors = [];
    let i = 2;
    while (i <= base) {
      if (base % i === 0) {
        base = base / i;
        factors.push(i);
        i = 1;
      }
      i++;
    }
    return factors;
  }

  function zerosNumber(number, base) {
    let count = 0;
    while (number >= base) {
      number = Math.floor(number / base);
      count = count + number;
    }
    return count;
  }

}