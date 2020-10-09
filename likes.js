let likes = document.querySelector('.likes');
let likesNum = document.querySelector('.likes-number');
let counter = 16;
likes.onclick = function () {
   if (likes.classList.contains('.added')){
        counter--;
    } else {
        counter++;
    };
    likes.classList.toggle('.added');
    likesNum.textContent = counter;
} 