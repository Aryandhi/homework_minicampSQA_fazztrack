const transactions = [
  {
      id: 1, totalprice: 652000, day: "senin"
  },
  {
      id: 2, totalprice: 245000, day: "selasa"
  },
  {
      id: 3, totalprice: 214000, day: "rabu"
  },
  {
      id: 4, totalprice: 664000, day: "kamis"
  },
  {
      id: 5, totalprice: 144000, day: "minggu"
  },
  {
      id: 6, totalprice: 422000, day: "sabtu"
  },
  {
      id: 7, totalprice: 263000, day: "minggu"
  },
  {
      id: 8, totalprice: 655000, day: "rabu"
  },
  {
      id: 9, totalprice: 426000, day: "selasa"
  },
  {
      id: 10, totalprice: 512000, day: "kamis"
  },
];

const result = [
  {
      total: 0, day: "senin"
  },
  {
      total: 0, day: "selasa"
  },
  {
      total: 0, day: "rabu"
  },
  {
      total: 0, day: "kamis"
  },
  {
      total: 0, day: "jumat"
  },
  {
      total: 0, day: "sabtu"
  },
  {
      total: 0, day: "minggu"
  },
];


rekapitulasi();

function rekapitulasi(){
  let hitung = 0;

  for (let i = 0; i < transactions.length; i++) {
      let hari = transactions[i].day;

      if(hari == "senin"){
          let harga = transactions[i].totalprice;
          let cektotal = result[0].total;
          result[0].total = cektotal + harga;

      } else if (hari == "selasa"){
          let harga = transactions[i].totalprice;
          let cektotal = result[1].total;
          result[1].total = cektotal + harga;

      } else if (hari == "rabu"){
          let harga = transactions[i].totalprice;
          let cektotal = result[2].total;
          result[2].total = cektotal + harga;

      } else if (hari == "kamis"){
          let harga = transactions[i].totalprice;
          let cektotal = result[3].total;
          result[3].total = cektotal + harga;

      } else if (hari == "jumat"){
          let harga = transactions[i].totalprice;
          let cektotal = result[4].total;
          result[4].total = cektotal + harga;

      } else if (hari == "sabtu"){
          let harga = transactions[i].totalprice;
          let cektotal = result[5].total;
          result[5].total = cektotal + harga;

      } else {
          let harga = transactions[i].totalprice;
          let cektotal = result[6].total;
          result[6].total = cektotal + harga;

      }
  }
  console.log(result)

}