const para_ele = document.getElementById('demo');

 para_ele.innerHTML = "DOCUMENT OBJECT MODEL";
 para_ele.style.color= "orange";
 para_ele.style.textAlign="center"
 para_ele.style.background = "green"
 para_ele.style.fontsize="medium"


 document.body.style.backgroundColor = "pink";
 const btn = document.getElementById('btn-1');
 btn.addEventListener('click',(event)=>{console.log("You clicked me");})
btn.addEventListener('click',(event)=>{console.log(event.target.innerHTML);})
btn.addEventListener('mouseover',(event)=>{console.log("Over form me");})
btn.addEventListener('mouseup',(event)=>{console.log("Up form me");})
btn.addEventListener('mousedown',(event)=>{console.log("Down form me");})
btn.addEventListener('mouseout',(event)=>{console.log("Out form me");})

const btns = document.getElementsByTagName("button")


for(let x of btns){
    x.addEventListener('click',(event)=>{console.log(event.target.innerHTML);})
 }




const parentDiv = document.createElement('div');
parentDiv.style.width = "200px";
parentDiv.style.height = "200px";
parentDiv.style.backgroundColor= "red"

const child_Div_1= document.createElement('div');
child_Div_1.style.width = "100px";
child_Div_1.style.height = "100px";
child_Div_1.style.backgroundColor= "green"



const child_Div_2= document.createElement('div')
child_Div_2.style.width = "100px";
child_Div_2.style.height = "100px";
child_Div_2.style.backgroundColor= "blue"
parentDiv.appendChild(child_Div_2);

const child_Div_3= document.createElement('div')
child_Div_3.style.width = "100px";
child_Div_3.style.height = "100px";
child_Div_3.style.backgroundColor= "orange"
parentDiv.appendChild(child_Div_3);


document.body.appendChild(parentDiv);
parentDiv.addEventListener('mouseover',(event)=>{console.log("Over on me");})

document.body.appendChild(child_Div_1);
