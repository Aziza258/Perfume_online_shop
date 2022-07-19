const korzinaBtn = document.querySelector('.korzina')
const btnBuy = document.querySelectorAll('.buy-btns')
const korzina = document.querySelector('.korzina')
const basketModal = new bootstrap.Modal(document.querySelector('#jokeModal'))
const getMessange = document.querySelector('.modal-body')
const schet = document.querySelector('.count')
const clear = document.querySelector('.delete')
const elem = document.querySelectorAll('.get-messange')

let count = 0

const addKey = (data) => {
    for (let key in data) {
        getMessange.insertAdjacentHTML('beforeend', `<h5 class = 'get-messange'>${key} - <span class ='keyVal'>${data[key]}</span></h5>`)  
    }
}

btnBuy.forEach(element => {

    element.addEventListener('click', () => {
        count += 1
        schet.innerHTML = count
        const postObj = { userName: element.id }
        fetch('/cart', {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(postObj)
        }).then(response => response.json()).then(data => alert(data.message))
    })
    
})

function removeElement(elementClass) {
    let element = document.getElementsByClassName(elementClass);
    while (element.length) {
      element[0].parentNode.removeChild(element[0]);
    }
  }

korzina.addEventListener('click', (e) => {
    e.preventDefault()
    fetch('/korzina').then(response => response.json()).then(data => addKey(data), basketModal.show())
})

clear.addEventListener('click', () => {
    const elem = document.querySelector('.get-messange')
    count = 0
    schet.innerHTML = count
    const postObj = {}
    fetch('/delete', {
        method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(postObj)
    })
    elem.parentNode.removeChild(elem);
})