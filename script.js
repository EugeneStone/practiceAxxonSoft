let button = document.getElementById('button');
let buttonDelete = document.getElementById('buttonDelete');


    
function drawHystogram(){
      
    let numbers = document.getElementById('numbers');
    let myTable = document.getElementById("table");
    let numberArray = numbers.value.split('');
       
    for (let i = 0; i < numberArray.length; i++){
      let newTr = document.createElement('tr');
      myTable.append(newTr);

    for (let j = 0; j < numberArray[i]; j++){
      let newTd = document.createElement('td');
        newTd.className = 'td';
        newTr.append(newTd);
    
    }}     
 
}

button.addEventListener('click',  drawHystogram);

buttonDelete.addEventListener('click', ()=>{ 
let myTable = document.getElementById("table");
    while (myTable.firstChild) {
        myTable.removeChild(myTable.firstChild);
}}
);
