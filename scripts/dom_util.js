let nameInput = document.getElementById('name_input')
let pricePerDayInput = document.getElementById('price_per_day_input')
let quantityOfVisitorsPerYearInput = document.getElementById('quantity_of_visitors_per_year_input')
let quantityOfRoomsInput = document.getElementById('quantity_of_rooms_input')
let itemsContainer = document.getElementById('items_container')

// local functions
let getItemId = (id) => `item-${id}`

let itemTemplate = ({ id, name, pricePerDay, quantityOfVisitorsPerYear, quantityOfRooms }) => `
    <div id="${getItemId(id)}" class="card-wrapper">
        <p>Name: ${name}</p>
        <p>Price per day: ${pricePerDay}</p>
        <p>Visitors per year: ${quantityOfVisitorsPerYear}</p>
        <p>Q-ty of rooms: ${quantityOfRooms}</p>
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

export let renderItemsList = (items) => {
    itemsContainer.innerHTML = ''

    for (let item of items) {
        addItemToPage(item)
    }
}

export let getInputValues = () => {
    return {
        name: nameInput.value,
        pricePerDay: pricePerDayInput.value,
        quantityOfVisitorsPerYear: quantityOfVisitorsPerYearInput.value,
        quantityOfRooms: quantityOfRoomsInput.value
    }
}
