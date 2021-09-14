// pengkondisian

// pengkondisian dengan if else
// flow:
// program akan mengecek kondisi
// => jika kondisinya sehat maka akan memberikan info bahwa user sehat
// => jika kondisinya selain sehat maka akan memberikan 
// info bahwa user tidak sehat
const cekKesehatan = (kondisi) => {
    return kondisi === "sehat" ? "anda sedang sehat!" : "anda tidak sehat, jangan keluar rumah!"
}

const cekKesehatanKeluarga = (ayah, ibu) => {
    return (ayah === "sehat" && ibu === "sehat") ? "keluarga sehat" : "ada keluarga yang sakit"
}

console.log(cekKesehatan("sehat"))
console.log(cekKesehatan("sakit"))

const cekKesehatanOrangTua = (kondisi) => {
    return kondisi === "sehat" && "orang tua sehat"
}

console.log(cekKesehatanOrangTua("sehat"))
console.log(cekKesehatanOrangTua("sakit"))


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
const nilaiRataRata = (arrOfNilai) => {
    let total = 0
    arrOfNilai.forEach((nilai) => {
        total += nilai
    })

    const rataRata = total / arrOfNilai.length
    
    let hasil = ''

    switch (rataRata) {
        case 80:
            hasil = 'nilai anda sudah bagus'
            break
        case 70:
            hasil = 'nilai anda standar'
            break
        case 60:
            hasil = 'nilai anda cukup'
            break
        case 50:
            hasil = 'anda tidak lulus'
            break
        default:
            hasil = 'angka tidak terdaftar'
            break
    }

    return hasil
}

console.log(nilaiRataRata([52, 40, 60]))



// pengulangan
const someArr = ["hello", "world"]
// someArr.length = 2

for (let i = 0; i < someArr.length; i += 1) {
    console.log("helo", i)
    console.log(someArr[i])
}

console.log("selesai")