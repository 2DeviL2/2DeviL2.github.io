//тест как список задач
let test = new Array();
//результаты как список статусов ответов
let resultats = new Array();

// функция-конструктор для заданий
function Task (q, r, a1, a2, a3) {
  this.q = q; // текст вопроса
  this.r = r; // правильный вариат ответа
  // оcтальные варианты ответов
  this.a1 = a1;
  this.a2 = a2;
  this.a3 = a3;
}

// функция-конструктор для объекта "ответ-правильность"
function Status(answer) {
  this.answer = answer;
  this.flag = test[resultats.length].r == answer;
}
// toString для каждого объекта "ответ-правильность"
Status.prototype.toString = function () {
  return  this.answer + ' ' + (this.flag?"правильно":"неправильно") + '\n';
};

//переход  к следующему вопросу
function nextQuestion() {
  question.innerText = test[resultats.length].q;
  answers[0].innerText = test[resultats.length].a1;
  answers[1].innerText = test[resultats.length].a2;
  answers[2].innerText = test[resultats.length].a3;
  answers[3].innerText = test[resultats.length].r;
  answerShaker();
}
//анимация перехода вопросов
function nextQuestionAnimation() {
  if (resultats.length < test.length) {
    question.classList.add('hide');
    answers.forEach((e) => {e.classList.add('hide');});
    setTimeout(function() {
      nextQuestion();
    }, 500);
    setTimeout(function() {
      question.classList.remove('hide');
      answers.forEach((e) => {e.classList.remove('hide');});
    }, 500);
  }
  else endTest();
}
//вывод результатов и закрытия теста
function endTest() {
  alert(resultats);
  document.querySelector(".test").style.display = "none";
}
//добавление задач к тесту
test.push(new Task("1.JavaScript Это ...", "язык программирования", "язык разметки", "язык таблиц стилей", "Не является языком"));
test.push(new Task("2.Какой оператор из этих - выполняет не только математические операции?", '+', '-', '*', '/'));
test.push(new Task("3.Где верно указан вывод данных?", 'console.log("Hello");', 'prompt("Hello")', 'print(Hello);', 'write("Hello")'));
test.push(new Task("4.Что такое ECMAScript?", 'Спецификация языка Javascript', 'Переработанная реализация Javascript', 'Новый язык программирования', 'Очень старый язык программирования'));
test.push(new Task("5.В чем разница между confirm и prompt?", "prompt вызывает диалоговое окно с полем для ввода, confirm - окно с подтверждением", "Они ничем не отличаются", "confirm вызывает диалоговое окно с полем для ввода, prompt - окно с подтверждением", "Оба вызывают диалоговое окно с подтверждением"));
test.push(new Task("6.Какие из этих тагов соответствуют стандарту HTML?", '<script type="text/javascript">', '<script language="javascript">', '<script language="javascript" type="text/javascript">', '<script>'));
test.push(new Task("7.Какие функции выполняет JS(В вопросе не идет речь про платформу Node JS)", "Отвечает за функции на стороне клиента", "Создает стилевое оформление сайта", "Отвечает за работу с базами данных", "Создает разметку на странице сайта"));
test.push(new Task("8.Какие конструкции для циклов есть в javascript?", 'Три: for, while и do...while', 'Две: for и while', 'Только одна: for', 'Никаких из приведённых вариантов не являются циклами javascript'));
test.push(new Task("9.Сколько параметров можно передать функции?", 'Любое количество', 'Сколько указано в определении функции или больше', 'Сколько указано в определении функции или меньше', 'Ровно столько, сколько указано в определении функции'));
test.push(new Task("10.Что делает код: break me;?", 'Выходит из текущего блока цикла или switch на метку "me"', 'Ломает интерпретатор javascript', 'Выдает ошибку', 'В разных браузерах по-разному'));


//элементы документа, вопрос и ответы 
const answers = document.querySelectorAll(".answer");
const question = document.querySelector(".question");

for (let i = 0; i < answers.length; i++) {
  answers[i].addEventListener("click", function() {
    //добавление ответа пользователя к результатам
    resultats.push(new Status(answers[i].innerText));
    nextQuestionAnimation();
  });
}

//перемешивание ответов
function answerShaker(){
  for (var i = 0; i < 5; i++) {
    let changeByIndex = Math.round(Math.random()*3);
    let changeToIndex = Math.round(Math.random()*3);
    let temp = answers[changeToIndex].innerText;
    answers[changeToIndex].innerText = answers[changeByIndex].innerText;
    answers[changeByIndex].innerText = temp;
  }
}

//переход к первому вопросу
nextQuestion();
