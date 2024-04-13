const questions = Array.from(document.getElementsByClassName('question'));
let flag = true;
let idx;

function openAccordian(image, ans, index) {
    image.src = './assets/images/icon-minus.svg';
    ans.classList.add('active');
    idx = index;
}

questions.forEach((question, index) => {
    question.addEventListener('click', () => {
        if (flag) {
            console.log("If ",idx, index);
            openAccordian(Array.from(question.children)[1], question.nextElementSibling, index);
            flag = false;
        }
        else {
            console.log("Else ",idx, index);
            Array.from(questions[idx].children)[1].src = './assets/images/icon-plus.svg';
            questions[idx].nextElementSibling.classList.remove('active');

            if (index != idx) {
                    openAccordian(Array.from(question.children)[1], question.nextElementSibling, index);
            }
            else{
                flag = true;
            }
        }
    })
});