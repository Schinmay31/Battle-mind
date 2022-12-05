let correctPaths = ["img2","img5","img8","img9"];
var idx = 0;
let logicArray = [["img1","img2","img3"],["img4","img5","img6"],["img7","img8","img9"]];
// let myCurrentPosition = [0,0];
let myCurrimg = 1;
// let optionsToGive = [];
var gameStarted = false;
let idx1 = 0;
let idx2 = 0;
var option1 = "";
var option2 = "";
let myCurrPosition = logicArray[idx1][idx2];
var clickedOption ="";


$("#img"+myCurrimg).html("<img src='images/swordsman.png'></img>")


var questions = {
    ques :[{
    ques1:"my name is chinmay ____",
    corr_ans : "sabnis",
    wrong_ans: "dalal",
   
    },
    {
        ques1:"college name ____",
        corr_ans : "dypcoe",
        wrong_ans: "pccoe",
        
    },
    {
        ques1:"Year ____",
        corr_ans: "1",
        wrong_ans: "2",
       
    },
    {
        ques1:"expected Package ____",
        corr_ans : "10 lpa",
        wrong_ans: "12 lpa",
        
    }
]
    
}


if(!gameStarted){
    gameStarted = true;

$(document).on("keydown", function(){
    $("h1").text("Game Started!!");
    
    Options();
    giveRiddle(idx);
    
    
});
}

$(".box").on("click", function(){
        
    clickedOption = $(this).attr("id");
    if(clickedOption === correctPaths[idx]){
        $(".box").html("");
        $("#" + clickedOption).html("<img src='images/swordsman.png'></img>");
        idx++;

    }
   
})






function giveRiddle(idx){
    var alt = questions.ques[idx].ques1;
    console.log(alt);
    
   alert(alt);
}

function Options(){
    giveOptionsIdx();
    currect_option = questions.ques[idx].corr_ans;
    wrong_option = questions.ques[idx].wrong_ans;

    if(option1 === correctPaths[idx]){
        $("#" + option1).text(currect_option);
        $("#" + option2).text(wrong_option);
    }
    else{
        $("#" + option2).text(currect_option);
        $("#" + option1).text(wrong_option);
        
    }
    
   
}
function giveOptionsIdx(){
    idx1++;
    option1 = logicArray[idx1][idx2];
    idx1--;
    idx2++;
    option2 = logicArray[idx1][idx2];
    idx2--;

     

}