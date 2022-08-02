/*
* buat array
* looping index array.length ( index = 5 )
* cek index, dan jumlahkah semua value kecuali value 
dalam index yang dilooping
* tampung disuatu wadah, kemudian cari nilai max dan min
 */

let store = [1, 2, 3, 4, 5];
let sum = [];
let temp = 0;
for ( let i = 0; i < store.length; i++) {
  if (i === 0) {
    temp = store[1] + store[2] + store[3] + store[4];
    sum.push(temp);
  } else if (i === 1) {
    temp = store[0] + store[2] + store[3] + store[4];
    sum.push(temp);
  }else if (i === 2) {
    temp = store[0] + store[1] + store[3] + store[4];
    sum.push(temp);
  }else if (i === 3) {
    temp = store[0] + store[1] + store[2] + store[4];
    sum.push(temp);
  }else {
    temp = store[0] + store[1] + store[2] + store[3];
    sum.push(temp);
  }
}
// 14, 13, 12, 11, 10
console.log("Array Sum = "+sum);
let Maximal = Math.max.apply(null, sum);
let Minimal = Math.min.apply(null, sum);
console.log("Nilai maximal : "+Maximal);
console.log("Nilai minimal : "+Minimal);