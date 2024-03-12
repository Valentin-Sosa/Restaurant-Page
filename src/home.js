import HomeCard from '../images/homecard.webp';

function createHomeCard()
{
    const homeCard = document.createElement("div");
    homeCard.className = "card";
    homeCard.id = "description";
    const slogan = document.createElement("p");
    slogan.id = "slogan";
    slogan.textContent = '"Where making gourmet desserts is our passion."';
    const description = document.createElement("p");
    description.id = "welcome";
    description.innerHTML = "<span>Welcome to DulceBakery!</span> A place that is the product of years of effort and preparation."
    const image = document.createElement("img");
    image.src = HomeCard;
    homeCard.appendChild(description);
    homeCard.appendChild(slogan);
    homeCard.appendChild(image);

    return homeCard;
}

function createHoursCard()
{
    const hoursCard = document.createElement("div");
    hoursCard.className = "card hours";
    const hoursTitle = document.createElement("h2");
    hoursTitle.textContent = "Hours";
    const hours = document.createElement("div");
    const days = 
    {
        monday: document.createElement("span"),
        tuesday: document.createElement("span"),
        wednesday: document.createElement("span"),
        thursday: document.createElement("span"),
        friday: document.createElement("span"),
        saturday: document.createElement("span"),
        sunday: document.createElement("span"),
    };
    days.monday.innerHTML = "<span>Monday:</span> 8:00 - 19:00";
    days.tuesday.innerHTML = "<span>Tuesday:</span> 8:00 - 19:00";
    days.wednesday.innerHTML = "<span>Wednesday:</span> 8:00 - 19:00";
    days.thursday.innerHTML = "<span>Thursday:</span> 8:00 - 19:00";
    days.friday.innerHTML = "<span>Friday:</span> 8:00 - 19:00";
    days.saturday.innerHTML = "<span>Saturday:</span> 7:00 - 17:00";
    days.sunday.innerHTML = "<span>Sunday:</span> 7:00 - 17:00";

    hours.appendChild(days.monday);
    hours.appendChild(days.tuesday);
    hours.appendChild(days.wednesday);
    hours.appendChild(days.thursday);
    hours.appendChild(days.friday);
    hours.appendChild(days.saturday);
    hours.appendChild(days.sunday);


    hoursCard.appendChild(hoursTitle);
    hoursCard.appendChild(hours);

    return hoursCard;
}

function createHome()
{
    const divHome = document.createElement("div");
    divHome.id = "home";
    divHome.appendChild(createHomeCard());
    divHome.appendChild(createHoursCard());

   return divHome;
}

export {createHome};

