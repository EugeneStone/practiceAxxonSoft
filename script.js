const buttonDraw = document.getElementById('button');
const buttonDelete = document.getElementById('buttonDelete');


    
function drawHystogram(){
      
    let inputNumbers = document.getElementById('numbers');
    const divContainer = document.getElementById('divContainer');
    numbersArray = inputNumbers.value.split(' ');
       
    for (let i = 0; i < numbersArray.length; i++){
      const newColumn = document.createElement('div');
      newColumn.innerHTML = numbersArray[i];
      newColumn.className ='divColumn';
      newColumn.style.height = `${numbersArray[i]}px`;
      divContainer.append(newColumn);

    }
}
buttonDraw.addEventListener('click',  drawHystogram);

buttonDelete.addEventListener('click', ()=>{ 
  columnsForDelete = document.querySelectorAll('.divColumn');
  columnsForDelete.forEach(elem => elem.remove())
}
);
