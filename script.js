"use strict";
const buttonDraw = document.getElementById("button");
const buttonDelete = document.getElementById("buttonDelete");
const buttonSort = document.getElementById("buttonSort");

function validator() {
  const inputNumbers = document.getElementById("numbers");

  if (!inputNumbers.value) {
    alert("Поле ввода не должно быть пустым");
  } else {
    const numbersArray = inputNumbers.value
      .replace(/\s+/g, "")
      .trim()
      .split("");

    for (let i = 0; i < numbersArray.length; i++) {
      if (!Number.isInteger(Number(numbersArray[i]))) {
        alert("Ввод должен содержать только числа");
        return;
      }
    }

    drawHistogram();
  }
}

function bubbleSort() {

  let columnsForSort = document.querySelectorAll(".сolumn");
  const container = document.getElementById("сontainerHistogram");
  for (let i = 0; i < columnsForSort.length; i++) {
    for (let j = 0; j < columnsForSort.length - 1; j++) {
      if (Number(columnsForSort[j].textContent) > Number(columnsForSort[j + 1].textContent)) {
        container.insertBefore(columnsForSort[j + 1], columnsForSort[j]);
        columnsForSort = document.querySelectorAll(".сolumn");
      }
    } 
  } 
  
}
function drawHistogram() {
  const columns = document.querySelectorAll(".сolumn");
  if (columns.value != "") {
    clearHistogram();
  }
  const inputNumbers = document.getElementById("numbers");
  const divContainer = document.getElementById("сontainerHistogram");
  const numbersArray = inputNumbers.value
    .replace(/\s+/g, " ")
    .trim()
    .split(" ");

    for (let i = 0; i < numbersArray.length; i++) {
    const newColumn = document.createElement("div");
    newColumn.innerText = numbersArray[i];
    newColumn.className = "сolumn";
    newColumn.style.height = `${numbersArray[i]}px`;
    divContainer.append(newColumn);
  }
}
function clearHistogram() {
  const columnsForDelete = document.querySelectorAll(".сolumn");
  columnsForDelete.forEach((elem) => elem.remove());
}

buttonDraw.addEventListener("click", () => {
  validator();
});

buttonDelete.addEventListener("click", clearHistogram);
buttonSort.addEventListener("click", bubbleSort);
