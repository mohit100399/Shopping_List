
const shopping2=document.getElementsByClassName("shopping2")[0];
const pencil = document.getElementById("pencil");
const allItem=document.getElementById("allItem");
const userInput=document.getElementById("userInput");

pencil.addEventListener("click", function()
{
    allItem.innerHTML = "";
})

userInput.addEventListener("keydown", function(event)
{
    if(event.key == "Enter")
        addItem();
})

function addItem()
{
    var h4=document.createElement("h4");
    h4.innerHTML= "- " + userInput.value;

    h4.addEventListener("click",function()
    {
        h4.style.textDecoration= "line-through";
    })

    allItem.insertAdjacentElement("beforeend",h4);

}
