$(document).ready( function() {
// VARIABLES
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

// FUNCTIONS
    // fn() ADD BUTTONS TO THE ANSWER DIV 
    function createButtons(i) {
        var newBtn = $("<button class='btn btn-outline-primary choiceBtn'>");
            console.log(newBtn);

        var btnText = answers[r].answer_array[i];
            console.log(btnText);
        
        //this is the index to store in the button to check the correct
        var ansIndex = i; 

        // adds the index of the answer to the button
        newBtn.attr("data-answerIndex", ansIndex)
            .text(btnText)


        $("#answers").append(newBtn);

    };


    // fn(): CLEAR THE ANSWERS DIV
        function clearButtons() {
            $("#answers").empty();
        }

    // fn(): ANSWER LOOP
        function buttonLoop(){
            for (var i = 0; i < answers[r].answer_array.length; i++) {
                
                createButtons(i);
            }
        };

// ACTIONS AND CLICKS
    // CLICK: WELCOME BUTTON
    $( "#welcomeBtn" ).click(function() {
       // console.log(answers[r].answer_array.length)
       clearButtons();
       buttonLoop();
       $( "#welcomeBtn" ).hide();
       $("#question").text()
      
    });

});