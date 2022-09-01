cariUangKembalian(262000, 300000);

function cariUangKembalian(total_pembelian, uang_bayar) {
    let kembali = uang_bayar - total_pembelian;
    console.log("Total Pembelian: ", `${total_pembelian}`);
    console.log("Total Bayar: ", `${uang_bayar}`);
    console.log("Kembalian: ", `${kembali}`);

    let uang_pecahan = {
        saturb: 0,
        duarb: 0,
        limarb: 0,
        sepuluhrb: 0,
        limapuluhrb: 0,
    };
    
    while (kembali > 0) {
        if (kembali >= 50000) {
            limapuluhrb = Math.floor(kembali / 50000);
            kembali = kembali - (limapuluhrb * 50000);
            uang_pecahan.limapuluhrb = limapuluhrb;
        } else if (kembali >= 10000) {
            sepuluhrb = Math.floor(kembali / 10000);
            kembali = kembali - (sepuluhrb * 10000);
            uang_pecahan.sepuluhrb = sepuluhrb;
        } else if (kembali >= 5000){
            limarb = Math.floor(kembali / 5000);
            kembali = kembali - (limarb * 5000);
            uang_pecahan.limarb = limarb;
        } else if (kembali >= 2000){
            duarb = Math.floor(kembali / 2000);
            kembali = kembali - (duarb * 2000);
            uang_pecahan.duarb = duarb;
        } else {
            saturb = Math.floor(kembali / 1000);
            kembali = kembali - (saturb * 1000);
            uang_pecahan.saturb = saturb;
        }
    };

    console.log(uang_pecahan);
}