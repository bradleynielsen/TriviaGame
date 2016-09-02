
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

//For each answer in answer_array, crate a button 
     //n will be the index in the loop





for (var i = 0; i < answer_array.length; i++) {
    createButton(i);
}


// inserts the answer array data into the  button

function createButton(i) {
    var newBtn = $("<button class='btn'>");
    var btnText = answers[r].answer_array[i];

    //next adds the index of the answer of where it is in the array
    newBtn.attr("data-answerIndex", answers[r].answer_array[i]);
    newBtn.text(btnText);
}


