//solution de Remy Portier de Fcc
function convertToRoman(num) {
  var nums = num;
  var result = "";
  var convey = [];
  var index = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
  var romans =['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];

  (function iterator() {
    for (var i = index.length -1; i >= 0; i--) {
      //console.log(index[i]);
      if(nums > 0) {
        if(nums >= index[i]) {
          result += romans[i];
          nums -= index[i];
          iterator();
          //console.log(iterator());
        }
      }
    }
  })();

  console.log(result);
  return result;
}
convertToRoman(1000);
