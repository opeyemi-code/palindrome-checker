const textArea = document.getElementById('textarea');
const checkBtn = document.getElementById('check-btn')
const result = document.getElementById('result');


checkBtn.addEventListener('click', function (e, textarea) {
  if (textArea.value === ""){
    result.textContent = `There is nothing to check`;
  }else{
const filterdStr = textArea.value.toLowerCase().split('').filter(item => item.match(/[a-z0-9]/gi))
const joinedStr = filterdStr.join("");
const reversedStr = filterdStr.reverse().join("");
joinedStr === reversedStr ?
  result.innerText = `${textArea.value}: is a palindrome` :
result.innerText = `${textArea.value}: is not a palindrome`;
}
textArea.value = "";
e.preventDefault();

});

