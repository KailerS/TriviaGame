const timerStart = 35;
const questions = [{
    // Q1
    question: "Who is John 117?",
    answers: ["The Arbiter", "Master Chief", "Sgt. Johnson", "Captain Keyes"],
    correctAnswer: "Master Chief",
    image: "assets/images/masterChief.jpg",
}, {
    // Q2
    question: "What is the name of the ship that the series starts aboard?",
    answers: ["The Pillar of Autumn", "Dawn Under Heaven", "Endeavor", "Hannibal"],
    correctAnswer: "The Pillar of Autumn",
    image: "assets/images/unscPillarofAutumn.png",
}, {
    // Q3
    question: "What does UNSC stand for?",
    answers: ["United Nations Security Council", "United Nations Special Corps", "Ultimate Non Sense Center", "United Nations Space Command"],
    correctAnswer: "United Nations Space Command",
    image: "assets/images/unscLogo.jpg",
}, {
    // Q4
    question: "Who is the leader of Noble Team in Halo: Reach?",
    answers: ["Kat-320", "Emile-239", "Carter-259", "Spartan-312"],
    correctAnswer: "Carter-259",
    image: "assets/images/carter.jpg",
}, {
    // Q5
    question: "Which of the following is not one of the Prophets in Halo 2?",
    answers: ["Mercy", "Truth", "Salvation", "Regret"],
    correctAnswer: "Salvation",
    image: "assets/images/prophets.png",
}, {
    // Q6
    question: "Who is the main enemy fought throughout the campaign?",
    answers: ["Flood", "Covenant", "ODST", "Spartans"],
    correctAnswer: "Covenant",
    image: "assets/images/covenant.jpg",
}, {
    // Q7
    question: "What is another name for The Type-47 Ultra-Heavy Assault Platform?",
    answers: ["Scarab", "Wraith", "Scorpion", "Banshee"],
    correctAnswer: "Scarab",
    image: "assets/images/scarab.jpg",
}, {
    // Q8
    question: "After collecting all skulls in Halo 3 which helmet was unlocked for multiplayer?",
    answers: ["Recon", "Hayabusa", "EVA", "Security"],
    correctAnswer: "Hayabusa",
    image: "assets/images/hayabusa.jpg",
}, {
    // Q9
    question: "What century is the game set in?",
    answers: ["23rd", "45th", "26th", "30th"],
    correctAnswer: "26th",
    image: "assets/images/city.jpg",
}, {
    // Q10
    question: "Who is the first character mentioned?",
    answers: ["Cortana", "Master Chief", "The Arbiter", "Miranda Keyes"],
    correctAnswer: "Cortana",
    image: "assets/images/Cortana.jpg",
}];

// Make a variable for easy acces to the jQuery selector
const quizArea = $("#quizHolder");
let timer;

const game = {

    questions: questions,
    counter: timerStart,
    // Counters to keep track for the user
    currentQuestion: 0,
    correct: 0,
    incorrect: 0,
    // Starts the clock so the player has to answer or move on
    countdown:() => {
        game.counter--;
        $("#counter-number").text(game.counter);
        if (game.counter === 0) {
            alert("Times up!")
            game.timeUp();
        }
    },
    // Loads the next question to advance the game
    loadQuestion: function() {

        timer = setInterval(game.countdown, 1000);

        quizArea.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

        for ( let i = 0; i < questions[this.currentQuestion].answers.length; i++) {
        quizArea.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i]
        + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
        }
    },
    // Goes to the next question and resets the clock
    nextQuestion: () => {
        game.counter = timerStart;
        $("#counter-number").text(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    },
    // Controls what happens when the clock reaches 0
    timeUp: function() {

        clearInterval(timer);

        $("#counter-number").html(game.counter);

        quizArea.html("<h2>You Ran Out of Time!</h2>");
        quizArea.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer);
        quizArea.append("<img src='" + questions[this.currentQuestion].image + "' />");

        if (game.currentQuestion === questions.length - 1) {
        setTimeout(game.results, 3 * 1000);
        }
        else {
        setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    // Loads the results and shows how many correct/ incorrect
    results: () => {

        clearInterval(timer);

        quizArea.html("<h2>Here is How You Scored!</h2>");

        $("#counter-number").text(game.counter);

        quizArea.append("<h3>Correct Answers: " + game.correct + "</h3>");
        quizArea.append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
        quizArea.append("<h3>You Didn't Answer: " + (questions.length - (game.incorrect + game.correct)) + "</h3>");
        quizArea.append("<br><button id='start-over'>Start Over?</button>");
    },
    // Checks to see if user selected right or wrong answer
    clicked: function(any) {
        clearInterval(timer);
        if ($(any.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
        this.answeredCorrectly();
        }
        else {
        this.answeredIncorrectly();
        }
    },
    // What happens when they answer incorrectly
    answeredIncorrectly: () => {

        game.incorrect++;

        clearInterval(timer);

        quizArea.html("<h2>Wrong!</h2>");
        quizArea.append("<h3>The Correct Answer was: " + questions[game.currentQuestion].correctAnswer + "</h3>");
        quizArea.append("<img src='" + questions[game.currentQuestion].image + "' />");

        if (game.currentQuestion === questions.length - 1) {
        setTimeout(game.results, 3 * 1000);
        }
        else {
        setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    // What happens when they answer correctly
    answeredCorrectly: () => {

        clearInterval(timer);

        game.correct++;

        quizArea.html("<h2>Correct!</h2>");
        quizArea.append("<img src='" + questions[game.currentQuestion].image + "' />");

        if (game.currentQuestion === questions.length - 1) {
        setTimeout(game.results, 3 * 1000);
        }
        else {
        setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    // Reset the game to the start
    reset: function() {
        this.currentQuestion = 0;
        this.counter = timerStart;
        this.correct = 0;
        this.incorrect = 0;
        this.loadQuestion();
    }
};
  
// When they click the start over button run the reset function
$("#quizContainer").on("click", "#start-over", () => game.reset());
// Runs the checking function wheather they clicked the right answer
$("#quizContainer").on("click", ".answer-button", any => game.clicked(any));
// Starts the game when they click begin
$("#quizContainer").on("click", "#start", () => {
    $("#quizContainer").prepend("<h2>Time Remaining: <span id='counter-number'>35</span> Seconds</h2>");
    game.loadQuestion();
});

