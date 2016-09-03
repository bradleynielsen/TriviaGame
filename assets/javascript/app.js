$(document).ready( function() {


var answers = [   
    {   
        question_text: "text",
        answer_array: ["A0", "A1", "A2", "A3"],
        answer_index: 2
    },
    {    
        question_text: "text",
        answer_array: ["A0", "A1", "A2", "A3"],
        answer_index: 3
    },

    {
        question_text: "text",
        answer_array: ["A0","A1","A2","A3"],
        answer_index: 1
    }
];


var r = 0;
var correct = false;



function createButtons(i) {
    var newBtn = $("<button class='btn btn-outline-primary'>");
        console.log(newBtn);
    var btnText = answers[r].answer_array[i];
        console.log(btnText);
    
    //this is the index to store in the button to check the correct
    var ansIndex = i; 

    // adds the index of the answer to the button
    newBtn.attr("data-answerIndex", ansIndex)
    .text(btnText)
    // .addclass(choiceBtn)
    
};



// CLEAR THE BUTTONS
    function clearButtons() {
        $("#answers").empty();
    }

// loop through the answers to creat buttons
function buttonLoop(){
    for (var i = 0; i < answers[r].answer_array.length; i++) {
        
        createButtons(i);
    }
};


// WELCOME BUTTON
$( "#welcomeBtn" ).click(function() {
   // console.log(answers[r].answer_array.length)
   buttonLoop();
  
});

});