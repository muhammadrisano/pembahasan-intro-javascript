const namaLengkap = "muhammad risano akbar";
const phoneNumber = "0812312323";
const umur = 17;
const kodePos = "26000";
const pengalamanProgramming = [];

const riwayatPendidikan = [
  {
    nama: "SD NO 1 padanag",
    tingkat: "SD",
    tahunMulai: 2010,
    tahunBerakhir: 2016,
  },
  {
    nama: "SMP NO 1 padanag",
    tingkat: "SMP",
    tahunMulai: 2010,
    tahunBerakhir: 2016,
  },
  {
    nama: "SMA NO 1 padanag",
    tingkat: "SMA",
    tahunMulai: 2010,
    tahunBerakhir: 2016,
  },
];


let biodata = {
    namaLengkap,
    phoneNumber,
    umur,
    kodePos,
    pengalamanProgramming,
    makananFavorit: [
      {
        nama: "Rendang",
        asal: "Padang",
      },
      {
        nama: "keripik balado",
        asal: "Padang",
      },
    ],
    hobi: ["ngoding", "joging", "gaming"],
    riwayatPendidikan: [
      {
        nama: "SDN Ganeas 1",
        tingkat: "SD",
        tahunMulai: 2009,
        tahunBerakhir: 2016,
        jurusan: null,
        direkomendasikan: true,
        lokasi: "kabupaten Sumedang, Provinsi Jawa Barat",
        pengajarFavorit: ["Bu Neneng", "Pak Nana"],
        materiFavorite: [
          {
            nama: "Agama",
            date: "2009-2016",
            pengajar: undefined,
            alasan: ["mudah dimengerti", "guru nya baik"],
            apakahSulit: false,
          },
          {
            nama: "IPA",
            date: "2009-2016",
            pengajar: undefined,
            alasan: ["mudah dimengerti", "banyak praktek nya"],
            apakahSulit: false,
          },
          {
            nama: "Penjas",
            date: "2009-2016",
            pengajar: "Pak Rahmat",
            alasan: ["banyak praktek", "sering ke lapangan luar"],
            apakahSulit: false,
          },
        ],
      },
      {
        nama: "Mts Alfalahiyyah Cikoneng",
        tingkat: "Mts/SMP",
        tahunMulai: 2016,
        tahunBerakhir: 2018,
        jurusan: null,
        direkomendasikan: false,
        lokasi: "kabupaten Sumedang, Provinsi Jawa Barat",
        pengajarFavorit: ["Bu Nani", "Bu Endang"],
        materiFavorite: [
          {
            nama: "Aqidah",
            date: "2016-2018",
            pengajar: "Pak Atep",
            alasan: ["mudah dimengerti", "guru nya humoris"],
            apakahSulit: false,
          },
          {
            nama: "Penjas",
            date: "2016-2018",
            pengajar: "Pak Kemal",
            alasan: ["banyak praktek", "sering ke lapangan luar"],
            apakahSulit: false,
          },
          {
            nama: "Fiqih",
            date: "2016-2018",
            pengajar: "Pak Alfi",
            alasan: ["guru nya humoris", "mudah dimengerti"],
            apakahSulit: false,
          },
        ],
      },
      {
        nama: "SMK Informatika Sumedang",
        tingkat: "SMK",
        tahunMulai: 2018,
        tahunBerakhir: 2021,
        jurusan: "Rekayasa Perangkat Lunak",
        direkomendasikan: true,
        lokasi: "kabupaten Sumedang, Provinsi Jawa Barat",
        pengajarFavorit: ["Pak Masruri", "Bu Ana"],
        materiFavorite: [
          {
            nama: "Agama",
            date: "2018-2021",
            pengajar: "Pak Masruri",
            alasan: ["mudah dimengerti", "guru nya humoris"],
            apakahSulit: false,
          },
          {
            nama: "Penjas",
            date: "2018-2021",
            pengajar: undefined,
            alasan: ["banyak praktek", "sering ke lapangan luar"],
            apakahSulit: false,
          },
          {
            nama: "Database",
            date: "2018-2021",
            pengajar: "Bu Ana",
            alasan: ["guru nya sabar", "pelajarannya menantang"],
            apakahSulit: true,
          },
        ],
      },
    ],
  };

//   nomor 1

let storedObjects = {
}

const simpanData = (key, value)=>{
    // logic disini
    storedObjects = {
        ...storedObjects,
       [key]: value
    }
}

// nomor 2

const updateBiodata = (key, value)=>{
    // logic disini
    biodata = {
        ...biodata,
       [key]: value
    }
}

updateBiodata('printNama', (nama)=>{
    console.log(nama)
} )
updateBiodata('printEmail', (email)=>{
    console.log(email)
} )

biodata.printNama(biodata.namaLengkap)

// soal 3 a
const returnFirstName = (fullName) =>{
    const result = fullName.split(" ")
    return result[0]
// return fullName.split(" ")[0]
}
const hasil = returnFirstName("risano akbar")
console.log(hasil)

// soal 3b 
const returnDay = (clock) =>{
    if(clock>= 5 && clock < 12){
        return 'pagi'
    }else if (clock>= 12 && clock < 15){
        return 'siang'
    }else if  (clock>= 15 && clock < 18){
        return 'sore'
    }else if((clock>= 18 && clock < 24) ||(clock>= 0 && clock < 5) ){
        return 'malam'
    }else{
        return 'jam salah'
    }
}
const resultDay = returnDay(88)
console.log(resultDay)

// pertemuan 5
const greeting = (clock,functionReturnDay,fullName,functionReturnFirstName) =>{

    const waktu = functionReturnDay(clock)
    const namaDepan= functionReturnFirstName(fullName)

    console.log(`Selemat ${waktu}, ${namaDepan}`)
}
greeting(10, returnDay, 'Risano Akbar', returnFirstName)