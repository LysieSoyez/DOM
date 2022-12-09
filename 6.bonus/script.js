let ul= document.querySelector("ul");
let list=ul.childNodes;

for(let elem of list){
    if(elem.nodeType===1){
        if(elem.textContent=="Fast and Furious"){
            elem.classList.add("important")
            ul.insertBefore(elem,ul.firstElementChild)
        }
    }
}