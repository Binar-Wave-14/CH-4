// pengkondisian

// pengkondisian dengan if else
// flow:
// program akan mengecek kondisi
// => jika kondisinya sehat maka akan memberikan info bahwa user sehat
// => jika kondisinya selain sehat maka akan memberikan 
// info bahwa user tidak sehat
const cekKesehatan = (kondisi) => {
    if (kondisi === "sehat") {
        console.log("anda sedang sehat!")
    } else {
        console.log("anda tidak sehat, jangan keluar rumah!")
    }
}


// nilai >= 80 maka sempurna
// nilai 70 - 79 maka bagus
// nilai 60 - 69 maka cukup
// nilai 0 - 59 maka kurang
const hitungNilai = (nilai) => {
    if (nilai >= 80) {
        console.log("sempurna")
    } else if (nilai >= 70) {
        console.log("bagus")
    } else if (nilai >= 60) {
        console.log("cukup")
    } else if (nilai >= 0) {
        console.log("kurang")
    } else {
        console.log("nilai anda tidak memenuhi kriteria kami")
    }
}

hitungNilai(90)
hitungNilai(60)
hitungNilai(35)
hitungNilai(-3)

// pengkondisian dengan switch





// pengulangan