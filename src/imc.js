
const btnCalc = document.getElementById("btn-calc");


const imc = () => {
  const nameInput = document.getElementById("name").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const result = document.getElementById("result");

  if(nameInput !== '' && height !== '' && weight !== '') {
    alert("Everything's OK!")
  } else {
    result.TextContent = "Preencha todos os campos!!"
  }

}

btnCalc.addEventListener("click",imc);
