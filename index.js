let emoji1 = document.getElementById("emoji1");
let emoji2 = document.getElementById("emoji2");
let emoji3 = document.getElementById("emoji3");

let emojis = ['💓','😘', '😷', '🤒', '🥴', '😜', '🥳', '🤨', '🖤','💗','😤','💑','💘'];
let s1,s2,s3;
function getRandom()
{
    return Math.floor(Math.random()*13);
}

let animationId;
function updateAnimation(newSpeed){
    if(animationId) clearInterval(animationId);
    if(newSpeed!=0)
    {
        document.getElementById('controller').value = newSpeed;
        animationId =  setInterval( () => {
            emoji1.innerText = emojis[s1 = getRandom()];
            emoji2.innerText = emojis[s2 = getRandom()];
            emoji3.innerText = emojis[s3 = getRandom()];
        },1000/newSpeed);
    }
   
}
function startAnimation(){
    if(document.getElementById('name').value.trim().length==0)
    document.getElementById('errormsg').style.visibility = 'visible';
    else{
    document.documentElement.style.setProperty('--speed', 5);
    updateAnimation(5);
    document.getElementById('slidercontrol').value = 5;
    document.getElementById('errormsg').innerHTML = "Game has started. <br> Slide to control the speed.";
    document.getElementById('errormsg').style.visibility = 'visible';
    }
}


function stopAnimation(){

    if(document.getElementById('name').value.trim()=='Mishti Doi'){
        emoji1.innerText = emojis[12];
        emoji2.innerText = emojis[12];
        emoji3.innerText = emojis[12];
        document.documentElement.style.setProperty('--speed', 0);
        updateAnimation(0);
        document.getElementById('resultmsg').innerHTML = "You Won";
        document.getElementById('errormsg').innerHTML = "💓 I love you 💓";
        document.getElementById('resultmsg').style.backgroundColor = "green";
        document.getElementById('resultmsg').style.visibility = "visible";

        return;
    }
    if(document.getElementById('name').value.trim().length==0)
    document.getElementById('errormsg').style.visibility = 'visible';
    else{
        document.documentElement.style.setProperty('--speed', 0);
        updateAnimation(0);
        if(s1==s2 && s2==s3){
            document.getElementById('resultmsg').innerHTML = "You Won";
            document.getElementById('resultmsg').style.backgroundColor = "green";
        }
        else{
            document.getElementById('resultmsg').innerHTML = "You Lose";
        }
        document.getElementById('errormsg').innerHTML = "Game Ended. <br> Press Reset to play again.";
        document.getElementById('resultmsg').style.visibility = "visible";
    }
}


slidercontrol.onchange = function(ev){     //Ev is an event variable
    if(document.getElementById('name').value.trim().length==0){
    document.getElementById('errormsg').style.visibility = 'visible'
    return;
    }
    console.log('Value Changed');
    //document.documentElement = Root of CSS - here we need it to change CSS value through JS
    document.documentElement.style.setProperty('--speed', ev.target.value)
    //ev.target.value is the value fetched from the input box i.e. controller
    updateAnimation(ev.target.value);
}
