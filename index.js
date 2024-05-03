const quizData = [
    {
        question: "What is the capital of France?",
        a: "Paris",
        b: "London",
        c: "Berlin",
        d: "Madrid",
        correct: "a",
    },
    {
        question: "What is 2 + 2?",
        a: "3",
        b: "4",
        c: "5",
        d: "6",
        correct: "b",
    },
    {
        question: "What is the powerhouse of the cell?",
        a: "Nucleus",
        b: "Mitochondria",
        c: "Ribosome",
        d: "Chloroplast",
        correct: "b",
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        a: "Ernest Hemingway",
        b: "Harper Lee",
        c: "F. Scott Fitzgerald",
        d: "J.D. Salinger",
        correct: "b",
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswer() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            displayResult();
        }
    }
});

function displayResult() {
    let resultHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>`;
    quizData.forEach((question, index) => {
        resultHTML += `<p><strong>Question ${index + 1}:</strong> ${question.question} - Correct Answer: ${question[question.correct]}</p>`;
    });
    resultHTML += `<button onclick="location.reload()">Reload</button>`;
    quiz.innerHTML = resultHTML;
}
