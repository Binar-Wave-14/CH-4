const sayHiTo = (name) => {
    return `Hai ${name.toUpperCase()}`
}

const luasTrapesium = (sisiBawah, sisiAtas, tinggi) => {
    const luas = ((sisiBawah + sisiAtas) / 2) * tinggi

    return luas
}

console.log(sayHiTo("Budi"))
console.log(luasTrapesium(10, 5, 3))

const funcA = (funcB) => {
    const luasTrapesium = funcB(5, 20, 3)
    console.log(`Jadi luas trapesium adalah ${luasTrapesium}`)
}

funcA(luasTrapesium)

class Car {
    constructor(_warna, _roda, _pintu) {
        this.warna = _warna
        this.roda = _roda
        this.pintu = _pintu
    }

    getWarna() {
        return this.warna
    }

    getRoda() {
        return this.roda
    }
}

const honda = new Car("hitam", 6, 4)
const tesla = new Car("merah", 10, 4)

console.log(honda)
console.log(tesla)

const honda2 = {
    warna: "hitam",
    roda: 6,
    pintu: 4
}

const honda3 = {
    warna: "merah",
    roda: 4,
    pintu: 2
}

console.log(honda2)
console.log(honda3)

class SiapaYangMenang {
    constructor(player1, com) {
        this.player = player1
        this.com = com
    }

    getSiapaYangMenang() {
        if (this.player === "batu" && this.com === "kertas") {
            return "com menang"
        }

        if (this.player === "gunting" && this.com === "kertas") {
            return "player menang"
        }
    }
}

const siapaYangMenang = new SiapaYangMenang("batu", "kertas")
console.log(siapaYangMenang.getSiapaYangMenang())


class Human {
    constructor(name, address) {
        this.name = name
        this.address = address
    }

    introduce() {
        console.log(`Hi, my name is ${this.name}`)
    }

    work() {
        console.log("Work!")
    }
}

class Programmer extends Human {
    constructor(name, address, languages) {
        super(name, address)
        this.languages =languages
    }

    introduce() {
        super.introduce()
        console.log(`I can write ${this.languages}`)
    }

    code() {
        console.log("Horey I will code!!!")
    }
}

const saeful = new Human("Saefulloh", "Jakata")

saeful.introduce()
saeful.work()

const ani = new Programmer("ani", "Jakarta", ["javascript", "php"])

ani.introduce()
ani.work()
ani.code()


const someVar = 10

console.log("ini adalah variabel: ", someVar, " tahun")
console.log(`ini adalah variabel ${someVar} tahun`)
