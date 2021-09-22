function header()
{
    const div = document.createElement("div");
    div.classList.add("header");
    
    const div2 = divCreate("heading");
    const p = document.createElement("p");
    
    p.textContent = "Simple Restaurant";
    div2.appendChild(p);
    div.appendChild(div2);
    div.appendChild(nav());
    return div;
}

function divCreate(className)
{
    const div = document.createElement("div");
    div.classList.add(className);
    return div;
}
function image()
{
    const img = document.createElement("img");
    img.src="../dist/food.jpg";
    return img;
}

function nav()
{
    const div = divCreate("nav-bar");
    const ul = document.createElement("ul");
    ul.appendChild(li("Home"));
    ul.appendChild(li("Menu"));
    ul.appendChild(li("Contact"));
    div.appendChild(ul);
    return div;
}

function li(item){
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    return li;
}
function insertContent()
{
    const content = document.getElementById("content");
    content.appendChild(header());
    content.appendChild(image());

}
export default insertContent;