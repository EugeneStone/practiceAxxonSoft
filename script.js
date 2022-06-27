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
  let columnsForSort = document.querySelectorAll(".column");
  for (let i = 0; i < columnsForSort.length - 1; i++)
    if (
      Number(columnsForSort[i].textContent) >
      Number(columnsForSort[i + 1].textContent)
    ) {
      columnsForSort[i + 1].id ="moveLeft";
      columnsForSort[i].id = "moveRight";

      setTimeout(() => {
        columnsForSort.forEach((element) => {
          element.id = "";
        });
        columnsForSort[i].before(columnsForSort[i + 1]);
        columnsForSort = document.querySelectorAll(".column");
  
        bubbleSort();
      }, 2000);
      break;
    }
}

function drawHistogram() {
  const columns = document.querySelectorAll(".column");
  if (columns.value != "") {
    clearHistogram();
  }
  const inputNumbers = document.getElementById("numbers");
  const divContainer = document.getElementById("containerHistogram");
  const numbersArray = inputNumbers.value
    .replace(/\s+/g, " ")
    .trim()
    .split(" ");

  for (let i = 0; i < numbersArray.length; i++) {
    const newColumn = document.createElement("div");
    newColumn.innerText = numbersArray[i];
    newColumn.className = "column";

    newColumn.style.height = `${numbersArray[i]}px`;
    divContainer.append(newColumn);
  }
}
function clearHistogram() {
  const columnsForDelete = document.querySelectorAll(".column");
  columnsForDelete.forEach((elem) => elem.remove());
}

buttonDraw.addEventListener("click", () => {
  validator();
});

buttonDelete.addEventListener("click", clearHistogram);
buttonSort.addEventListener("click", bubbleSort);
