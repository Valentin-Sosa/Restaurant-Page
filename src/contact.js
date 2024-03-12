function createContact()
{
    const contactDiv = document.createElement("div");
    contactDiv.className = "card contact"
    const contactTitle = document.createElement("h2");
    contactTitle.textContent = "Contact Us";
    const phoneNumber = document.createElement("span");
    phoneNumber.innerHTML = "<span>📞 Phone Number:</span> +54 99-9999-9999";
    const email = document.createElement("span");
    email.innerHTML = "<span>✉️ Email:</span> dulceBakery@gmail.com";
    const address = document.createElement("span");
    address.innerHTML = "<span>📌 Address:</span> fakeDirection 123, Buenos Aires";
    const map = document.createElement("div");
    map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0167135736456!2d-58.38414532434085!3d-34.60373887295427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1710211797906!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

    contactDiv.appendChild(contactTitle);
    contactDiv.appendChild(phoneNumber);
    contactDiv.appendChild(email);
    contactDiv.appendChild(address);
    contactDiv.appendChild(map);

    return contactDiv;
}

export {createContact};