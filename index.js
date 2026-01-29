const ships = [
    {
        name: "Mandalay",
        price: 17000000,
        availability: true,
    },
    {
        name: "Diamondback Explorer",
        price: 8500000,
        availability: false,
    },
    {
        name: "ASP Explorer",
        price: 11000000,
        availability: true,
    },
    {
        name: "Krait MKII",
        price: 48000000,
        availability: true,
    },
    {
        name: "Caspian Explorer",
        price: 198000000,
        availability: false
    }
];

const shipyard = document.getElementById("ships");
console.log(shipyard);
const htmlConst = ships.map(ship =>`
    <div class="shipArray">
        <p>${ship.name}</p>
        ${ship.availability ? `<p>${ship.price} cr</p>` : ``}
        <div class="pelletCenter">
            <div class="pellet ${ship.availability ? `green` : `red`}"></div>
        </div>
    </div>
    `).join("")
    console.log(htmlConst);
shipyard.innerHTML = htmlConst;    

//<p>${ship.price} cr</p>