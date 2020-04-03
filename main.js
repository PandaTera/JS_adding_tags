
const body = document.querySelector('body');
const div = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const img = document.createElement('img');
img.src = '416.jpg';
img.style.width = "300px";
img.style.height = "200px"; 
const footer = document.createElement('footer');
footer.innerText = 'https://www.freepik.com/free-photos-vectors/background">Background vector created by user2104819 - www.freepik.com'
img.style.borderRadius = "50%";

div2.innerHTML ='Cały czas ciągnę ten wózek do przodu';
div2.style.color = 'white';
div2.style.fontSize = '50px';
div2.style.left = '20%';
div2.style.top = '10px';
let size = 10 //wielkość div

let grow = true;
div.style.height = size + "px";

div.style.width = "75%";
div.style.backgroundColor = "green";
div.style.position = "fixed";
div2.style.position = "fixed";
div.style.top = "-30px";
div.style.left = '12.5%';
body.style.height = "10000px"


div3.style.position ="fixed";
div3.style.top = "280px";
div3.style.left = '38.5%';

footer.style.position ="fixed";
footer.style.bottom = '30px';
footer.style.left = '250px';
document.body.appendChild(div);
document.body.appendChild(div2);

div3.appendChild(img);
document.body.appendChild(footer);
const barDown = function(){
  
   if(grow){
       size+=4;
    div.style.height = size + "px";
       div.style.backgroundColor = "green";
   div2.style.top = size + "px";
   div3.style.top = "-280px";
    }else 
    {
            size-=4;
        div.style.height = size + "px";
        div2.style.top = size + "px";
        div.style.backgroundColor = "pink";
    }
    if(size >=window.innerHeight/4){
        grow=!grow
        document.body.appendChild(div3);
        div3.style.top = "280px";
    }else if(size<0){
grow = true;
    }
   }
window.addEventListener('scroll', barDown)