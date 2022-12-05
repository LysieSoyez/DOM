//Moving the li
const ol= document.querySelector('ol');
const a= ol.firstChild;
const b= ol.children[4];
ol.insertBefore(b,a);

//Moving the h2
const main=document.querySelector('main');
const section2= main.children[1];
const section3 = main.children[2];
const h2_2= section2.children[0];
const h2_3= section3.children[0];
section2.appendChild(h2_3);
section3.appendChild(h2_2);

//delete the last section
main.removeChild(section3);
