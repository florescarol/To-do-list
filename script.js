let list = document.getElementById('toDoFinal')
let form = document.getElementById('form')
let newListInput = document.getElementById('input')

let newInput = []

form.addEventListener('submit', function(e){
    e.preventDefault()
    let listName = newListInput.value
    if (listName === null || listName === '') {
        return
    }
    newListInput.value = null
    newInput.push(listName)
    console.log(newInput)
    render()
})

// function render is the function responsible for
// transfering the new input back to the HTML doc
// and deleting the old input from the newInput[]

function render () {
    //newInput.forEach(function transfer(){
    let newItem = document.createElement('li')
    newItem.classList.add('item')
    newItem.innerText = newInput
    toDoFinal.appendChild(newItem)
    newInput = []
    //})
}
