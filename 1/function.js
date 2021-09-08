console.log("hello world")

var $ = 10
let _ = 100

console.log($)
console.log(_)
console.log("Maslul")


var ageWithVar = 10
ageWithVar = 20

console.log(ageWithVar)

let ageWithLet = 10
ageWithLet = 20

console.log(ageWithLet)

// const ageWithConst = 10
// ageWithConst = 20

// console.log(ageWithConst)


var a = 0; 
let b = 0;
const c = 0;

if (true) {
  var a = 1;
  let b = 1; 
  const c = 1;

  console.log(a); // 1
  console.log(b); // 1
  console.log(c); // 1
}

console.log(a); // 1
console.log(b); // 0
console.log(c); // 0



let name = "John Doe"
let age = 100
let isMarried = true
let address = "Jakarta Pusat"
let isHaveChildren = undefined
let hobby = ["makan", "minum", "coding"]

let mobil = {
    roda: 4,
    pintu: 4,
    warna: 'merah',
    kaca: 'biru',
    penumpang: ['Andi', 'Isna', 'Budi', 'Aryo']
}


console.log(name)
console.log(age)
console.log(isMarried)
console.log(address)
console.log(isHaveChildren)
console.log(hobby[1])
console.log(mobil.warna)

console.log("Nama saya adalah ", name, " dan umur saya adalah ", age)
console.log(`Nama saya adalah ${name} dan umur saya adalah ${age}`)



const exampleForPush = ["ikan", "ayam", "tempe"]
exampleForPush.push("telur")
console.log(exampleForPush) // ["ikan", "ayam", "tempe", "telur"]

const exampleForPop = ["cumi", "susu", "kopi"]
exampleForPop.pop()
console.log(exampleForPop) // ["cumi", "susu"]

const exampleForShift = ["kopi", "susu", "gula"]
exampleForShift.shift()
console.log(exampleForShift) // ["susu", "gula"]

const exampleForUnshift =  ["kopi", "susu", "gula"]
exampleForUnshift.unshift("kedelai")
console.log(exampleForUnshift)

const exampleForForEach = [1,5,6,3]
exampleForForEach.forEach(function(value) {
    console.log(value)
})

const exampleForFilter = [1,5,6,3]
const resultOfFilter = exampleForFilter.filter(function(value) {
    return value > 2
})
console.log(resultOfFilter)

const exampleForMap = [1,5,6,3]
const resultOfMap = exampleForMap.map(function(value) {
    return value * 5
})
console.log(resultOfMap)

const exampleForConcat1 = ["a", "b"]
const exampleForConcat2 = ["c", "d"]
const resultOfConcat = exampleForConcat2.concat(exampleForConcat1)
console.log(resultOfConcat)

function penjumlahan(x, y) {
    // logic a
    // logic b
    return x + y
}

function luasSegitiga(alas, tinggi) {
    const luas = 0.5 * alas * tinggi

    return luas
}

console.log(
    penjumlahan(4, 10)
)
console.log(luasSegitiga(100, 500))

const luasPersegi = (sisi) => {
    const luas = sisi * sisi
    return luas
}

console.log(luasPersegi(10))