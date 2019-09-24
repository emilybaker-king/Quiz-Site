
/*
    This is an IIFE - Immediately Invoked Function Expression
    IIFEs run as soon as they are defined
*/

//This variable exists in the global scope, which means it's less secure and can be accessed by anything
var global;

(function() {
    //Because this variable is inside of an IIFE, it is not in the global scope
    var variable = 30;

    //Make references to our elements that we are going to interact with
    var quizContainer = document.getElementById("quiz");
    var resultsContainer = document.getElementById("results");
    var submitButton = document.getElementById("submit");
    var resetButton = document.getElementById("reset");

    var myQuestions = [];

    //What does a quiz question consist of?
    //question text, answer choices, correct answer

    var exampleQuestion = {
        question: "What color is the sky?",
        answers: {
            a: "Blue",
            b: "Chartreuse",
            c: "Green"
        },
        correctAnswer: "a"
    }

    console.log(exampleQuestion.question);
    console.log(exampleQuestion.answers.b);

    var question2 = {
        question: "What is the capital city of Peru?",
        answers: {
            a: "Lima",
            b: "Cusco",
            b: "No idea"
        },
        correctAnswer= "a"
    }

    var question3 = {
        question: "Where is Waldo really?",
        answers: {
            a: "Antarctica",
            b: "Exploring the Pacific Ocean",
            c: "Sitting in a tree",
            d: "NONE YA BEEZEWAX"
        },
        correctAnswer: "d"
    }

    //add the question objects to our array of questions
    myQuestions.push(exampleQuestion, question2, question3);

    //Function to build a quiz that goes through out question objects and generates html for each question
    function buildQuiz() {

    }

    //function to show the results of the quiz
    function showResults() {

    }

    //function to reset the quiz
    function resetQuiz() {
        
    }

}) ();