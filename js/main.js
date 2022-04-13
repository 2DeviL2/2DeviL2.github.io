document.querySelector('#hb1').addEventListener('click', ()=> {
   document.querySelector(".inner-body").scrollIntoView({block: "start", behavior: "smooth"})
});

document.querySelector('#hb3').addEventListener('click', ()=> {
   document.querySelector(".test").scrollIntoView({block: "center", behavior: "smooth"})
});

while(window.sessionStorage.getItem('userName') == "null" || window.sessionStorage.getItem('userName') == ''|| window.sessionStorage.getItem('userName') == null) {
   window.sessionStorage.setItem('userName', prompt("Привет, представься пожалуйста"));
   alert("Добро пожаловать!, " + window.sessionStorage.getItem('userName') + ", теперь оно будет висеть в верхнем правом углу.");
}

let tempExample=0;
const texts =  document.querySelectorAll('.task-for-users');
texts.forEach(x=>x.style.display="none");
texts[0].style.display = "flex";

document.getElementById('name').innerHTML = window.sessionStorage.getItem('userName');

document.querySelector('#btn1').addEventListener('click', ()=> {
   let numbers = prompt("Введите через пробел основание и высоту треугольника").split(' ');
   document.querySelector('#exmp1').style.display = 'inherit';
   if (numbers[0]*numbers[1]/2 == '' || isNaN(numbers[0]*numbers[1]/2)){
	    alert('Были введены не корректные значение, попробуйте еще раз');
	}
	else{
		 alert(numbers[0]*numbers[1]/2);
	}
   hideAnimation(function(){}, document.querySelector('#exmp1'));
})

document.querySelector('#btn2').addEventListener('click', ()=> {
   alert(prompt("Введите первую строку").length == prompt("Введите вторую строку").length);
   document.querySelector('#exmp2').style.display = 'inherit';
   hideAnimation(function(){}, document.querySelector('#exmp2'));
})

document.querySelector('#btn3').addEventListener('click', ()=> {
   let nums = prompt("Введите через пробел массив чисел").split(' ').sort(function(a, b) {
      return a - b;
    });
    alert(nums[0]);
    alert(nums[nums.length-1]);
    document.querySelector('#exmp3').style.display = 'inherit';
    hideAnimation(function(){}, document.querySelector('#exmp3'));
})

document.querySelector('#btn4').addEventListener('click', ()=> {
   let d1 = new Date();
   alert('Время пошло, чтобы закончить замер нажмите ОК');
   let d2 = new Date();
   alert('Прошло ' + ((d2-d1)/1000) + ' секунд');
   document.querySelector('#exmp4').style.display = 'inherit';
   hideAnimation(function(){}, document.querySelector('#exmp4')); 
})

document.querySelector('#hb2').addEventListener(
   "click", () => {
      document.querySelector(".win").style.display = "flex";
      hideAnimation(function(){
      }, document.querySelector(".win"));
   }
)

document.querySelector(".menu").addEventListener(
   'click', (e) => {
   e.stopPropagation();
   }
)

document.querySelector("#next").addEventListener(
   'click', () => {
      hideAnimation(function(){
         texts[tempExample].style.display = "none";
      }, document.querySelector(".task-for-users"));
      hideAnimation(function(){
         tempExample = (tempExample+1)%(texts.length);
         texts[tempExample].style.display = "flex";
      }, document.querySelector(".task-for-users"));      

   }
)

document.querySelector("#back").addEventListener(
   'click', () => {
      hideAnimation(function(){
         texts[tempExample].style.display = "none";
      }, document.querySelector(".task-for-users"));
      hideAnimation(function(){
         tempExample = Math.abs((tempExample-1)%(texts.length));
         texts[tempExample].style.display = "flex";
      }, document.querySelector(".task-for-users")); 
   }
)

document.querySelector('.win').addEventListener(
   "click", () => {
      hideAnimation(function(){
         document.querySelector(".win").style.display = "none";
      }, document.querySelector(".win"));
   }
)

function hideAnimation(fun, element){
   element.classList.add('hide');
         setTimeout(function(){
         fun();
      }, 500);
      setTimeout(
         function(){
            element.classList.remove('hide');
      }, 500);
}

document.querySelector(".curName").innerHTML = sessionStorage.getItem("userName");
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDate();

document.querySelector(".curDate").innerHTML = day + "." + month + "." + year;


function openOver() {
	document.querySelector(".overlay").style.width = "100%";
	document.querySelector(".overlay").style.opacity = "1";
}

function closeOver() {
	document.querySelector(".overlay").style.width = "0%";
	document.querySelector(".overlay").style.opacity = "0";
} 

