import {insertinContent} from './init.js';

function image(source)
{
    const img = document.createElement("img");
    img.classList.add("menu-item");
    img.src=source;
    return img;
}
function foodlabel(item)
{
    const span = document.createElement("span");
    span.textContent=item;
    span.classList.add("item");
    return span;
}
function emoji(emo,i,item)
{
    console.log(i);
    const p = document.createElement("p");
    p.textContent=emo;
    p.classList.add(`food-item-${i}`);
    p.classList.add("food");

    const br = document.createElement("br");
    p.appendChild(br);
    p.appendChild(foodlabel(item));
    return p;
}
function menuItems()
{
    const div = document.createElement("div");
    div.classList.add("menu-items");
    div.appendChild(emoji("🍕",1,"Pizza" ));
    div.appendChild(emoji("🥞",2,"Doughnut" ));
    div.appendChild(emoji("🍔",3,"Burger" ));
    div.appendChild(emoji("🍷", 4,"Wine" ));
    div.appendChild(emoji("🍰",5,"Cake" ));
    div.appendChild(emoji("🍩",6,"Pancke" ));
    div.appendChild(emoji("🍣",7,"Sushi" ));
    div.appendChild(emoji("🍾",8,"Champagne" ));
    return div;
}


function menu()
{
    const div = document.createElement("div");
    div.classList.add("Menu-div");
    div.appendChild(menuItems());
    insertinContent(div);
}

export default menu;