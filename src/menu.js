function createDessertCard(dessert,pathImg, price)
{
    const dessertCard = document.createElement("div");
    dessertCard.className = "card dessert";

    const dessertTitle = document.createElement("h2");
    dessertTitle.textContent = dessert;
    const dessertImg = document.createElement("img");
    dessertImg.src = pathImg;
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

    divMenu.appendChild(createDessertCard("Macarons","../images/macarons.avif", 5));
    divMenu.appendChild(createDessertCard("Brownie", "../images/brownies.webp", 2));
    divMenu.appendChild(createDessertCard("Croissant", "../images/croissant.webp",2));
    divMenu.appendChild(createDessertCard("Cheesecake", "../images/cheesecake.webp", 3));
    divMenu.appendChild(createDessertCard("Chocolate ingot", "../images/ingot2.jpeg", 4));

    return divMenu;
}

export {createMenu};
