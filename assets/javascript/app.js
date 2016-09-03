
var answers = [   
    {
        question_text: "text"
        answer_array: ["A0", "A1", "A2", "A3"],
        answer_index: 2
    },
   {
        question_text: "text"
        answer_array: ["A0", "A1", "A2", "A3"],
        answer_index: 3
    },

     {
        question_text: "text"
        answer_array: ["A0","A1","A2","A3"],
        answer_index: 1
    }
];


var r = 0;
var correct = false;


//For each answer in answer_array, crate a button 
     //n will be the index in the loop



//

for (var i = 0; i < answer_array.length; i++) {
    createButtons(i);
}


// inserts the answer array data into the  button

function createButtons(i) {
    var newBtn = $("<button class='btn btn-outline-primary'>");
    var btnText = answers[r].answer_array[i];
    var ansIndex = i; /*this is the index to store in the button to check the correct*/

    // adds the index of the answer to the button
    newBtn.attr("data-answerIndex", ansIndex)
    .text(btnText);
    .addclass(choiceBtn);
}


function clearButtons() {
    $("#answers").empty();
}

$( "#welcomBtn" ).click(function() {
  alert( "Handler for .click() called." );
});
