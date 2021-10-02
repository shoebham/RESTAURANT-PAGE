import {insertinContent} from './init.js';


function contactText()
{
    const p = document.createElement("p");
    p.classList.add("contact-text");
    p.textContent="Contact";
    return p;

}

function map(source)
{
    const img = document.createElement("img");
    img.src=source;
    return img;
}

function address(text)
{
    const p = document.createElement("p");
    p.textContent=text;
    return p;
}
function contactInfo()
{
    const div = document.createElement("div");
    div.classList.add("address");
    div.appendChild(address("🏠 Neverland, never street, 666"));
    div.appendChild(address("📞 +(666)-1234567890"));
    return div;
}
function mapCard()
{
    const div = document.createElement("div");
    div.classList.add("map-card");
    div.appendChild(map("../dist/map.jpg"));
    div.appendChild(contactInfo());
    return div;
}
function name()
{
    const name = document.createElement("input");
    name.placeholder="Name";    
    return name;
}

function email()
{
    const email = document.createElement("input");
    email.type="email";
    email.placeholder="email";
    return email;
}
function query()
{
    const query = document.createElement("textarea");
    query.placeholder="Your query";
    return query;
}

function send()
{
    const button = document.createElement("button");
    button.textContent="✉ Send";
    return button;
}
function contactform()
{
    const div=document.createElement("div");
    div.classList.add("contact-us");

    const form = document.createElement("form");
    form.classList.add("contact-form");
    
    form.appendChild(name());
    form.appendChild(email());
    form.appendChild(query());
    form.appendChild(send());
    div.appendChild(form);
    return div;

}
function contact()
{
    const div = document.createElement("div");
    div.classList.add("Contact-div");
    div.appendChild(contactText());
    div.appendChild(contactform());
    div.appendChild(mapCard());
    insertinContent(div);
}

export default contact;