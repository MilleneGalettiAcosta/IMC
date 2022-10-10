
const btnCalc = document.getElementById("btn-calc");

const imc = () => {
  const nameInput = document.getElementById("name").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const result = document.getElementById("result");

  if(nameInput !== '' && height !== '' && weight !== '') {

    const calcImc = (weight / (height * height)).toFixed(1);

    let classification = "";

    if(calcImc < 18.5) {
      classification = "Baixo Peso"
    } else if(calcImc < 24.9) {
      classification = "Peso Normal"
    } else if(calcImc < 29.9) {
      classification = "Excesso de Peso"
    } else if (calcImc < 35) {
      classification = "Obesidade"
    } else {
      classification = "Obesidade Extrema"
    }

    result.textContent = `Olá, ${nameInput}. O seu IMC é de ${calcImc} e de acordo com a tabela de IMC, você está com ${classification}!`;

  } else {
    result.textContent = "Preencha todos os campos!!"
  }

}

btnCalc.addEventListener("click",imc);
