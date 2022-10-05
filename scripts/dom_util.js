import { hotels } from './index.js'

let nameInput = document.getElementById('name_input')
let pricePerDayInput = document.getElementById('price_per_day_input')
let quantityOfVisitorsPerYearInput = document.getElementById('quantity_of_visitors_per_year_input')
let quantityOfRoomsInput = document.getElementById('quantity_of_rooms_input')
export let itemsContainer = document.getElementById('items_container')

// local functions
let getItemId = (id) => `item-${id}`

let itemTemplate = ({ id, name, pricePerDay, quantityOfVisitorsPerYear, quantityOfRooms }) => `
    <div id="${getItemId(id)}" class="card-wrapper">
        <p>Name: ${name}</p>
        <p>Price per day: ${pricePerDay}</p>
        <p>Visitors per year: ${quantityOfVisitorsPerYear}</p>
        <p>Q-ty of rooms: ${quantityOfRooms}</p>
        <button id="edit_card_btn_${id}" class="edit_card_btn" >Edit</button>
        <button id="delete_card_btn_${id}" class="delete_card_btn">Delete</button>
    </div>
`

// exposed functions
export let clearInputs = () => {
    nameInput.value = ''
    pricePerDayInput.value = ''
    quantityOfVisitorsPerYearInput.value = ''
    quantityOfRoomsInput.value = ''
}

export let addItemToPage = ({ id, name, pricePerDay, quantityOfVisitorsPerYear, quantityOfRooms }) => {
    itemsContainer.insertAdjacentHTML(
        'afterbegin',
        itemTemplate({ id, name, pricePerDay, quantityOfVisitorsPerYear, quantityOfRooms })
    )
}

export let renderItemsList = () => {
    itemsContainer.innerHTML = ''

    fetch('http://localhost:3000/posts')
        .then(response => response.json())
        .then(items => {
            for (let item of items) {
                addItemToPage(item)
            }
        })

    // for (let item of items) {
    //     addItemToPage(item)
    // }
}

export let getInputValues = () => {
    return {
        name: nameInput.value,
        pricePerDay: pricePerDayInput.value,
        quantityOfVisitorsPerYear: quantityOfVisitorsPerYearInput.value,
        quantityOfRooms: quantityOfRoomsInput.value
    }
}

// event to edit or delete card
itemsContainer.onclick = (e) => {
    // get btn id
    let btnIdStr = e.target.getAttribute('id')

    // replace numbers and symbols and check if str contains edit or delete words
    // if e.target is edit btn -> 1) take obj from array and put it in modal window 2) create modal window, where our obj will be changed
    let typeBtn = btnIdStr.replace(/_/g, ' ')

    if (typeBtn.includes('edit')) {
        // split string to find id
        let btnId = btnIdStr.substring(14)

        fetch('http://localhost:3000/posts/' + btnId)
            .then(response => response.json())
            .then(item => {
                console.log(item)

                // find obj, open modal and fill inputs old values of object
                for (let field in item) {
                    if (field == 'id' && item[field] == btnId) {

                        // creating elements
                        let editCardModalContainer = document.createElement('div')
                        let h2 = document.createElement('h2')
                        let editCardForm = document.createElement('form')


                        let labelEditName = document.createElement('label')
                        let inputEditName = document.createElement('input')

                        let labelPricePerDay = document.createElement('label')
                        let inputPricePerDay = document.createElement('input')

                        let labelQuantityVisitorsPerYear = document.createElement('label')
                        let inputQuantityVisitorsPerYear = document.createElement('input')

                        let labelQuantityOfRooms = document.createElement('label')
                        let inputQuantityOfRooms = document.createElement('input')

                        let cancelBtn = document.createElement('p')
                        let submitBtn = document.createElement('p')

                        // inner text in elements
                        h2.innerText = 'Edit card'
                        editCardForm.setAttribute('name', 'editCardModalContainer')

                        labelEditName.innerHTML = '<label for="edit_name_input" style="color: #fff;">Name</label><br>'
                        inputEditName.innerHTML = '<input type="text" id="edit_name_input"><br>'

                        labelPricePerDay.innerHTML = '<br><label for="edit_price_per_day_input" style="color: #fff;">Price Per Day</label><br>'
                        inputPricePerDay.innerHTML = '<input type="number" id="edit_price_per_day_input"><br>'
                        inputPricePerDay.setAttribute('type', 'number')


                        labelQuantityVisitorsPerYear.innerHTML = '<br><label for="edit_quantity_of_visitors_per_year_input" style="color: #fff;">Quantity Of Visitors Per Year</label><br>'
                        inputQuantityVisitorsPerYear.innerHTML = '<input type="number" id="edit_quantity_of_visitors_per_year_input"><br>'
                        inputQuantityVisitorsPerYear.setAttribute('type', 'number')

                        labelQuantityOfRooms.innerHTML = '<br><label for="edit_quantity_of_rooms_input" style="color: #fff;">Quantity Of Rooms</label><br>'
                        inputQuantityOfRooms.innerHTML = '<input id="edit_quantity_of_rooms_input"><br>'
                        inputQuantityOfRooms.setAttribute('type', 'number')

                        cancelBtn.innerHTML = '<button id="edit_card_cancel_btn" class="edit-card-cancel-btn">Cancel</button>'
                        // cancelBtn.setAttribute('type', 'button')

                        submitBtn.innerHTML = '<button id="edit_card_submit_btn" class="edit-card-submit-btn">Save</button>'
                        submitBtn.setAttribute('type', 'submit')

                        // styles
                        editCardModalContainer.classList.add('editCardModalContainer')
                        labelEditName.style.color = '#fff'

                        editCardForm.style.marginTop = '20px'

                        inputEditName.style.marginTop = '5px'
                        inputEditName.style.marginBottom = '10px'
                        inputEditName.style.width = '180px'

                        inputPricePerDay.style.marginTop = '5px'
                        inputPricePerDay.style.marginBottom = '10px'
                        inputPricePerDay.style.width = '180px'

                        inputQuantityVisitorsPerYear.style.marginTop = '5px'
                        inputQuantityVisitorsPerYear.style.marginBottom = '10px'
                        inputQuantityVisitorsPerYear.style.width = '180px'

                        inputQuantityOfRooms.style.marginTop = '5px'
                        inputQuantityOfRooms.style.marginBottom = '10px'
                        inputQuantityOfRooms.style.width = '180px'

                        inputEditName.value = item['name']
                        inputPricePerDay.value = item['pricePerDay']
                        inputQuantityVisitorsPerYear.value = item['quantityOfVisitorsPerYear']
                        inputQuantityOfRooms.value = item['quantityOfRooms']

                        // close modal window

                        cancelBtn.addEventListener('click', (e) => {
                            e.preventDefault()
                            editCardModalContainer.classList.add('modal-container-div-reverse-anim')
                        })

                        submitBtn.addEventListener('click', (e) => {
                            e.preventDefault()

                            fetch('http://localhost:3000/posts/' + btnId, {
                                method: 'PATCH',
                                body: JSON.stringify({
                                    name: inputEditName.value,
                                    pricePerDay: inputPricePerDay.value,
                                    quantityOfVisitorsPerYear: inputQuantityVisitorsPerYear.value,
                                    quantityOfRooms: inputQuantityOfRooms.value
                                }),
                                headers: {
                                    'Content-Type': 'application/json; charset = UTF-8'
                                }
                            })
                                .then(response => response.json())
                                .then(hotel => {
                                    console.log(hotel)
                                    // fetch('http://localhost:3000/posts')
                                    //     .then(response => response.json())
                                    //     .then(items => {
                                    //         for (let item of items) {
                                    //             addItemToPage(item)
                                    //         }
                                    //     })
                                })

                            // render page after edit obj
                            // renderItemsList(hotels)

                            editCardModalContainer.classList.add('modal-container-div-reverse-anim')
                        })

                        // adding elements to page
                        editCardForm.append(
                            labelEditName,
                            inputEditName,
                            labelPricePerDay,
                            inputPricePerDay,
                            labelQuantityVisitorsPerYear,
                            inputQuantityVisitorsPerYear,
                            labelQuantityOfRooms,
                            inputQuantityOfRooms,
                            cancelBtn,
                            submitBtn
                        )

                        editCardModalContainer.append(h2, editCardForm,)
                        document.body.append(editCardModalContainer)
                    }
                }
            })


    } else if (typeBtn.includes('delete')) {
        // split string to find id
        let btnId = btnIdStr.substring(16)

        fetch('http://localhost:3000/posts/' + btnId, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(res => {
                console.log(res)
                fetch('http://localhost:3000/posts')
                    .then(response => response.json())
                    .then(items => {
                        for (let item of items) {
                            addItemToPage(item)
                        }
                    })
            })
    }
}