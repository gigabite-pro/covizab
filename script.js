
let selected = 'f1'
let cards = ['f1', 'f2', 'f3', 'f4', 'f5']

const udpateCards = () => {
    cards.forEach(cardId => {
        if (cardId === selected) {
            document.getElementById(cardId).classList.remove('inactive')
            document.getElementsByClassName('features-right')[0].style.backgroundImage = `url('/assets/features/${selected}.png')`
        } else {
            document.getElementById(cardId).classList.add('inactive')
        }
    })
}

const featureClick = (id) => {
    selected = id
    udpateCards()
}

let selectedStar = ''
let stars = ['s1', 's2', 's3', 's4', 's5']

const updateStars = () => {
    removeStars()
    const index = Number(selectedStar.split('s')[1]) + 1
    for (let i=1; i < index; i++) {
        const customID = `s${i}`
        document.getElementsByClassName(customID)[0].id = "selected"
    }
}

const removeStars = () => {
    for(let i=1; i<6; i++) {
        document.getElementsByClassName(`s${i}`)[0].removeAttribute('id')
    }
}

const starClick = (id) => {
    if(id === selectedStar) {
        removeStars()
    } else {
        selectedStar = id
        updateStars()
    }
}

window.onload = () => {
    udpateCards()
}