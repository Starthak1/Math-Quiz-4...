function adduser(){
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location.replace("game.html")
}
player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + ": ";
document.getElementById("player2_name").innerHTML = player2_name + ": ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
function send(){
    get_num = document.getElementById("word").value;
    getnum = document.getElementById("word1").value;
    answer = parseInt(get_num) * parseInt(getnum);
    question = "<h4 id='word_display'> Q. " + get_num + " X " + getnum + "</h4>";
    input_box = "<br>Answer: <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
    document.getElementById("word1").value = "";
}
question_turn = "player1";
answer_turn = "player2";
function check(){
    getAnswer = document.getElementById("input_check_box").value;
    if(getAnswer == answer){
        if(answer_turn == "player1"){
            updateP1 = player1_score + 1;
            player1_score = updateP1
            document.getElementById("player1_score").innerHTML = updateP1;
        }
        else{
            updateP2 = player2_score + 1;
            player2_score = updateP2
            document.getElementById("player2_score").innerHTML = updateP2;
        }
    }
    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }
    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}