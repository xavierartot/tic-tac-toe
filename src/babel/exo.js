
(function() {
  
let m  = [ 1,  2,  3,  4, 5,
           6,  7,  8,  9, 10,
          11, 12, 13, 14, 15,
          16, 17, 18, 19, 20]
//1 2 3 4 5 10 15 20 19 18 17 16 11 6 7 8 9 14 13 12
  let res = '', temp=''
  for (let i = 0, l = m.length; i < l; i++) {
    if (m[i]<=4 && m[i]>0) {
      if (temp !== undefined) {
        temp+=' ' +m[i]
      }
    } else if(m[i]===5){
      for (let j = 1; j < 5; j++) {
        temp +=' '+ 5*j
      }
    } else if(m[i] === 16 ){
      for (let l = m.length - 1; m[i] >= l; l--) {
        temp+=' '+l
      }
    } else if(i === 6 || i === 11){
      //temp += ' '+i  
    } else if(i >=6 && i <= 9){
      //temp += ' '+i
    } else if(i >= 14 && i <=12){
      for (let k = 2; k >= 0; k--) {
        //temp += ' '+i
      }
    } 
  }
  console.log(temp);

}());
