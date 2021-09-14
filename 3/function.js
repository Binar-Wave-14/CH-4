document.write('<h1>Navigasi</h1>')

document.getElementById('main').append(`
    Hello World
`)

document.getElementById('feature').innerHTML = `
    <h1>Hello World</h1>
`

const elementGame = document.getElementsByClassName('game')
for (let i = 0; i < elementGame.length; i += 1) {
    elementGame[i].style.color = "red"
    elementGame[i].style.fontSize = "24px"
}

function submitForm() {
    const elementName = document.getElementsByName('info')
    for (let i = 0; i < elementName.length; i++) {
        console.log(elementName[i].value)
    }
}

const elementTagP = document.getElementsByTagName('p')
for (let i = 0; i < elementTagP.length; i++) {
    elementTagP[i].innerHTML = `Hello ${i}`
}

console.log(document.querySelector('.game'))
console.log(document.querySelectorAll('.game'))

console.log(document.querySelector('#feature'))
console.log(document.querySelectorAll('#feature'))

console.log(document.querySelector('p'))
console.log(document.querySelectorAll('p'))

function removeMe(selector) {
    document.querySelectorAll(selector).forEach((item) => {
        item.remove()
    })
}