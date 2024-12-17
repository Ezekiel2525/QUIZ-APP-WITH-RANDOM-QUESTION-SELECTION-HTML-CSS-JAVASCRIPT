// ID's used to manipulate the DOM
const quizElement = document.getElementById('question');
const answerContainer = document.getElementById('answercontainer');
const nextBtn = document.getElementById('nextbtn');

let answeredQuestions = [];
let score = 0;
let currentQuestionIndex = 0;

//quiz
const quizArray = [
    {
        question : "Which of these countries hosted the world cup in 2022?",
        answers : [
            { text : "China", correct : false },
            { text : "Albania", correct : false },
            { text : "Switzerland", correct : false },
            { text : "Qatar", correct : true }
        ]
    },
    {
        question : "Which of these is an african country?",
        answers : [
            { text : "Qatar", correct : false },
            { text : "Morrocco", correct : true },
            { text : "Albania", correct : false },
            { text : "Switzerland", correct : false }
        ]
    },
    {
        question : "Which of these is a continent?",
        answers : [
            { text : "Australia", correct : true },
            { text : "USA", correct : false },
            { text : "China", correct : false },
            { text : "Switzerland", correct : false }
        ]
    },
    {
        question : "The first country to win the world cup is ?",
        answers : [
            { text : "Paraguay", correct : false },
            { text : "Brazil", correct : false },
            { text : "Argentina", correct : false },
            { text : "Uruguay", correct : true }
        ]
    },
    {
        question : "Which of these indian actors starred in the movie 'Dilwale'? ",
        answers : [
            { text : "Shahrukh Khan", correct : true },
            { text : "Salman Khan", correct : false },
            { text : "Amir Khan", correct : false },
            { text : "Prahbas", correct : false }
        ]
    },
    {
        question : "Which of these indian actors starred in the movie 'Baahubali'? ",
        answers : [
            { text : "Shahrukh Khan", correct : false },
            { text : "Salman Khan", correct : false },
            { text : "Amir Khan", correct : false },
            { text : "Prabhas", correct : true }
        ]
    },
    {
        question : "How many Balon'dors does Lionel messi have currently? ",
        answers : [
            { text : "8", correct : true },
            { text : "5", correct : false },
            { text : "7", correct : false },
            { text : "9", correct : false }
        ]
    },
    {
        question : "How many Balon'dors does Cristiano Ronaldo have currently? ",
        answers : [
            { text : "8", correct : false },
            { text : "5", correct : true },
            { text : "7", correct : false },
            { text : "9", correct : false }
        ]
    },
    {
        question : "The only black man and african to win the Balon'dor is? ",
        answers : [
            { text : "Samuel Etoo", correct : false },
            { text : "Didier Drogba", correct : false },
            { text : "George Weah", correct : true },
            { text : "Abedi Pele", correct : false }
        ]
    },
    {
        question : "The USA is situated in which continent? ",
        answers : [
            { text : "South America", correct : false },
            { text : "Asia", correct : false },
            { text : "North America", correct : true },
            { text : "Europe", correct : false }
        ]
    },
    {
        question : "Estonia is situated in which continent? ",
        answers : [
            { text : "South America", correct : false },
            { text : "Asia", correct : false },
            { text : "North America", correct : false },
            { text : "Europe", correct : true }
        ]
    },
    {
        question : "Eritrea is situated in which continent? ",
        answers : [
            { text : "South America", correct : false },
            { text : "Africa", correct : true },
            { text : "North America", correct : false },
            { text : "Europe", correct : false }
        ]
    },
    {
        question : "India is situated in which continent? ",
        answers : [
            { text : "South America", correct : false },
            { text : "Asia", correct : true },
            { text : "North America", correct : false },
            { text : "Europe", correct : false }
        ]
    },
    {
        question : "Which of these is a country? ",
        answers : [
            { text : "Bangalore", correct : false },
            { text : "Tokyo", correct : false },
            { text : "Tuvalu", correct : true },
            { text : "Moscow", correct : false }
        ]
    },
    {
        question : "Which of these is a country? ",
        answers : [
            { text : "Bamako", correct : false },
            { text : "Lagos", correct : false },
            { text : "Portland", correct : true },
            { text : "Moscow", correct : false }
        ]
    },
    {
        question : "Which of these artiste is from Africa? ",
        answers : [
            { text : "Jay Z", correct : false },
            { text : "Drake", correct : false },
            { text : "Burna Boy", correct : true },
            { text : "Chris Brown", correct : false }
        ]
    },
    {
        question : "Which of these male artiste is a billionaire according to Forbes? ",
        answers : [
            { text : "Jay Z", correct : true },
            { text : "Drake", correct : false },
            { text : "Burna Boy", correct : false },
            { text : "Chris Brown", correct : false }
        ]
    },
    {
        question : "Which of these female artiste is a billionaire according to Forbes? ",
        answers : [
            { text : "Nicki Minaj", correct : false },
            { text : "Beyonce", correct : false },
            { text : "Rihana", correct : true },
            { text : "Jennifer Lopez", correct : false }
        ]
    },
    {
        question : "The richest man in the world currently is? ",
        answers : [
            { text : "Bernard Renault", correct : false },
            { text : "Jeff Bezoz", correct : false },
            { text : "Elon Musk", correct : true },
            { text : "Mansa Musa", correct : false }
        ]
    },
    {
        question : "The most decorated footballer is? ",
        answers : [
            { text : "Lionel Messi", correct : true },
            { text : "Diego Maradona", correct : false },
            { text : "Pele", correct : false },
            { text : "Cristiano Ronaldo", correct : false }
        ]
    },
    {
        question : "Which of these is athletes is regarded as the GOAT OF sports? ",
        answers : [
            { text : "Lionel Messi", correct : false },
            { text : "Tiger Woods", correct : false },
            { text : "Michael Jordan", correct : true },
            { text : "Michael Phelps", correct : false }
        ]
    },
    {
        question : "Will Smith starred in one of these movies except? ",
        answers : [
            { text : "Bad BOys", correct : false },
            { text : "I am Legend", correct : false },
            { text : "True Lies", correct : true },
            { text : "Gemini Man", correct : false }
        ]
    },
    {
        question : "Shahrukh Khan starred in one of these movies except? ",
        answers : [
            { text : "3 idiots", correct : true },
            { text : "Pathaan", correct : false },
            { text : "Veer Zaara", correct : false },
            { text : "Zero", correct : false }
        ]
    },
    {
        question : "Which of these is an african country? ",
        answers : [
            { text : "Latvia", correct : false },
            { text : "Lithuania", correct : false },
            { text : "Mozambique", correct : true },
            { text : "Ireland", correct : false }
        ]
    },
    {
        question : "Which of these is companies makes Iphones? ",
        answers : [
            { text : "Samsung", correct : false },
            { text : "Apple", correct : true },
            { text : "Microsoft", correct : false },
            { text : "Banana", correct : false }
        ]
    },
];

// function to reset all parameters
const startQuiz = () => {
    score = 0;
    currentQuestionIndex = 0
    answeredQuestions = [];
    nextBtn.classList.remove("hide");
    nextBtn.innerHTML = "Next";
    showQuiz();
}

// function  to randomly select the question
const randomQuestion = () => {
    if(answeredQuestions.length === quizArray.length){
        return null;
    }

    let randomChoice;
    do {
        randomChoice = Math.floor(Math.random() * quizArray.length)
    } while ( answeredQuestions.includes(randomChoice));

    answeredQuestions.push(randomChoice);
    return quizArray[randomChoice];
}


const showQuiz = () => {
    let currentQuestion = randomQuestion();
    if(!currentQuestion){
        return scoreBoard(); // All questions have been answered
    }

    let quizNumber = currentQuestionIndex += 1; //numbering the questions
    quizElement.innerHTML = `${quizNumber}. ${currentQuestion.question}`; //WRITING THE QUESTION TO THE INTERFACE
    answerContainer.innerHTML = " "; // removing previous values or answers in the interface

    // looping through the answers array
    currentQuestion.answers.forEach((option) => {
        let button = document.createElement("button"); //create a button
        button.textContent = option.text; //write the text to the button
        button.classList.add("btn"); //add a class to the button
        if(option.correct){   
            button.dataset.correct = option.correct;  //giving each button its value
        }
        button.addEventListener("click", selectAnswer); //add an event select the answer
        answerContainer.appendChild(button); //append the button to the answer container div
    });

    nextBtn.classList.add("hide"); //hide the next button
};


const selectAnswer = (evt) => {
    const buttonSelect = evt.target  // making a specific button a target when clicked
    const rightAnswer = buttonSelect.dataset.correct === "true";
    if(rightAnswer) {
        buttonSelect.classList.add("correct"); //giving the selected button a class 
        score++;
    }else{
        buttonSelect.classList.add("wrong"); //giving the selected button a class 
    }

    Array.from(answerContainer.children).forEach(button => {
        button.disabled = true; //disabling all buttons after choosing an answer
        if(button.dataset.correct === "true"){
            button.classList.add("correct"); //giving the selected button a class and showing its value i.e Highlight correct answer
        }
    });

    nextBtn.classList.remove("hide"); //displaying the next button
}

nextBtn.addEventListener("click", () => {
    if(nextBtn.innerHTML === "Restart"){
        startQuiz(); // Restart the quiz
    }else{
        showQuiz(); // Show the new quiz
    }
});


const scoreBoard = () => {
    const scorePercentage = (score / quizArray.length) * 100;
    const message = verDict(scorePercentage);
    showResults(score, quizArray.length, scorePercentage, message);
}

//GRADES AND VERDICT
const verDict = (scorePercentage) => {
    if(scorePercentage === 100) return "Excellent!!!...🎉🎉🎉";
    else if(scorePercentage >= 90) return "Great!...💪";
    else if(scorePercentage >= 80) return "Very Good!...👌";
    else if(scorePercentage >= 70) return "Good!...🙂";
    else if(scorePercentage >= 60) return "Very Hopeful!...😊";
    else if(scorePercentage >= 50) return "Fair Result!...🥱";
    else if(scorePercentage >= 40) return "Baddddddddd!...😬";
    else if(scorePercentage >= 30) return "Very Bad!!...🤦";
    else if(scorePercentage >= 20) return "Very Very Bad!!...😭";
    else if(scorePercentage >= 10) return "Very Worse!!!...🙆";
    return "Very Very Worse...😡"
}

const showResults = (score, totalQuestions, scorePercentage, message) => {
    quizElement.style.textAlign = "center";
    answerContainer.innerHTML = " "; // removing previous values or answers in the interface
    quizElement.innerHTML = `You got ${score} out of ${totalQuestions}.<br><br>` +
                            `Your score precentage: ${scorePercentage.toFixed(2)}% <br><br>` +
                            `Verdict: ${message}<br><br>`
    nextBtn.classList.remove("hide"); //displaying the next button
    nextBtn.innerHTML = "Restart"; //  onclick of the button Restart the quiz
}

startQuiz();








