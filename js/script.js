let nbre = document.querySelectorAll(".button-card .btn");
let texte = document.querySelector(".text-number");

console.log(nbre);

for(let i = 0 ; i<nbre.length ; i++){
    nbre[i].addEventListener('click', function(){
        texte.innerText = texte.textContent + nbre[i].textContent;
    });
}

function result(){
    try{
        texte.innerText = eval(texte.textContent);
    }
    catch{
        texte.innerText = "erreur";
    }
}


function reset(){
    texte.innerText = "0";
}