let Keller5 = ["Arno Volts" ,"Aurélien Mariaule" ,"Aurore Lemaire" ,"Benjamin Porsont" ,"Céline Verreydt" ,"Corentin Miserque" ,"Dominique Coppée" ,"Edouard     de Romrée de Vichenet" ,"Hugo Goorickx ","Jofrey Houyoux" ,"Jonathan Manes" ,"jonathan bajoux" ,"Laura Wilhelmi" ,"Lysie Soyez" ,"Marnie Benalia" ,"Mathilde     Cornelis" ,"Milo Bonnet" ,"Nadim El Nakadi" ,"Nathalie Vanden Abeele" ,"Nathalie Goffette" ,"Nour Everaert" ,"Pierre Mauriello" ,"Quentin Bource ","Virginie Dourson"]

//Pick random number for the background color
function randomcolor(){
    r=Math.floor(Math.random()*256);
    g=Math.floor(Math.random()*256);
    b=Math.floor(Math.random()*256);
    color="rgb(" + r + "," + g + "," + b + ")"
    return color;
}

//Pick random learner of keller5
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

//Calculate the contrast of the background to know if the text as to be in black or white
function getTextColor(rgb) 
{
    rgb = rgb.match(/\d+/g);
    if ((rgb[0] * 0.299) + (rgb[1] * 0.587) + (rgb[2] * 0.114) > 150) {
        return 'black';
    } else {
        return 'white';
    }
}

//Create a new variable with the random list
var classroom =picklearner(Keller5)

//Put each learner of the list in <Article> then in a <Section>
//Define a background color and a color for each learner
i=0
for (elem of classroom){
    let backgroundColor= randomcolor()
    learner_elem = document.createElement("section");
    learner_elem.style.backgroundColor= backgroundColor;
    para=document.createElement("p")
    para.style.color=getTextColor(backgroundColor)
    para.innerText=elem
    document.getElementsByTagName('article')[0].appendChild(learner_elem);
    document.getElementsByTagName('section')[i].appendChild(para)
    i++
    
}