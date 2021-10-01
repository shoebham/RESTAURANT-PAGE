import {insertinContent} from './init'
function image()
{
    const img = document.createElement("img");
    img.classList.add("home-photo");
    img.src="../dist/food.jpg";
    return img;
}

function tagline()
{
    const p = document.createElement("p");
    p.textContent="Delicious 8-bit food for your 16-bit tummy";
    return p;
}

function home()
{
    const div = document.createElement("div");
    div.classList.add("Home-div");
    div.appendChild(image());
    div.appendChild(tagline());
   
    insertinContent(div);
}

export default home;