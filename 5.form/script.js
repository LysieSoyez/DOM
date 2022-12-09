//Ecrire le nom à coté
const FirstName= document.getElementById("firstname");
const display= document.getElementById("display-firstname");

FirstName.addEventListener("keyup", ()=>{
    display.textContent=FirstName.value
})

//Afficher en fonction de l'age
const age= document.getElementById('age');
const truth= document.getElementById('a-hard-truth');

age.addEventListener("keyup", ()=>{
    if(age.value>=18){
    truth.style.visibility="visible"
}
    else{
        truth.style.visibility="hidden"
    }
})

//Comparer les mdp

const first_pass= document.getElementById("pwd");
const second_pass= document.getElementById("pwd-confirm");

first_pass.addEventListener("keyup", ()=>{

    if(first_pass.value.length < 6 ){
        first_pass.style.background="red"
    }
    else{
        first_pass.style.background="none"
    }
})
second_pass.addEventListener("keyup", ()=>{

    if(first_pass.value != second_pass.value){
        second_pass.style.background="red"
    }
    else{
        second_pass.style.background="none"
    }
})

//Changer le mode
let toggle= document.getElementById("toggle-darkmode");

toggle.addEventListener("change", (e)=>{

    if(e.target.value==="dark"){
        document.body.style.background="black"
        document.body.style.color="white"
    }
    else{
        document.body.style.background="white"
        document.body.style.color="black"
    }
})