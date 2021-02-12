$(document).ready(function() {
    alert("Welcome x/o Game");
    var $player1=prompt("Player 1: Enter Your Name","Mani");
    var $player2=prompt("Player 2: Enter Your Name","ashkan");
    var $playerturn=0;
    $("#p1").html("Player 1: "+$player1);
    $("#p2").html("Player 2: "+$player2);
    alert($player1+" First Turn is Yours and Your Symbol is O");
    $("#cp").html($player1);
    $(".box").click(function(){
        $(this).css("cursor","not-allowed");
    });
    $(".box").click(function(){
        if ($playerturn===0 && $(this).html()==="" && $(this).html() !== "X") {
            $(this).html("O");
            $playerturn=1;
            $("#cp").html($player2);
        }else if($playerturn===1 && $(this).html()==="" && $(this).html() !== "O"){
            $(this).html("X");
            $playerturn=0;
            $("#cp").html($player1);
        }else{
            if($playerturn===0){
                alert($player1+": Wrong Move or Not Allowed");
            }else{
                alert($player2+": Wrong Move or Not Allowed");
            }
        }
    });
    var checkstatus=setInterval(check,1000);
    function check(){
        if ($("#box1").html()==="X" && $("#box2").html()==="X" && $("#box3").html()==="X" ) {
            alert($player2+" is winner");
            clearInterval(checkstatus);
            $(".box").off("click");
            $(".box").css("cursor","not-allowed");
        }else if ($("#box4").html()==="X" && $("#box5").html()==="X" && $("#box6").html()==="X" ) {
            alert($player2+" is winner");
            clearInterval(checkstatus);
            $(".box").off("click");
            $(".box").css("cursor","not-allowed");
        }else if ($("#box7").html()==="X" && $("#box8").html()==="X" && $("#box9").html()==="X" ) {
            alert($player2+" is winner");
            clearInterval(checkstatus);
            $(".box").off("click");
            $(".box").css("cursor","not-allowed");
        }else if ($("#box1").html()==="X" && $("#box4").html()==="X" && $("#box7").html()==="X" ) {
            alert($player2+" is winner");
            clearInterval(checkstatus);
            $(".box").off("click");
            $(".box").css("cursor","not-allowed");
        }else if ($("#box2").html()==="X" && $("#box5").html()==="X" && $("#box8").html()==="X" ) {
            alert($player2+" is winner");
            clearInterval(checkstatus);
            $(".box").off("click");
            $(".box").css("cursor","not-allowed");
        }else if ($("#box3").html()==="X" && $("#box6").html()==="X" && $("#box9").html()==="X" ) {
            alert($player2+" is winner");
            clearInterval(checkstatus);
            $(".box").off("click");
            $(".box").css("cursor","not-allowed");
        }else if ($("#box1").html()==="X" && $("#box5").html()==="X" && $("#box9").html()==="X" ) {
            alert($player2+" is winner");
            clearInterval(checkstatus);
            $(".box").off("click");
            $(".box").css("cursor","not-allowed");
        }else if ($("#box3").html()==="X" && $("#box5").html()==="X" && $("#box7").html()==="X" ) {
            alert($player2+" is winner");
            clearInterval(checkstatus);
            $(".box").off("click");
            $(".box").css("cursor","not-allowed");
        }else if ($("#box1").html()==="O" && $("#box2").html()==="O" && $("#box3").html()==="O" ) {
            alert($player1+" is winner");
            clearInterval(checkstatus);
            $(".box").off("click");
            $(".box").css("cursor","not-allowed");
        }else if ($("#box4").html()==="O" && $("#box5").html()==="O" && $("#box6").html()==="O" ) {
            alert($player1+" is winner");
            clearInterval(checkstatus);
            $(".box").off("click");
            $(".box").css("cursor","not-allowed");
        }else if ($("#box7").html()==="O" && $("#box8").html()==="O" && $("#box9").html()==="O" ) {
            alert($player1+" is winner");
            clearInterval(checkstatus);
            $(".box").off("click");
            $(".box").css("cursor","not-allowed");
        }else if ($("#box1").html()==="O" && $("#box4").html()==="O" && $("#box7").html()==="O" ) {
            alert($player1+" is winner");
            clearInterval(checkstatus);
            $(".box").off("click");
            $(".box").css("cursor","not-allowed");
        }else if ($("#box2").html()==="O" && $("#box5").html()==="O" && $("#box8").html()==="O" ) {
            alert($player1+" is winner");
            clearInterval(checkstatus);
            $(".box").off("click");
            $(".box").css("cursor","not-allowed");
        }else if ($("#box3").html()==="O" && $("#box6").html()==="O" && $("#box9").html()==="O" ) {
            alert($player1+" is winner");
            clearInterval(checkstatus);
            $(".box").off("click");
            $(".box").css("cursor","not-allowed");
        }else if ($("#box1").html()==="O" && $("#box5").html()==="O" && $("#box9").html()==="O" ) {
            alert($player1+" is winner");
            clearInterval(checkstatus);
            $(".box").off("click");
            $(".box").css("cursor","not-allowed");
        }else if ($("#box3").html()==="O" && $("#box5").html()==="O" && $("#box7").html()==="O" ) {
            alert($player1+" is winner");
            clearInterval(checkstatus);
            $(".box").off("click");
            $(".box").css("cursor","not-allowed");
        }else if($("#box1").html()!=="" && $("#box2").html()!=="" && $("#box3").html()!=="" && $("#box4").html()!=="" && $("#box5").html()!=="" && $("#box6").html()!=="" && $("#box7").html()!=="" && $("#box8").html()!=="" && $("#box9").html()!==""  ){
            alert(" No One Is Winner ");
            clearInterval(checkstatus);
            $(".box").off("click");
            $(".box").css("cursor","not-allowed");
        }
    }
});