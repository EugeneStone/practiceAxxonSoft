'use strict'
const buttonDraw = document.getElementById('button');
const buttonDelete = document.getElementById('buttonDelete');


function validator(){
const inputNumbers = document.getElementById('numbers');

  if (!inputNumbers.value){
        alert('Поле ввода не должно быть пустым');
  }
  else{ 
    inputNumbers.value = inputNumbers.value.replace(/\s+/g, ' ').trim()
    let numbersArray = inputNumbers.value.split(' ');
     
      for (let i = 0; i < numbersArray.length; i++){
          if( isNaN(numbersArray[i])){
           alert('Ввод должен содержать только числа');
             return;
           }
         }
      
        drawHistogram();
      
  }
}   


function drawHistogram(){
      
    const inputNumbers = document.getElementById('numbers');
    const divContainer = document.getElementById('divContainer');
    inputNumbers.value = inputNumbers.value.replace(/\s+/g, ' ').trim();
    let numbersArray = inputNumbers.value.split(' ');
       
    for (let i = 0; i < numbersArray.length; i++){
      const newColumn = document.createElement('div');
      newColumn.innerHTML = numbersArray[i];
      newColumn.className ='divColumn';
      newColumn.style.height = `${numbersArray[i]}px`;
      divContainer.append(newColumn);

    }
    buttonDraw.removeEventListener('click', validator);
}
buttonDraw.addEventListener('click',  validator);

buttonDelete.addEventListener('click', ()=>{ 
  const columnsForDelete = document.querySelectorAll('.divColumn');
  columnsForDelete.forEach(elem => elem.remove());
  buttonDraw.addEventListener('click',  validator);
  const inputNumbers = document.getElementById('numbers');
  inputNumbers.value = null;
}
);
