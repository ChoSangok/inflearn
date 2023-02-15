const input = document.querySelector('input');
const btn = document.querySelector('button');

function click() {
  if (input.value !== '' && input.value.length === 3) {
    console.log(input.value);
    input.value = input.value.charAt(2);
  } else {
    alert('입력이 잘못 되었습니다');
  }
}

btn.addEventListener('click', click);
