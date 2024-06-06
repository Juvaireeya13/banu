const question = [
    {
        question:"which is largest animal in the world?",
        answer:[
            {text:"shark",correct:false},
            {text:"Blue whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    },
    {
        question:"which is the smallest continent in the world?",
        answer:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Arctic",correct:false},
            {text:"Africa",correct:false},
        ]  
    },
    {
        question:"whats the smallest country in the world?",
        answer:[
            {text:"Tockoy",correct:false},
            {text:"The Vatican",correct:true},
            {text:"Africa",correct:false},
            {text:"Srilanka",correct:false},
        ]
    },
    {
        question:"which is largest river in the world?",
        answer:[
            {text:"Ganga",correct:false},
            {text:"The Nile",correct:true},
            {text:"Yamuna",correct:false},
            {text:"Gothavary",correct:false},
        ]

    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;
    
}
