let operator = '';
let numOne = '';
let numTwo = '';
let minusnumber = 1;

const $operator = document.getElementById('operator');
const $result = document.getElementById('result');
const onClickNumber = (event) => {
  if (operator == '-' && !numTwo && minusnumber == -1) {
    numOne += event.target.textContent * minusnumber;
    $result.value = numOne;
    // console.log('numOne', numOne, 'numTwo', numTwo, 'result', $result.value);
    return;
  }

  if (!operator) {
    numOne += event.target.textContent;
    $result.value = numOne;
    // console.log('numOne', numOne, 'numTwo', numTwo, 'result', $result.value);
    return;
  }
  if (operator) {
    $result.value = '';
  }
  numTwo += event.target.textContent;
  $result.value = numTwo;
  //   console.log('numOne', numOne, 'numTwo', numTwo, 'result', $result.value);
};

const onClickOperator = function (event) {
  if (!numOne) {
    minusnumber = -1;
  }
  onClickcal();
  operator = event.target.textContent;
  $operator.value = operator;

  if (numOne && numTwo) {
    numOne = $result.value;
    numTwo = '';
  }
};

const onClickcal = function () {
  if (numOne && numTwo) {
    switch (operator) {
      case '+':
        $result.value = parseInt(numOne) + parseInt(numTwo);
        break;
      case '-':
        $result.value = parseInt(numOne) - parseInt(numTwo);
        break;
      case '/':
        $result.value = parseInt(numOne) / parseInt(numTwo);
        break;
      case 'x':
        $result.value = parseInt(numOne) * parseInt(numTwo);
        break;
    }
    return;
  }
};

const onClickclear = function () {
  $result.value = '';
  $operator.value = '';
  numOne = '';
  numTwo = '';
  operator = '';
  minusnumber = 1;
};

document.getElementById('num-0').addEventListener('click', onClickNumber);
document.getElementById('num-1').addEventListener('click', onClickNumber);
document.getElementById('num-2').addEventListener('click', onClickNumber);
document.getElementById('num-3').addEventListener('click', onClickNumber);
document.getElementById('num-4').addEventListener('click', onClickNumber);
document.getElementById('num-5').addEventListener('click', onClickNumber);
document.getElementById('num-6').addEventListener('click', onClickNumber);
document.getElementById('num-7').addEventListener('click', onClickNumber);
document.getElementById('num-8').addEventListener('click', onClickNumber);
document.getElementById('num-9').addEventListener('click', onClickNumber);
document.getElementById('plus').addEventListener('click', onClickOperator);
document.getElementById('minus').addEventListener('click', onClickOperator);
document.getElementById('divide').addEventListener('click', onClickOperator);
document.getElementById('multiply').addEventListener('click', onClickOperator);
document.getElementById('calculate').addEventListener('click', onClickcal);
document.getElementById('clear').addEventListener('click', onClickclear);
