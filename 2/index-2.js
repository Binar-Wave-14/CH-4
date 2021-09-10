class Human {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    intro() {
        console.log('Hello Im human')
    }

    work() {
        console.log('work')
    }
}

const Penyelamat = Base => class extends Base {
    menyelamatkanManusia() {
        console.log('halo saya menyelamatkan manusia')
    }
}


class Dokter extends Penyelamat(Human) {
    constructor(name, age, hobby) {
        super(name, age)
        this.hobby = hobby
    }

    makan() {
        console.log('saya sedang makan')
    }
}

class Polisi extends Penyelamat(Human) {
    constructor(name, age, hobby) {
        super(name, age)
        this.hobby = hobby
    }

    memantauLaluLintas() {
        console.log('saya sedang memantau lalu lintas')
    }
}

class Tentara extends Penyelamat(Human) {
    constructor(name, age, hobby) {
        super(name, age)
        this.hobby = hobby
    }

    memantauPergerakanMusuh() {
        console.log('saya sedang memantau pergerakan musuh')
    }
}

const dokter = new Dokter("ani", 100, "makan")
const polisi = new Polisi("budi", 150, "makan sate")
const tentara = new Tentara("beta", 50, "main kelereng")

dokter.menyelamatkanManusia()
polisi.menyelamatkanManusia()
tentara.menyelamatkanManusia()
