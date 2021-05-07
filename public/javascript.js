function checkLove(){
    var question1 = document.quizLove.question1.value;
    var question2 = document.quizLove.question2.value;
    var question3 = document.quizLove.question3.value;
    var question4 = document.quizLove.question4.value;
    var question5 = document.quizLove.question5.value;
    var question6 = document.quizLove.question6.value;
    var question7 = document.quizLove.question7.value;
    var question8 = document.quizLove.question8.value;
    var question9 = document.quizLove.question9.value;
    var question10 = document.quizLove.question10.value;
    var question11 = document.quizLove.question11.value;
    var question12 = document.quizLove.question12.value;
    var question13 = document.quizLove.question13.value;
    var question14 = document.quizLove.question14.value;
    var question15 = document.quizLove.question15.value;
    var playlistHappy = ["Once Acen - Best Life", "Afro B - Djadja" , "Lucenzo - Danza Kuduro" , "DJ snake - Taki taki" , "Kehlani - Good life" , "Rita ora - anywhere"];
    var playlistSad = ["Selena Gomez - We don't talk any more", "James Bay - let it go", "Eminem - when im gone", "Alan Walker - faded", "Jay Sean - Tears in the ocean", "Akon - lonely", "Bob - Airplanes"];
    var playlistLove = ["Jessica Mauboy - Like this" , "TaylorSwift - Love Story" , "Rahat Fateh Ali Khan - Teri Ore" , "Tory Lanez - Luv", "Thomas Rhett - marry me", "Jhene Aiko - Her", "Ellie Goulding - Love me like you do"];
    var equal= [playlistSad, playlistSad, playlistSad]


  
     correct1  = 0;
     correct2  = 0;
     correct3  = 0;

    //Love
    if(question1 === "yes"){
        correct1+= 20;
    } else{
        
    }

    if(question2 === "yes"){
        correct1+= 20;
    }

    if(question3 === "yes"){
        correct1+= 20;
    }
    

    if(question4 === "yes"){
        correct1+= 20;
    }
    

    if(question5 === "yes"){
        correct1+= 20;
    }
    
    //Happy
    if(question6 ==="yes"){
        correct2+= 20;
    }
    
    if(question7 ==="yes"){
        correct2+= 20;
    }
    
    if(question8 ==="yes"){
        correct2+= 20;
    }
    
    if(question9 ==="yes"){
        correct2+= 20;
    }
    
    //sad
    if(question10 ==="yes"){
        correct2+= 20;
    }
    

    if(question11 ==="yes"){
        correct3+= 20;
    }
    

    if(question12 ==="yes"){
        correct3+= 20;
    }
    

    if(question13 ==="yes"){
        correct3+= 20;
    }

    if(question14 ==="yes"){
        correct3+= 20;
    }
    
    if(question15 ==="yes"){
        correct3+= 20;
    }
    
    

    document.getElementById("after_submit").style.visibility = "visible";


    if(correct1 > correct2 + correct3){
        document.getElementById("number_correct").innerHTML = "Your mood is love: " + correct1 +  "%."+ "" + "\n" + "\n" + playlistLove ;
    } else if(correct2 > correct3 + correct1){
        document.getElementById("number_correct").innerHTML = "Your mood is happy: " + correct2 +  "%." + "\n" + "\n" + playlistHappy;
    } else if(correct3 > correct2 + correct1){
        document.getElementById("number_correct").innerHTML = "Your mood is sad:  " + correct3 + "%."+ "\n" + "\n"+ playlistSad;
    } else if (correct1 == correct2 &&  correct2 == correct3 && correct3 == correct1) {
        document.getElementById("number_correct").innerHTML = equal;
    } 
    

}