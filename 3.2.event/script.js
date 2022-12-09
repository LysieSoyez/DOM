const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())

  //create a div for the square
  section=document.getElementsByTagName('section')[0];

  let div=document.createElement('div');
  div.classList.add("displayedsquare", e.target.classList[1]);
  section.appendChild(div);

  //create a li
  ul=document.getElementsByTagName('ul');
  let li=document.createElement('li');
  ul[0].appendChild(li);

  li.innerText=getElapsedTime() + " " + "Created a new" + " " + e.target.classList[1] + " " + "square";
   
  //Alert color
    const displayedsquare = document.querySelectorAll('.displayedsquare')
    for (let Square of displayedsquare) {
        Square.addEventListener('click', alertes)
    }
    
}

function alertes (e){
        alert(e.target.classList[1])
    }

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

//Random color generator
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 return bgColor
}

//Change de bg color with the space bar
document.body.onkeyup = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||      
        e.keyCode == 32){
        document.body.style.background = random_bg_color();

        ///create a li with the space action
        ul=document.getElementsByTagName('ul');
        let li=document.createElement('li');
        ul[0].appendChild(li);

        li.innerText=getElapsedTime() + "Space bar is press, the background is now: "+ random_bg_color();
        }

    //remove the last li
    else if(e.key == "i"){
        ul[0].lastElementChild.remove();
    }

    //remove the square
    else if(e.key == "s"){

        section=document.getElementsByTagName('section')[0];
        div=document.getElementsByClassName('displayedsquare')[0];
        section.removeChild(div);
    }
}
