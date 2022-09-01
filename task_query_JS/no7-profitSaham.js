let saham1 = findHighestProfit([10, 2, 11, 20, 3, 5]);
let saham2 = findHighestProfit([33, 29, 11, 3]);

function findHighestProfit(saham) {
    let hasil = 0;
    let kata = "Tidak bisa mendapatkan profit pada hari-hari ini";
    for (let x = 0; x < saham.length; x++) {
        //  console.log("Looping x  : " + saham[x]);
        for (let y = (x+1); y < saham.length; y++) {
            // console.log("Looping y  : " + saham[y]);
            
            let hari_beli = saham[x];
            let hari_jual = saham[y];
            let hitung = hari_jual - hari_beli;

            if (hasil < hitung) {
                hasil = hitung;
            }

        }
    }

    if(hasil <= 0 ){
        return kata
    } else {
        return hasil
    }
    
}

console.log(saham1)
console.log(saham2)