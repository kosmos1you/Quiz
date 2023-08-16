let nest = document.querySelector('#next');
let pref = document.querySelector('#pref');
let QuizItem = document.querySelectorAll('.quiz-form_item');
let form = document.querySelector('.quiz-form');
let step = 0;

nest.onclick = function () {
    QuizItem[step].classList.remove("active");
    QuizItem[step + 1].classList.add('active')
    console.log(QuizItem);
    step ++;
    
};

pref.onclick = function () {
    QuizItem[step].classList.remove("active");
    QuizItem[step -1 ].classList.add('active')
    console.log(QuizItem);
    step --;
};