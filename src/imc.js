const nameInput = document.getElementById("name");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const btnCalc = document.getElementById("btn-calc");
const result = document.getElementById("result");

const imc = () => {
  if(nameInput !== '' && height !== '' && weight !== '') {
    alert("Everything's OK!")
  } else {
    alert("Pleade fill in all fields!")
  }

}

btnCalc.addEventListener("click",imc);
