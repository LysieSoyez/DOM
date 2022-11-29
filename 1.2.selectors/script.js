//Adding a title attribute to the element with important class
listimportant=document.querySelectorAll('.important')
for(let element of listimportant){
    element.title='This is an important item'
}
console.log(document.querySelectorAll('.important'))

//Looping through the img
list_image=document.querySelectorAll("img")
for (let images of list_image){
    if(images.className != "important"){
        images.style.display="none"
    }
}

//Looping through the p
list_p=document.querySelectorAll("p")
for (let elem of list_p){
        if (elem.className != ""){
        console.log(elem.className, elem.innerText)
        }
       else{
        console.log(elem.innerText)
       }
}

//Giving each p a random color
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 return bgColor
}

list_p=document.querySelectorAll("p")
for (let elem of list_p){
        if (elem.className == ""){
        elem.style.color=random_bg_color()
        }
}