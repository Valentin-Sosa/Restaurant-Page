function createDessertCard(dessert, price)
{
    const dessertCard = document.createElement("div");
    dessertCard.className = "card dessert";

    const dessertTitle = document.createElement("h2");
    dessertTitle.textContent = dessert;
    const dessertImg = document.createElement("img");
    dessertImg.id = dessert.replace(/ /g,"");
    const description = document.createElement("p");
    description.innerHTML = "<span>Description of dessert: </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ipsum accusantium! Cum pariatur est numquam."
    const dessertPrice = document.createElement("span");
    dessertPrice.innerHTML = `<span>Price:</span> $${price}`;

    dessertCard.appendChild(dessertTitle);
    dessertCard.appendChild(dessertImg);
    dessertCard.appendChild(description);
    dessertCard.appendChild(dessertPrice);

    return dessertCard;
}

function createMenu()
{
    const divMenu = document.createElement("div");
    divMenu.id = "menu";

    divMenu.appendChild(createDessertCard("Macarons", 5));
    divMenu.appendChild(createDessertCard("Brownie", 2));
    divMenu.appendChild(createDessertCard("Croissant",2));
    divMenu.appendChild(createDessertCard("Cheesecake", 3));
    divMenu.appendChild(createDessertCard("Chocolate ingot", 4));

    return divMenu;
}

export {createMenu};
