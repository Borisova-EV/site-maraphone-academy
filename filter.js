let select = document.querySelector('select');
let articles = document.querySelectorAll('.article-item');
let list = document.querySelector('.article-list')
select.onchange = function (){
    for (let articleCategory of articles) {
        if (articleCategory.dataset.category !== select.value && select.value !== 'all') {
            articleCategory.classList.add('visually-hidden');
            list.classList.add('one-article');
        } else {
            articleCategory.classList.remove('visually-hidden');
            list.classList.remove('one-artcle');
        };

    };
};