let Keller5 = ["Arno Volts" ,"Aurélien Mariaule" ,"Aurore Lemaire" ,"Benjamin Porsont" ,"Céline Verreydt" ,"Corentin Miserque" ,"Dominique Coppée" ,"Edouard     de Romrée de Vichenet" ,"Hugo Goorickx ","Jofrey Houyoux" ,"Jonathan Manes" ,"jonathan bajoux" ,"Laura Wilhelmi" ,"Lysie Soyez" ,"Marnie Benalia" ,"Mathilde     Cornelis" ,"Milo Bonnet" ,"Nadim El Nakadi" ,"Nathalie Vanden Abeele" ,"Nathalie Goffette" ,"Nour Everaert" ,"Pierre Mauriello" ,"Quentin Bource ","Virginie Dourson"]

function randomcolor(){
    r=Math.floor(Math.random()*256);
    g=Math.floor(Math.random()*256);
    b=Math.floor(Math.random()*256);
    color="rgb(" + r + "," + g + "," + b + ")"
    return color;
}

function picklearner(inputAr){
    let l = inputAr.length;
    let arr=[];
        for(i=1;i<=l;i++){
            random = Math.floor(Math.random()*l);
            while(arr.includes(inputAr[random])){
                random = Math.floor(Math.random()*l);
        }
            arr.push(inputAr[random]);
        }
return arr;
}
var jean =picklearner(Keller5)
console.log(jean)
i=0
for (elem of jean){
    learner_elem = document.createElement("section");
    learner_elem.style.backgroundColor= randomcolor();
    para=document.createElement("p")
    para.innerText=elem
    document.getElementsByTagName('article')[0].appendChild(learner_elem);
    document.getElementsByTagName('section')[i].appendChild(para)
    i++
}