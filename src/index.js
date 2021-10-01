import home from "./homepage";
import menu from "./menu";
import contact from "./contact";
import {init} from "./init";


function changeContent()
{
    const ul = document.querySelectorAll("li");
    ul.forEach(li=>
        {
            if(li.classList.contains("selected"))
            {
                change(`${li.classList[0]}`);
            }
        });
}

function change(li)
{
    clear();
    if(li=="Home")
        home();
    if(li=="Menu")
        menu();
    if(li=="Contact")
        contact();
}

function clear()
{
    const li = document.querySelector(`.selected`);
    const selected = li.classList[0];
    console.log(selected);
    const div = document.querySelector(`.${selected}-div`);
    console.log(div);
    div.innerHTML="";

    div.remove();
}

function changeListener()
{
    const ul = document.querySelectorAll("li");
    ul.forEach((li)=>
    {
    console.log(li);

        li.addEventListener("click",()=>
        {
           change(li.classList[0]);
        })
    })
}
init();
home();
// changeListener();
export default change;