function selectMe(selector) {
    const isElementExist = document.querySelectorAll('.bg-selected')
    let isSame = false
    isElementExist.forEach((element) => {
        const id = element.id
        const prefix = id.split('-')[0]
        const prefixSelector = selector.split('-')[0]
        if (prefixSelector === `#${prefix}`) {
            isSame = true
        }
    })

    if (isSame) {
        return
    }

    const element = document.querySelector(selector)
    element.className += "bg-selected"

    const isSelected = document.querySelectorAll('.bg-selected')
    if (isSelected.length === 2) {
        const selectOne = isSelected[0].id
        const selectTwo = isSelected[1].id

        const objOfOne = changeToObject(selectOne)
        const objOfTwo = changeToObject(selectTwo)

        const player = objOfOne['player'] || objOfTwo['player']
        const com = objOfOne['com'] || objOfTwo['com']
       
        alert(kalkulasiHasil(player.toUpperCase(), com.toUpperCase()))
    }
}

const changeToObject = (strSelected) => {
    const arrOfSelected = strSelected.split('-')

    if (arrOfSelected[0] === 'player') {
        return {
            player: arrOfSelected[1]
        }
    } else {
        return {
            com: arrOfSelected[1]
        }
    }
}

const kalkulasiHasil = (player, com) => {
    if (player === 'BATU') {
        return com === 'GUNTING' ? 'Player 1 menang': 'Com menang'
    } else if (player === 'KERTAS') {
        return com === 'BATU' ? 'Player 1 menang' : 'Com menang'
    } else if (player === 'GUNTING') {
        return com === 'KERTAS' ? 'Player 1 menang' : 'Com menang'
    }
    return 'Pilihan tidak tersedia'
}