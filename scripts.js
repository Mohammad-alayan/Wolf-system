//declare all variables
let btn1=document.getElementById("btn1")
let btn2=document.getElementById("btn22")
let btn3=document.getElementById("btn3")
let btn4=document.getElementById("btn4")
let btn5=document.getElementById("btn5")
let gif=document.getElementById("gif")
let start=document.getElementById("start")
let info=document.getElementById("info")
let outminn=document.getElementById("minn")
let outminnn=document.getElementById("minnn")
let nextadv=document.getElementById("nextadv")
let nextin=document.getElementById("nextin")
let part=0
let min=0
let second=0

let next=document.getElementById("next")
let outpart=document.getElementById("part")

let outmin=document.getElementById("min")
let outsecond=document.getElementById("sec")

let query=document.querySelector(".questions")
let img=document.querySelector(".giff")

let rank=0;
let outrank=document.querySelector("#Rank");
let head1=document.querySelector(".head1")


let numb=0

let names=document.getElementById("nam")
// questions for quiz file
function question1(){
    head1.innerHTML="How many push-ups can you do in a set at home?"
    btn1.innerHTML="8"
    btn2.innerHTML="14"
    btn3.innerHTML="20"
    btn4.innerHTML="35"
    btn5.innerHTML=">50"
  
}
function question2(){
    btn1.innerHTML="30"
    btn2.innerHTML="40"
    btn3.innerHTML="55"
    btn4.innerHTML="65"
    btn5.innerHTML=">80"

    head1.innerHTML="How many jumping jacks can you perform in 1 minute?"
}
function question3(){
    head1.innerHTML="How many seconds can you hold a plank at home?"

    btn1.innerHTML="20s"
    btn2.innerHTML="40s"
    btn3.innerHTML="1 minutes"
    btn4.innerHTML="1:30 minutes"
    btn5.innerHTML=">2 minutes"

}
function question4(){
    head1.innerHTML="How many seconds can you hold a wall sit at home?"

    btn1.innerHTML="30"
    btn2.innerHTML="40"
    btn3.innerHTML="1 minutes"
    btn4.innerHTML="2 minutes"
    btn5.innerHTML=">3 minutes"

}
function question5(){
    head1.innerHTML="How many sit-ups can you do in 1 minute?"
    btn1.innerHTML="7"
    btn2.innerHTML="18"
    btn3.innerHTML="30"
    btn4.innerHTML="40"
    btn5.innerHTML=">70"

  
}
function question6(){
    head1.innerHTML="How many lunges can you do on each leg in 1 minute at home?"
    btn1.innerHTML="20"
    btn2.innerHTML="40"
    btn3.innerHTML="45"
    btn4.innerHTML="60"
    btn5.innerHTML=">70"

}
function questio7(){
    btn1.innerHTML="8"
    btn2.innerHTML="12"
    btn3.innerHTML="17"
    btn4.innerHTML="20"
    btn5.innerHTML=">30"

    head1.innerHTML="How many squats can you do in 30 seconds ?"
  
}
function questio8(){
    head1.innerHTML="How many side lunges can you do in 2 minute at home?"
    btn1.innerHTML="8"
    btn2.innerHTML="20"
    btn3.innerHTML="30"
    btn4.innerHTML="40"
    btn5.innerHTML=">50"

}


let btns=document.getElementById("btnnn")
// function for calculate the rank in quiz file
function button(btn){
    
    if(questions.length > num ){
        questions[num]();
        num++;
    
    }
    else{
recommanded()
num=0
rank+=btn
outrank.innerHTML=rank
    }
   
}

 
    let questions = [question1, question2, question3, question4, question5, question6, questio7, questio8];
    let num = 0;

//function give alert for recommanded level
function recommanded(){
    
    if(outrank.innerHTML <= 15 &&outrank.innerHTML <= 30){
        alert("You are Beginner level")
    }
    else if( outrank.innerHTML >= 31 && outrank.innerHTML <= 55 ){
        alert("You are in Indtermediate level")

    }
   else if(outrank.innerHTML >= 56 && outrank.innerHTML <= 999){
        alert("You are in Advanced level")

    }
  
}  document.addEventListener("DOMContentLoaded",function(){
    let savedrank=localStorage.getItem("rank")
    if(savedrank !== null){
        rank=parseInt(savedrank,10)
     
    }
else if(savedrank == "NaN"){
    savedrank=0
    outrank.innerHTML=savedrank

}
   outrank.innerHTML=rank
})

window.addEventListener("click",function(){
    const ranks=[
        localStorage.setItem("rank",rank)
    
    
    ]

    })
    

let image=document.createElement("img")
// functions for declare the exercises in beginner file

function work1(){
    
    image.src="Forearm Push Ups_ Benefits, Muscles Worked, and More - Inspire US.gif"
    img.appendChild(image)
    image.classList.add("gif")

    second=30
    outsecond.innerHTML=second
    names.innerHTML="Push-ups"
    info.innerHTML="Do 10 push-ups in 30 seconds."

}
function work2(){
    image.classList.add("gif")

    image.src="Treino Para Mulheres Iniciantes - Transforme Seu Corpo em 2025.gif"
    img.appendChild(image)
    second=45
    outsecond.innerHTML=second
    names.innerHTML="Squat"
info.innerHTML="Do 15 squat in 45 seconds."
}
function work3(){
    image.classList.add("gif")

    image.src="6 Pack ABS Workout At Home That Actually Work.jpg"
    img.appendChild(image)
    second=40
    outsecond.innerHTML=second
    names.innerHTML="Plank"
    info.innerHTML="Do 40 second of plank"

}
function work4(){
    image.classList.add("gif")

    image.src="Chin Up.jpg"
    img.appendChild(image)
    second=30
    outsecond.innerHTML=second
    names.innerHTML="Chin Up"
    info.innerHTML="Do 5 Chin Ups in 30 seconds"

}
function work5(){
    image.classList.add("gifff")

    image.src="Touch And Hop _ Illustrated Exercise Guide.gif"
    img.appendChild(image)
    second=45
    outsecond.innerHTML=second
    names.innerHTML="Touch And Hop "
    info.innerHTML="Do 8 touch and hope in 45 seconds  "

}
function work6(){
    
    image.src="ee0314bc625ef5acfcfac619574725bd.gif"
    img.appendChild(image)
    second=45
    outsecond.innerHTML=second
    names.innerHTML="Hammer curls"
    info.innerHTML="Do 12 Hammer curls in 45 seconds  "

}
let imgg=document.querySelector(".image12")

    let workouts=[work1,work2,work3,work4,work5,work6]
//for update the output every time the user press the button
    function beg(){
imgg.classList.add("hide")
    if(workouts.length > numb){
        workouts[numb]()

        numb++

    }
    else{
        alert("Congratulations! you are finsh today's training")

        numb=0
        workouts[numb]()
  }
}

// functions for declare the exercises in Indtermediate file

function workad1(){
    
    image.src="Forearm Push Ups_ Benefits, Muscles Worked, and More - Inspire US.gif"
    img.appendChild(image)
    image.classList.add("gif")
min=0
outmin.innerHTML="0"+min

    second=50
    outsecond.innerHTML=second
    names.innerHTML="Push-ups"
    info.innerHTML="Do 20 push-ups in 50 seconds."

}
function workad2(){
    image.classList.add("gif")

    image.src="Treino Para Mulheres Iniciantes - Transforme Seu Corpo em 2025.gif"
    img.appendChild(image)
    second=15
    outsecond.innerHTML=second
    names.innerHTML="Squat"
    info.innerHTML="Do 25 squat in 1 minutes and 15 seconds."

    min=1;
    outmin.innerHTML="0"+min
}
function workad3(){
    image.classList.add("gif")

    image.src="6 Pack ABS Workout At Home That Actually Work.jpg"
    img.appendChild(image)
    second=0
    outsecond.innerHTML=second
    names.innerHTML="Plank"
    info.innerHTML="Do 1 minute second of plank"
    min=1;
    outmin.innerHTML="0"+min

}
function workad4(){
    min=0
    outmin.innerHTML="0"+min
    image.classList.add("gif")

    image.src="Chin Up.jpg"
    img.appendChild(image)
    second=45
    outsecond.innerHTML=second
    names.innerHTML="Chin Up"
    info.innerHTML="Do 15 Chin Ups in 45 seconds"
   
}
function workad5(){

    image.classList.add("gifff")
    

    image.src="Touch And Hop _ Illustrated Exercise Guide.gif"
    img.appendChild(image)
    second=15
    outsecond.innerHTML=second
    names.innerHTML="Touch And Hop "
    info.innerHTML="Do 20 touch and hope in 1 minute and 15 seconds  "
    min=1;
    outmin.innerHTML="0"+min
}
function workad6(){
   

    image.src="ee0314bc625ef5acfcfac619574725bd.gif"
    img.appendChild(image)
    second=0
    outsecond.innerHTML=second
    names.innerHTML="Hammer curls"
    info.innerHTML="Do 20 Hammer curls in 1 minute  "
 min=1
 outmin.innerHTML="0"+min
}

//for update the output every time the user press the button

function inter(){
    let workoutsad=[workad1,workad2,workad3,workad4,workad5,workad6]

    imgg.classList.add("hide")
    if(workoutsad.length > numb){
        workoutsad[numb]()

        numb++

    }
    else{
alert("Congratulations! you are finsh today's training")
        numb=0
        workoutsad[numb]()
    }
}
// functions for declare the exercises in advanced file

function workin1(){
    
    image.src="Forearm Push Ups_ Benefits, Muscles Worked, and More - Inspire US.gif"
    img.appendChild(image)
    image.classList.add("gif")
    second=30
    outsecond.innerHTML=second
    names.innerHTML="Push-ups"
    info.innerHTML="Do 55 push-ups in 1  minute and 30 seconds."
    min=1

    outmin.innerHTML="0"+min

}
function workin2(){
    image.classList.add("gif")

    image.src="Treino Para Mulheres Iniciantes - Transforme Seu Corpo em 2025.gif"
    img.appendChild(image)
    second=30
    outsecond.innerHTML=second
    names.innerHTML="Squat"
    min=1;
    outmin.innerHTML="0"+min
info.innerHTML="Do 45 squat in 1 minutes and 30 seconds."
}
function workin3(){
    image.classList.add("gif")

    image.src="6 Pack ABS Workout At Home That Actually Work.jpg"
    img.appendChild(image)
    second=50
    outsecond.innerHTML=second
    names.innerHTML="Plank"
    info.innerHTML="Do 1 minute and 50 second of plank"
    min=1;
    outmin.innerHTML="0"+min

}
function workin4(){
    image.classList.add("gif")

    image.src="Chin Up.jpg"
    img.appendChild(image)
    second=30
    outsecond.innerHTML=second
    names.innerHTML="Chin Up"
    info.innerHTML="Do 30 Chin Ups in 1 minute 30 seconds"
    min=1;
    outmin.innerHTML="0"+min

}
function workin5(){
    image.classList.add("gifff")
    min=1;
    outmin.innerHTML="0"+min

    image.src="Touch And Hop _ Illustrated Exercise Guide.gif"
    img.appendChild(image)
    second=45
    outsecond.innerHTML=second
    names.innerHTML="Touch And Hop "
    info.innerHTML="Do 25 touch and hope in  1 minute and 45 seconds  "

}
function workin6(){
    min=1
    outmin.innerHTML="0"+min

    image.src="ee0314bc625ef5acfcfac619574725bd.gif"
    img.appendChild(image)
    second=45
    outsecond.innerHTML=second
    names.innerHTML="Hammer curls"
    info.innerHTML="Do 30 Hammer curls in 1 minute and 45 seconds  "

}


//for update the output every time the user press the button

function adv(){
    let workoutin=[workin1,workin2,workin3,workin4,workin5,workin6]
    imgg.classList.add("hide")

    if(workoutin.length > numb){
        workoutin[numb]()

        numb++
    }
    else{
        alert("Congratulations! you are finsh today's training")
    
        numb=0
        
        workoutin[numb]()

    }}
    //start the time function
start.addEventListener("click",time)
    //update the time 

function time(){

    if(second > 0){
        second-=1
        outsecond.innerHTML=second
setTimeout(time,1000)
    }
    else if(min > 0 ){


second=59
outsecond.innerHTML=second
        min-=1    
         outmin.innerHTML=min
        setTimeout(time,1000)

    
    }
    else{
        let savedrank = localStorage.getItem("rank");
        if (savedrank !== null) {
            rank = parseInt(savedrank, 10) + 5;
        } 
        outrank.innerHTML = rank;
        localStorage.setItem("rank", rank); 
        alert("Very good keep going !!");
    }

}  
//shop function for buy from store
function shop(shop){
    let level=0
    if(shop > rank){
    alert("You don't have enough rank to buy it")
}else{
    let savedrank = localStorage.getItem("rank");
        rank=parseInt(savedrank,10)-shop
outrank.innerHTML=rank

let averge=shop/8
level+=averge
alert("Congratulations,these item will increase your strength in your body in " + level+"%")
}

}

