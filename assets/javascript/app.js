$(document).ready( function() {
// VARIABLES
    var answers = [   
        {   
            question_text: "question text 1",
            answer_array: ["anser 1", "A1", "A2", "A3"],
            answer_index: 2
        },
        {    
            question_text: "question text 2",
            answer_array: ["A0", "A1", "A2", "A3"],
            answer_index: 3
        },

        {
            question_text: "question text 3",
            answer_array: ["A0","A1","A2","A3"],
            answer_index: 1
        }
    ];

//VARIABLES
    var r = 0;
    var correct = false;

// ACTIONS AND CLICKS

    // CLICK: WELCOME BUTTON
    $( "#welcomeBtn" ).click(function() {
       // console.log(answers[r].answer_array.length)
       clearButtons();
       buttonLoop();
       $( "#welcomeBtn" ).hide();
       $("#question").text(answers[r].question_text);
       // $(".choiceBtn").on(click, checkAnswers);              
    });

    // give the answer buttons the click fn()
    $( ".choiceBtn" ).click(function() {      
       checkAnswer()
      
    });    

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
        $("#answers").append("<span>");
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
        function buttonClicked() {
            delayButtonAlert = setTimeout( 3000);
        }

        // // Clear the timeout.
        // function cancelButtonAlert() {
        //     clearTimeout(delayButtonAlert)
        // }

    // fn(): check answers
        function checkAnswer(r) {
            console.log(answers[r].answer_index);
            var answrIndex = answers[r].answer_index;
            console.log(answrIndex);

        }



});