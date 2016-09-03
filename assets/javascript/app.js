$(document).ready( function() {
// VARIABLES
    var answers = [   
        {   
            question_text: "Taxation is ___.",
            answer_array: ["a voluntary contribution to state revenue", "certain as death", "theft", "justified under implied contract"],
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
    // var questionTimeout = setTimeout();

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
  


// FUNCTIONS
    // fn() ADD BUTTONS TO THE ANSWER DIV 
    function createButtons(i) {
        var newBtn = $("<button class='btn btn-outline-primary choiceBtn answerButton'>");

        var btnText = answers[r].answer_array[i];
            console.log(btnText);
        
        //this is the index to store in the button to check the correct
        var iIndex = i; 

        // adds the index of the answer to the button
        newBtn.attr("data-answerIndex", iIndex)
            .text(btnText)
            .click(function() {      
                console.log("checking answers")
                var choiceIndex = $(this).data("answerIndex");
                console.log("choiceIndex1="+choiceIndex);
                checkAnswer(r,choiceIndex);
             })
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
        

        // // Clear the timeout.
        // function cancelButtonAlert() {
        //     clearTimeout(delayButtonAlert)
        // }

    // fn(): check answers
        function checkAnswer(r, choiceIndex) {
            console.log("r="+r);
            var answerIndex = answers[r].answer_index;
            console.log("answerIndex="+answerIndex);
            // var choiceIndex = $(this).data("answerIndex");
            console.log("choiceIndex="+choiceIndex);


            // if answerIndex === choiceIndex
                    // run the win fn()
                // else
                    // run the fail fn()


            r++;

        }

    //Display

    // fn(): start timer
        function startTimer() {

        }

    // fn(): start timer
        function resetTimer() {
            setTimeout(buttonAlert, 3000);
            
        }


});