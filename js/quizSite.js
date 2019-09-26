
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

    var question1 = {
        question: "What color is the sky?",
        answers: {
            a: "Blue",
            b: "Chartreuse",
            c: "Brown"
        },
        correctAnswer: "a"
    }

    console.log(question1.question);
    console.log(question1.answers.b);

    var question2 = {
        question: "What is the capital city of Peru?",
        answers: {
            a: "Lima",
            b: "Cusco",
            c: "No idea"
        },
        correctAnswer: "a"
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
    myQuestions.push(question1, question2, question3);

    //Function to build a quiz that goes through out question objects and generates html for each question
    function buildQuiz() {
        //we need to go through each of our question objects and use them to build out the HTML to show a question

        for (var i = 0; i < myQuestions.length; i ++) {
           //create a display for the queation text

            //creating a new div called questionDiv that will hold information about a single question
           var questionDiv = document.createElement("div");
           //get the question text from the question we are looking at with this iteration of the loop
           questionDiv.innerText = myQuestions[i].question;

           //display the answer choices (and take user input to select an answer)

           //create a div to hold the question answers
           var answersDiv = document.createElement("div");
           answersDiv.classList.add("answers");

            
           //for each property in the current question's answer object
           /* a for in loop is used to go through the properties of an object */
           for (letter in myQuestions[i].answers) {
               //create the label for the radio button input
               var label = document.createElement("label");

               //create a radio button for each answer for this question
               var input = document.createElement("input");
               //configure the input element
               input.type = "radio";
               input.name = "question" + i;
               input.value = letter;

               //add the input to our label
               label.appendChild(input);

               //create some text from the current letter we're looking at and the corresponding answer for that letter
               var labelText = document.createTextNode(`${letter} : ${myQuestions[i].answers[letter]}`);
            //add text to the label
            label.appendChild(labelText);

            //add the label to the answers div
            answersDiv.appendChild(label);
           }

           //once all the answers are added, add the answerDiv to the questionDiv
           questionDiv.appendChild(answersDiv);
            
           //add the questionDiv to the quiz container
           quizContainer.appendChild(questionDiv);
        }
    }

    buildQuiz();

    //function to show the results of the quiz
    function showResults() {
        //get all of the answer containers from our quiz
        var answerContainers =  quizContainer.querySelectorAll(".answers"); //this will basically give us back an array containing everything on the quizContainer with the class "answers"

        //variable to keep track of how many they get right
        var numCorrect = 0;

        for (var i = 0; i < answerContainers.length; i ++) {
            //get the current answer container we're looking ar for the loop
            var answerContainer = answerContainers[i];

            //string to find which input is checked for the current question
            var selector = `input[name=question${i}]:checked`;

            //try to find the selected answer in the container and print out the value
            var userAnswer = (answerContainer.querySelector(selector) || {}).value; //if it can't find an input for a question, querySelector will give back null, since {}.value gives back undefined instead of null

            if (userAnswer === myQuestions[i].correctAnswer) {
                //they got it right
                numCorrect++;
                answerContainer.style.color = "green";
            } else {
                //they got it wrong
                answerContainer.style.color = "red";
            }
        }

        //add text to the results container to show how many they got right
        resultsContainer.innerText = "You got " + numCorrect + " out of " + myQuestions.length;
    }

    //call the showREsults function when the submit button is clicked
    submitButton.addEventListener("click", showResults);

    //function to reset the quiz
    function resetQuiz() {
        //clear out what's in the results container
        resultsContainer.innerText = "";
        //clear out the quiz container
        quizContainer.innerHTML = "";
        //rebuild the quiz
        buildQuiz();
    }

    //call the resetQuiz function when the reset button is clicked
    resetButton.addEventListener("click", resetQuiz);

}) ();