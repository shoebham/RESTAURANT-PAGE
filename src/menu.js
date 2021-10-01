import {insertinContent} from './init.js';

function image(source)
{
    const img = document.createElement("img");
    img.classList.add("menu-item");
    img.src=source;
    return img;
}

function emoji(emo,i)
{
    console.log(i);
    const p = document.createElement("p");
    p.textContent=emo;
    p.classList.add(`food-item-${i}`);
    p.classList.add("food");
    return p;
}
function menuItems()
{
    const div = document.createElement("div");
    div.classList.add("menu-items");
    div.appendChild(emoji("🍕",1));
    div.appendChild(emoji("🥞",2));
    div.appendChild(emoji("🍔",3));
    div.appendChild(emoji("🍷", 4));
    div.appendChild(emoji("🍰",5));
    div.appendChild(emoji("🍩",6));
    div.appendChild(emoji("🍣",7));
    div.appendChild(emoji("🍾",8));


    

    // div.appendChild(image("../dist/menu/doughnuts.png"));
    // div.appendChild(image("../dist/menu/drinks.png"));
    // div.appendChild(image("../dist/menu/pancake.png"));
    // div.appendChild(image("../dist/menu/pizza.png"));
    // div.appendChild(image("../dist/menu/sushi.png"));
    // div.appendChild(image("../dist/menu/cake.png"));
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