import { createHome } from "./home";
import { createMenu } from "./menu";
import { createContact } from "./contact";
import './style.css';

const main = document.getElementById("content");
const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const contactBtn = document.getElementById("contact-btn");


function tabPages()
{
    let currentPage = "Home";
    main.appendChild(createHome());

    homeBtn.addEventListener("click", ()=>
    {
        if(currentPage !== "Home")
        {
            main.innerHTML = "";
            main.appendChild(createHome());
            currentPage = "Home";
        }
    });

    menuBtn.addEventListener("click", ()=>
    {
        if(currentPage !== "Menu")
        {
            main.innerHTML = "";
            main.appendChild(createMenu());
            currentPage = "Menu";
        }
    });

    contactBtn.addEventListener("click", ()=>
    {
        if(currentPage !== "Contact")
        {
            main.innerHTML = "";
            main.appendChild(createContact());
            currentPage = "Contact";
        }
    });
}

tabPages();




