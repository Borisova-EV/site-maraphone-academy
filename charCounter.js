let textarea = document.querySelector('textarea');
let submit = document.querySelector('.button-submit');

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



 