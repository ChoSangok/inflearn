const btn_start = document.querySelector('.btn_start');
const input = document.querySelector('.input');
const btn_push = document.querySelector('.btn_push');
const div = document.querySelector('div');
const ul = document.querySelector('ul');

let value = [];
let homRun = [];
let result = '';
let tryNumber = '';
let strike = 0;
let ball = 0;
let out = 0;

btn_start.addEventListener('click', () => {
  if (homRun.length > 1) {
    homRun = [];
  }
  for (let i = 0; i < 4; i++) {
    homRun.push(Math.floor(Math.random() * 9 + 1));
    if (homRun.indexOf(homRun[i]) < i) {
      homRun.pop();
      i--;
    }
  }
  input.classList.remove('display');
  btn_push.classList.remove('display');

  console.log(homRun);
});

btn_push.addEventListener('click', (e) => {
  e.preventDefault();
  if (value.length > 10) {
    alert('게임이 끝났습니다 새로고침하여 새로운 게임을 해주세요.');
  } else {
    tryNumber = input.value;
    if (tryNumber.length != 4) {
      return alert('글자수부족');
    } else if (new Set(tryNumber).size != 4) {
      return alert('중복값금지');
    } else if (value.includes(tryNumber)) {
      return alert('이미시도한값');
    }
    value.push(tryNumber);
    if (homRun.join('') == tryNumber) {
      result = 'HOME RUN';
      setTimeout(alert('Victory'), 2000);
    } else {
      for (let i = 0; i < 4; i++) {
        if (tryNumber.indexOf(homRun[i]) != -1) {
          if (tryNumber.indexOf(homRun[i]) == i) {
            strike++;
          } else {
            ball++;
          }
        }
      }
      out = 4 - (strike + ball);
      result = `${strike}:strike, ${ball}:ball, ${out}:out`;
    }

    ul.insertAdjacentHTML(
      'beforeend',
      `<li>${value.length}번째시도 : ${result}`
    );
    result = '';
    strike = 0;
    ball = 0;
    out = 0;
    if (value.length == 1 && result != 'HOME RUN') {
      alert(`Defeat`);
    }
  }
});
