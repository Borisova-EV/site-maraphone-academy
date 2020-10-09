let list = document.querySelector('.comments-list');
let form = document.querySelector('.comments-form');
let textarea = document.querySelector('textarea');
let submit = document.querySelector('.button-submit');
form.onsubmit = function (evt) {
    evt.preventDefault();
    let li = document.createElement('li');
    li.classList.add('user-comments');
    li.textContent = textarea.value;
    list.append(li);
   textarea.value = '';
}
textarea.oninput = function () {
    if (textarea.value.length <10) {
            textarea.classList.add('warning');
            submit.disabled = true;
        } else if (textarea.value.length >120) {
            textarea.classList.add('warning');
            submit.disabled = true;
        } else {
            textarea.classList.remove('warning');
            submit.disabled = false;
        };
};


 