let button = document.querySelector('.button');
let buttonDelete = document.querySelector('.buttonDelete');


    
function drawHystogram(){
    let numberArray;
    let labelArray;
    let backColorArray;
    let bordColorArray;
    let counter;
//Разделем строку чисел из input на массив чисел
    let numbers = document.querySelector('.numbers');
    counter = numbers.value.length;
    numberArray = numbers.value.split('');
    numberArray.forEach(element => {
        Number(element);
    });
//создаем массив надписей
    labelArray = new Array();
    for(let i = 1; i <= counter; i++){
        
        labelArray.push(String(i));
    }
 // массив цвета столбца
    backColorArray = new Array();
    for(let i = 0; i < counter; i++){
        
        backColorArray.push('rgba(255, 99, 132, 0.2)');
    }

     // массив границы столбца
    bordColorArray = new Array();
    for(let i = 0; i < counter; i++){
        
        bordColorArray.push('rgba(255, 99, 132, 1)');
    }
  
    //взято из документации chart.js
const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labelArray,
        datasets: [{
            label: 'Числа',
            data: numberArray,
            backgroundColor: backColorArray,
            borderColor: bordColorArray,
            borderWidth: 1
        }]
    },
    options: {
        
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}




button.addEventListener('click', ()=> {drawHystogram()});
buttonDelete.addEventListener('click', ()=> document.location.reload())


