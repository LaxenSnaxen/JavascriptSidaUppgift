let element = document.getElementById("ett");
element.innerHTML = "Welkommen till min sida"

function tyska()
{
    let ett     = document.getElementById("ett")   
    let två     = document.getElementById("två")
    let tre     = document.getElementById("tre")
    let fyra    = document.getElementById("fyra")
    let knapp   = document.getElementById("knapp")

    ett.innerHTML   ="Willkommen auf meiner seite!";
    två.innerHTML   ="Mir gefält meiner seite!";
    tre.innerHTML   ="Meiner seite ist gut!";
    fyra.innerHTML  ="Oooo was fûr eine schöne seite!";
    knapp.remove()
}