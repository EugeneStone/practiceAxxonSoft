let button = document.getElementById('button');
let buttonDelete = document.getElementById('buttonDelete');


    
function drawHystogram(){
      
    let numbers = document.getElementById('numbers');
    let myDiv = document.getElementById('myDiv');
    let numberArray = numbers.value.split('');
       
    for (let i = 0; i < numberArray.length; i++){
      let newDiv = document.createElement('div');
      newDiv.innerHTML = numberArray[i];
      newDiv.className ='newDiv';
      newDiv.style.height = `${10*numberArray[i]}px`;
      myDiv.before(newDiv);

    }
}
button.addEventListener('click',  drawHystogram);

buttonDelete.addEventListener('click', ()=>{ 
  let myDiv = document.querySelectorAll('.newDiv');
    myDiv.forEach(elem => elem.remove())
}
);
