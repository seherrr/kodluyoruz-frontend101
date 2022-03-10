//DOM Etiketleri
let inputDOM = document.querySelector(`#task`)
let btnDOM = document.querySelector(`#liveToastBtn`)
let ulDOM = document.querySelector(`#list`)

btnDOM.addEventListener(`click`, function () {

    let liDOM = document.createElement(`li`)
    let info = inputDOM.value 
    liDOM.innerHTML = info 
    ulDOM.appendChild(liDOM) 
    inputDOM.value = ""; 

    localStorage.setItem(`item ${localStorage.length + 1}`, liDOM.innerText) 
    liDOM.addEventListener(`click`, function () {
        liDOM.style.textDecoration = "line-through"; 
        liDOM.style.cursor = "pointer"
    })
    liDOM.addEventListener(`dblclick`, function () { 
        ulDOM.removeChild(liDOM)
    })
})