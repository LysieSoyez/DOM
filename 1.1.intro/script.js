console.log(document.title)
document.title = "Modifying the DOM";
//Changing de backgroundcolor of the body
document.body.style.backgroundColor = "random_bg_color";
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);

    document.body.style.background = bgColor;
    }

random_bg_color();

for(let child of document.body.children){
    console.log(child)
}