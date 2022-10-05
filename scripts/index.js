import {
    itemsContainer,
    addItemToPage,
    clearInputs,
    renderItemsList,
    getInputValues
} from './dom_util.js'


let sortByTheMostExpensiveHotelBtn = document.getElementById('sort_by_the_most_expensive_hotel_btn')
let countPricePrintDiv = document.getElementById('count_price_print_div')
let totalSumOfHotelsPerDay = document.getElementById('total_sum_of_hotels_per_day')
let findButton = document.getElementById('find_button')
let cancelFindButton = document.getElementById('cancel_find_button')
let findInput = document.getElementById('find_input')

export let hotels = []

let addItem = ({ name, pricePerDay, quantityOfVisitorsPerYear, quantityOfRooms }) => {
    let generatedId = uuid.v1()

    let newItem = {
        id: generatedId,
        name,
        pricePerDay,
        quantityOfVisitorsPerYear,
        quantityOfRooms
    }

    // Example POST method implementation:
    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    postData('http://localhost:3000/posts', newItem)
        .then((data) => {
            console.log(data); // JSON data parsed by data.json() call
        });

    // hotels.push(newItem)

    addItemToPage(newItem)
}

document.forms.createHotelForm.onsubmit = (e) => {
    e.preventDefault()

    let { name, pricePerDay, quantityOfVisitorsPerYear, quantityOfRooms } = getInputValues()

    if (name == '' || pricePerDay == '' || quantityOfVisitorsPerYear == '' || quantityOfRooms == '') {
        // modal window
        let modalContainerDiv = document.createElement('div')
        let p = document.createElement('p')
        let btn = document.createElement('button')

        p.innerText = 'Please, fill all fields !'
        btn.innerText = 'Cancel'

        modalContainerDiv.classList.add('modal-container-div')
        p.classList.add('modal-container-text')
        btn.classList.add('modal-btn')

        btn.addEventListener('click', () => {
            modalContainerDiv.classList.add('modal-container-div-reverse-anim')
        })

        modalContainerDiv.append(p, btn)
        document.body.append(modalContainerDiv)
    } else {
        addItem({
            name,
            pricePerDay,
            quantityOfVisitorsPerYear,
            quantityOfRooms
        })

        clearInputs()
    }
}


// if user clicked on sort btn:
// first time -> getting start sorting
// second time -> page is rendering
let clickOnSortBtn = false

sortByTheMostExpensiveHotelBtn.addEventListener('click', () => {
    if (clickOnSortBtn) {
        clickOnSortBtn = false
        renderItemsList()
    } else {
        clickOnSortBtn = true
        fetch('http://localhost:3000/posts')
            .then(response => response.json())
            .then(hotels => {
                // clone array to print sorted one and when close - render another
                let hotelsCopy = JSON.parse(JSON.stringify(hotels));
                let sortHotels = hotelsCopy.sort((a, b) => {
                    return a.pricePerDay - b.pricePerDay
                })
                itemsContainer.innerHTML = ''

                for (let item of sortHotels) {
                    addItemToPage(item)
                }
            })
    }
})

// counts total sum of staying in every hotel per day
totalSumOfHotelsPerDay.addEventListener('click', () => {
    // clear div before insert string
    countPricePrintDiv.innerHTML = ''

    fetch('http://localhost:3000/posts')
        .then(response => response.json())
        .then(hotels => {
            // count totalSum
            let totalSum = 0
            for (let hotel of hotels) {
                for (let field in hotel) {
                    if (field === 'pricePerDay') {
                        totalSum += +(hotel[field])
                    }
                }
            }

            console.log(totalSum)

            // print string on site
            if (totalSum !== 0) {
                countPricePrintDiv.insertAdjacentHTML(
                    'beforeend',
                    `
            <br>
            <p id="printed_total_sum_string" style="color: #fff;">total sum: ${totalSum}</p>
            `
                )
            }
        })
})

// find button
findButton.addEventListener('click', (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/posts')
        .then(response => response.json())
        .then(hotels => {
            let foundHotels = hotels.filter(h => h.name.search(findInput.value) !== -1)

            itemsContainer.innerHTML = ''

            for (let item of foundHotels) {
                addItemToPage(item)
            }
        })
})

// cancel/reset find button
cancelFindButton.addEventListener('click', () => {
    renderItemsList()

    findInput.value = ''
})

// main code

renderItemsList()