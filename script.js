// Объявление переменных
const myBtn = document.querySelector("#myBtn");
const nameInput = document.querySelector("#name");
const sus = document.querySelector(".xd");




let random=Math.floor(Math.random() * (20 - 1 +1 ) + 1);
console.log(random);
let i=0

myBtn.addEventListener(`click`,()=>{
    i++
    let input=nameInput.value
    if(input==random){
        sus.classList.add("succes");
        sus.classList.remove("error");
        sus.textContent=`Успешно вы угадали число ${random} за ${i} попыток, я загадал новое`;
    random=Math.floor(Math.random() * (20 - 1 +1 ) + 1);
    }
    else if(input<random){
        sus.classList.add("error");
        sus.classList.remove("succes");
        sus.textContent=`Ваше число меньше загаданного(попытка ${i})`;
    }
    else if(input>random){
        sus.classList.add("error");
        sus.classList.remove("succes");
        sus.textContent=`Ваше число больше загаданного(попытка ${i})`;
    }
      
})
// получ случ число
// function getRandomArbitary(min, max) {
// 	return Math.random() * (max - min) + min;
// }

// 	return Math.random() * (max - min +1 ) + min;
 


//от 0 до 10
// Math.random() * (10 - 0 +1 ) + 0;
 // что бы окр нужно но только в меньшуюю сторону Math.floor(Math.random() * (10 - 0 +1 ) + 0);