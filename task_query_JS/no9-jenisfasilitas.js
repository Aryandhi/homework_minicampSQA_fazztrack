const apartmentFacilities = [
  {
      cluster:'A', 
      facilities: {"mosque": true, "park": false, "gym": true },
  },
  {
      cluster:'B', 
      facilities: {"mosque": false, "park": false, "gym": true },
 },
 {
      cluster:'C', 
      facilities: {"mosque": true, "park": true, "gym": false },
  },
  {
      cluster:'D', 
      facilities:{"mosque": false, "park": true, "gym": false },
  },
  {
      cluster:'E', 
      facilities:{"mosque": false, "park": true, "gym": true },
  },
];

let hasil = getApartmentByFacility("park");
// getApartmentByFacility("park");

function getApartmentByFacility(fasilitas) {
  // console.log(apartmentFacilities[4].facilities.park)
  // console.log(fasilitas)
  let result = [];
  let hitung = 0;

  for(let i = 0; i < apartmentFacilities.length; i++){
      if(fasilitas == "mosque"){
          let nilai = apartmentFacilities[i].facilities.mosque;
          if(nilai == true){
              // console.log(nilai);
              let getcluster = apartmentFacilities[i].cluster;
              // console.log(getcluster);
              result[hitung] = getcluster;
              hitung++;
          }
      } else if (fasilitas == "park"){
          let nilai = apartmentFacilities[i].facilities.park;
          if(nilai == true){
              // console.log(nilai);
              let getcluster = apartmentFacilities[i].cluster;
              // console.log(getcluster);
              result[hitung] = getcluster;
              hitung++;
          }
      } else if (fasilitas == "gym"){
          let nilai = apartmentFacilities[i].facilities.gym;
          if(nilai == true){
              // console.log(nilai);
              let getcluster = apartmentFacilities[i].cluster;
              // console.log(getcluster);
              result[hitung] = getcluster;
              hitung++;
          }
      } else {
          result[hitung] = "Data Gak Ada";
      }
  }

  return result;
  
}
console.log (hasil)