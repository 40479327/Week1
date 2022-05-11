
/* array with quiz questions */
const quizQuestions = [
    {
        a: "Aliens...",
        b: "What if I told you...",
        c: "General Kenobi",
        correct: "a",
    },
    {
        a: "Shut up and take my money",
        b: "Please, tell me more",
        c: "I am once again...",
        correct: "c",
    },
    {
        a: "I don't always...",
        b: "This is where the fun begins",
        c: "But thats none of my business",
        correct: "b",
    },
    {
        a: "One does not simply...",
        b: "General Kenobi",
        c: "Please, tell me more",
        correct: "b",
    },
    {
        a: "What if I told you...",
        b: "Shut up and take my money",
        c: "I don't always...",
        correct: "c",
    },
    {
        a: "Aliens...",
        b: "I am once again...",
        c: "But thats none of my business",

        correct: "c",
    },
    {
        a: "What if I told you...",
        b: "Shut up and take my money",
        c: "General Kenobi",
        correct: "a",
    },
    {
        a: "This is where the fun begins",
        b: "I don't always...",
        c: "One does not simply...",
        correct: "c",
    },
    {
        a: "I am once again...",
        b: "Shut up and take my money",
        c: "Aliens...",
        correct: "b",
    },
    {
        a: "One does not simply...",
        b: "Please, tell me more",
        c: "This is where the fun begins",
        correct: "b",
    },

];

/* define constants */
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const submitButton = document.getElementById('submit')

/* set currentQuiz and score to 0 */
let currentQuiz = 0
let score = 0


/* Run the quiz using the questions from the array */
loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizQuestions = quizQuestions[currentQuiz]

    a_text.innerText = currentQuizQuestions.a
    b_text.innerText = currentQuizQuestions.b
    c_text.innerText = currentQuizQuestions.c

}

/* removes selected answer from previous question */
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

/* returns selected answer */
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


/* Every button click +1 to currentQuiz, +1 to score if right*/
submitButton.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizQuestions[currentQuiz].correct) {
           score++
        }

       currentQuiz++

       /* if the current quiz is less than 10 load quiz otherwise remove quiz and show score */
       if(currentQuiz < quizQuestions.length) {
           loadQuiz()
        } else {
            if(score == quizQuestions.length) {
                quiz.innerHTML = `
                <h1>You are the Lord of the Memes!</h1>
                <h2>You answered ${score}/${quizQuestions.length} questions correctly</h2>
                <button onclick="location.reload()">Play again?</button>
                `
            } else {
                quiz.innerHTML = `
                <h2>You answered ${score}/${quizQuestions.length} questions correctly</h2>

                <button onclick="location.reload()">Play again?</button>
                `
            }
        }

        changeImage()
        
    }
})

/* Array of images for quiz questions */
var images = [
    "../images/quiz1.PNG",
    "../images/quiz2.jpg",
    "../images/quiz3.jpg",
    "../images/quiz4.jpg",
    "../images/quiz5.jpg",
    "../images/quiz6.jpg",
    "../images/quiz7.jpg",
    "../images/quiz8.jpg",
    "../images/quiz9.jpg",
    "../images/quiz10.jpg",
  ];

  var index = 0;

  function buildImage() {
    var img = document.createElement('img')
    img.src = images[index];
    document.getElementById('content').appendChild(img);
  }

  function changeImage(){
    var img = document.getElementById('content').getElementsByTagName('img')[0]
    index++;
    img.src = images[index];
  }

