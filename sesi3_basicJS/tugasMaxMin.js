/*
* buat array
* looping index array.length ( index = 5 )
* jumlahkan semua elemen dalam array
* hasil penjumlahan elemen, 
dikurangi dengan nilai array pada index yg sedang dilooping
* tampung disuatu wadah, kemudian cari nilai max dan min
 */

let store = [1, 2, 3, 4, 5];
let result = [];
let temp = 0;
let tempResult;
// console.log(store.reduce((acc, curr) => acc + curr))
for ( let i = 0; i < store.length; i++) {
  temp = store.reduce((acc, curr) => acc + curr);
  tempResult = temp - store[i];
  result.push(tempResult);
}
// 14, 13, 12, 11, 10
console.log("Array Sum = "+result);
let Maximal = Math.max.apply(null, result);
let Minimal = Math.min.apply(null, result);
console.log("Nilai maximal : "+Maximal);
console.log("Nilai minimal : "+Minimal);
