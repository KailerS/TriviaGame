var timerStart = 35;
var questions = [{
    question: "Who is John 117?",
    answers: ["The Arbiter", "Master Chief", "Sgt. Johnson", "Captain Keyes"],
    correctAnswer: "Master Chief",
    image: "assets/images/masterChief.jpg",
}, {
    question: "What is the name of the ship that the series starts aboard?",
    answers: ["The Pillar of Autumn", "Dawn Under Heaven", "Endeavor", "Hannibal"],
    correctAnswer: "The Pillar of Autumn",
    image: "assets/images/unscPillarofAutumn.png",
}, {
    question: "What does UNSC stand for?",
    answers: ["United Nations Security Council", "United Nations Special Corps", "Ultimate Non Sense Center", "United Nations Space Command"],
    correctAnswer: "United Nations Space Command",
    image: "assets/images/unscLogo.jpg",
}, {
    question: "Who is the leader of Noble Team in Halo: Reach?",
    answers: ["Kat-320", "Emile-239", "Carter-259", "Spartan-312"],
    correctAnswer: "Carter-259",
    image: "assets/images/carter.jpg",
}, {
    question: "Which of the following is not one of the Prophets in Halo 2?",
    answers: ["Mercy", "Truth", "Salvation", "Regret"],
    correctAnswer: "Salvation",
    image: "assets/images/prophets.png",
}, {
    question: "Who is the main enemy fought throughout the campaign?",
    answers: ["Flood", "Covenant", "ODST", "Spartans"],
    correctAnswer: "Covenant",
    image: "assets/images/covenant.jpg",
}, {
    question: "What is another name for The Type-47 Ultra-Heavy Assault Platform?",
    answers: ["Scarab", "Wraith", "Scorpion", "Banshee"],
    correctAnswer: "Scarab",
    image: "assets/images/scarab.jpg",
}, {
    question: "After collecting all skulls in Halo 3 which helmet was unlocked for multiplayer?",
    answers: ["Recon", "Hayabusa", "EVA", "Security"],
    correctAnswer: "Hayabusa",
    image: "assets/images/hayabusa.jpg",
}, {
    question: "What century is the game set in?",
    answers: ["23rd", "45th", "26th", "30th"],
    correctAnswer: "26th",
    image: "assets/images/city.jpg",
}, {
    question: "Who is the first character mentioned?",
    answers: ["Cortana", "Master Chief", "The Arbiter", "Miranda Keyes"],
    correctAnswer: "Cortana",
    image: "assets/images/Cortana.jpg",
}];

var quizArea = $("#quizHolder");
var timer;


