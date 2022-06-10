'use strict'
const buttonDraw = document.getElementById('button');
const buttonDelete = document.getElementById('buttonDelete');


function validator(){
const inputNumbers = document.getElementById('numbers');

  if (!inputNumbers.value){
        alert('Поле ввода не должно быть пустым');
  }
  else{ 
    const numbersArray = inputNumbers.value.replace(/\s+/g, '').trim().split('');
    
      for (let i = 0; i < numbersArray.length; i++){
          if( !Number.isInteger(Number(numbersArray[i]))){
           alert('Ввод должен содержать только числа');
             return;
           }
         }
      
        drawHistogram();
      
  }
}   


function drawHistogram(){
      
    const inputNumbers = document.getElementById('numbers');
     const divContainer = document.getElementById('ContainerHistogram');
     const numbersArray = inputNumbers.value.replace(/\s+/g, ' ').trim().split(' ');
      
       
    for (let i = 0; i < numbersArray.length; i++){
      const newColumn = document.createElement('div');
       newColumn.innerHTML = numbersArray[i];
        newColumn.className ='Column';
         newColumn.style.height = `${numbersArray[i]}px`;
          divContainer.append(newColumn);

    }
    
}
function clearHistogram(){
  const columnsForDelete = document.querySelectorAll('.Column');
   columnsForDelete.forEach(elem => elem.remove());
   

}

buttonDraw.addEventListener('click', ()=>{
  const columnsForDelete = document.querySelectorAll('.Column');
  if (columnsForDelete.value != ''){
    clearHistogram();}
    validator()});

buttonDelete.addEventListener('click', clearHistogram);


