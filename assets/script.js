// CREARE CON JS UNA GRIGLIA 

// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// GENERARE AL GRIGLIA E  SELEZIONO BOTTONE
const elegrid = document.querySelector(".grid");
const btnplay = document.querySelector(".play");
const remove = document.querySelector("textselect");
const easy = parseInt(100);
const medium = parseInt(81);
const hard = parseInt(49);
let points = 0;


// BOTTONE CON FUNZIONI

btnplay.addEventListener("click",
function(){
    textselect.classList.add("hidden")
    let diffoption = document.querySelector("#options");
    let value = diffoption.options[diffoption.selectedIndex].value;
    console.log(value);
    creategrid(value, elegrid);
    
}
)




// FUNZIONE DI CREAZIONE DELLA GRIGLIA

function creategrid(ncell, elecontainer){
    let bombs = [];
    while(bombs.length < 16){
         let bomb = Math.floor(Math.random() * ncell) + 1;
        if(bombs.indexOf(bomb) === -1) bombs.push(bomb);
    }
    console.log(bombs);
    if(ncell <= 100){
        elecontainer.classList.remove("gridmedium","gridhard")
        elecontainer.classList.add("grideasy");
    } if(ncell <= 81){
        elecontainer.classList.remove("grideasy","gridhard")
        elecontainer.classList.add("gridmedium")
    }if (ncell <= 49){     
        elecontainer.classList.add("gridhard") 
    }

    // CICLO CREAZIONE DELLE CELLE

    elecontainer.innerHTML = ""
        for(let i = 1; i <= ncell; i++){
            elecontainer.innerHTML += `<div class="cell"></div>`;
        } 
        const listcells = document.querySelectorAll(`.cell`);
        for(let i = 0; i < listcells.length ; i++){
            const cell = listcells[i];
    // FUNZIONE COLORI
            cell.addEventListener("click",
            function colour(){
                this.classList.toggle("clicked");
                cell.innerHTML = i + 1;
                console.log("cella numero: " + (i + 1));
                points++;
                document.getElementById("score").innerHTML = "Il tuo punteggio è: " + points
                console.log(points)
                if(bombs.includes(i + 1)){
                    this.classList.toggle("bomb");
                }
            }
            )
        }
    
}



  

// function creategrid(){
    
//     elegrid.innerHTML = ""
    
//     if(diffoption === easy){
//         for(let i = 1; i <= 60; i++){
        
        
//             elegrid.innerHTML += `<div class="cell"></div>`;
//         } 
        
//         const listcells = document.querySelectorAll(`.cell`);
//         for(let i = 0; i < listcells.length ; i++){
//             const cell = listcells[i];
//             cell.addEventListener("click",
//             function colour(){
//                 this.classList.toggle("clicked");
//                 cell.innerHTML = i + 1;
//                 console.log("cella numero: " + (i + 1))
//             }
//             )
//         }
//     }  
// }











