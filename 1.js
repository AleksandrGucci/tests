
function fCheck1() { //проверяет первую задачу
 let b = document.getElementById('t1').value;
 let a = document.getElementById('out');
 if(b == 41200) {
a.innerHTML = 'Верно';
} else if(b == "") {
a.innerHTML = 'Введите ваш ответ'
} else if(b < 41200) {
a.innerHTML = 'Вы ввели ответ меньше, чем нужно'
} else if(b > 41200) {
a.innerHTML = 'Вы ввели ответ больше, чем нужно'
} else {
a.innerHTML = 'Ваш ответ неккоректен'
}

     }

function fCheck2() { //проверяет вторую задачу
let b = document.getElementById('t2').value;
let a = document.getElementById('out1');
    if(b == 5.75 || b == "5,75") {
a.innerHTML = 'Верно';
} else if(b == "") {
a.innerHTML = 'Введите ваш ответ'
} else if(b < 5.75) {
a.innerHTML = 'Вы ввели ответ меньше, чем нужно'
} else if(b > 5.75) {
a.innerHTML = 'Вы ввели ответ больше, чем нужно'
} else {
a.innerHTML = 'Ваш ответ неккоректен'
}

     }

function fCheck3() { //проверяет третью задачу
let b = document.getElementById('t3').value;
let a = document.getElementById('out2');
    if(b == 4.78 || b == "4,78") {
a.innerHTML = 'Верно';
} else if(b == "") {
a.innerHTML = 'Введите ваш ответ'
} else if(b < 4.78) {
a.innerHTML = 'Вы ввели ответ меньше, чем нужно'
} else if(b > 4.78) {
a.innerHTML = 'Вы ввели ответ больше, чем нужно'
} else {
a.innerHTML = 'Ваш ответ неккоректен'
}
     }

function fCheck4() { //проверяет четвертую задачу
let b = document.getElementById('t4').value;
let a = document.getElementById('out3');
    if(b == 24.5 || b == "24,5") {
a.innerHTML = 'Верно';
} else if(b == "") {
a.innerHTML = 'Введите ваш ответ'
} else if(b < 24.5) {
a.innerHTML = 'Вы ввели ответ меньше, чем нужно'
} else if(b > 24.5) {
a.innerHTML = 'Вы ввели ответ больше, чем нужно'
} else {
a.innerHTML = 'Ваш ответ неккоректен'
}
        }