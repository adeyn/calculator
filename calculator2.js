function fClearField() {
  document.getElementById('inOutField').value = '0';
}

function fInsetChar (ch) {
  var elem = document.getElementById('inOutField');
  if (elem.value==='0' || elem.value==='')
    elem.value = (ch==='.')?'0.':ch     //не пугаться: мудрёный, но быстрый тернарный оператор
  else if (elem.value=='.')
    elem.value = '0.'+ch
  else
    elem.value += ch;
}

function fDeleteLastCh () {
  var elem = document.getElementById('inOutField');
  var str = elem.value;
  if (str.length<=1)
    elem.value = '0'
  else
    elem.value = str.substring(0,str.length-1);
}

// !!! Функция глючит, если попытаться ввести дробные значения
function fCalculateExpression() {
  var str = document.getElementById('inOutField').value;
  // Разбиваем выражение
  var op = str.match(/[(\s]*([\-.\d]+)[)\s]*([+\-*\/])[(\s]*([\-.\d]+)/);
  if(!op) {
    alert('Не удалось разбить выражение на составные части');
    return; }

  var calExp = document.getElementById('calculatedExpression');
  var i;
  var result;
    
  calExp.innerHTML = '';
  for (i=1; i<op.length; i++)
    calExp.innerHTML += op[i]+' ';
  calExp.innerHTML += '=';

  // Вызов необходимых функций
  switch(op[2]) {
    case '+': result = sum(op[1], op[3]); break;
    case '-': result = sub(op[1], op[3]); break;
    case '*': result = mul(op[1], op[3]); break;
    case '/': result = div(op[1], op[3]); break;
    default: alert('Неизвестная операция'); return; }
  
  // Вывод результата
  document.getElementById('inOutField').value = result;
}
