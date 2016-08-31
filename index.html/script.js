'use strict';

(function (window) {
  alert(8);

  //let index =  [ 1,  5,  10,  50,  100, 500, 1000];
  //let romans = ['I','V','X', 'L', 'C', 'D', 'M'];
  //console.log(index[i])

  var castStringParam = void 0,
      obj = {},
      add = '',
      result = [],
      arrRomanOne = [{ key: 1, valeur: 'I' }, { key: 2, valeur: 'II' }, { key: 3, valeur: 'III' }, { key: 4, valeur: 'IV' }, { key: 5, valeur: 'V' }, { key: 6, valeur: 'VI' }, { key: 7, valeur: 'VII' }, { key: 8, valeur: 'VIII' }, { key: 9, valeur: 'IX' }],
      arrRomanTwo = [{ key: 1, valeur: 'X' }, { key: 2, valeur: 'XX' }, { key: 3, valeur: 'XXX' }, { key: 4, valeur: 'XL' }, { key: 5, valeur: 'L' }, { key: 6, valeur: 'LX' }, { key: 7, valeur: 'LXX' }, { key: 8, valeur: 'LXXX' }, { key: 9, valeur: 'XC' }],
      arrRomanThree = [{ key: 1, valeur: 'C' }, { key: 2, valeur: 'CC' }, { key: 3, valeur: 'CCC' }, { key: 4, valeur: 'CD' }, { key: 5, valeur: 'D' }, { key: 6, valeur: 'DD' }, { key: 7, valeur: 'DDD' }, { key: 8, valeur: 'DCCC' }, { key: 9, valeur: 'CM' }],
      arrRomanFour = [{ key: 1, valeur: 'M' }, { key: 2, valeur: 'MM' }, { key: 3, valeur: 'MMM' }, { key: 4, valeur: 'M' }, { key: 5, valeur: 'M' }, { key: 6, valeur: 'M' }, { key: 7, valeur: 'M' }, { key: 8, valeur: 'M' }, { key: 9, valeur: 'M' }];
  //let arrFun = [
  //'arrRomanOne', 
  //'arrRomanTwo', 
  //'arrRomanThree', 
  //'arrRomanFour ' 
  //];

  //num, arrRoman[j].key, arrRoman[j].valeur
  function oneNumber(num, obj, whichArray) {
    //loop in the array
    for (var j = 0; j < obj.length; j++) {
      //console.log(obj[j].key +' : '+ obj[j].valeur+' : '+j+' : '+num);
      if (obj[j].key == num) {
        add = obj[j].valeur;
      }
    }
    return result.push(add);
  }
  function convertToRoman(num) {
    castStringParam = num.toString();
    castStringParam.split('').map(function (a, i) {

      //console.log(a, i);
      //for (var k = 0; k <= i; k++) {
      //console.log(`${a} ${arrFun[i]}`);
      //console.log(i);
      //if (i == arrFun[i]) {
      ////console.log(arrFun[i]);
      //oneNumber(a, arrFun[i] )
      //}
      //}
      if (i === 0) {
        oneNumber(a, arrRomanOne);
      } else if (i == 1) {
        oneNumber(a, arrRomanTwo);
      } else if (i == 2) {
        oneNumber(a, arrRomanThree);
      } else if (i == 3) {
        oneNumber(a, arrRomanFour);
      }
    });
    //console.log(result = result.reverse().join('').toString());
    result = result.reverse().join('').toString();
    //console.log(typeof result);
    console.log(result);
    return result;
  }
  convertToRoman(2);
})(window);
//# sourceMappingURL=Roman-Numeral-Converter.js.map