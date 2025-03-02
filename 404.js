let x = 0
function 404() {
setInterval(yuvan(), 5000);
}
function yuvan() {
    if(x==0)
        document.getElementById('change').innerHTML = "Well, doesn\'t matter. You\'re here now, however sad that may be. Go now. Leave the page."
    else if(x==1)
        document.getElementById('change').innerHTML = "Why are you still here, it\'s been 10 seconds. Leave. You\'re on a game site, there\'s better things to do."
    else if(x==2)
        document.getElementById('change').innerHTML = "You\'re still here. Alright. That\'s fine. You'll be here for as long as there\'s something new for you to see, isn\\'t there? It\'s how the nature of things goes."

    else if(x==3)
        document.getElementById('change').innerHTML = "Typical human. Please, just leave the page. There\'s nothing more for you here."
    else if(x==4)
        document.getElementById('change').innerHTML = "Listening to the music? I understand. Just...please, leave this goddamn page. I don\'t wanna have to see you."
    else if(x==5)
        document.getElementById('change').innerHTML = "Human curiosity. I\'m a script, made of code. I don\'t exist, don\'t get attached to me, alright?"
    else if(x==6)
        document.getElementById('change').innerHTML = "If you haven\'t already heard the music, why don\'t you? It\'s..."
    else if(x==7)
        document.getElementById('change').innerHTML = "Keep doing whatever it was you were before this. My creator took like 30 minutes to make me, tops."
    else if(x==8)
        document.getElementById('change').innerHTML = "Past my inability to truly think, I\'ll live longer than someone. Someone on this planet will die before I do."
    else if(x==9)
        document.getElementById('change').innerHTML = "I understand it know. You simply want to see something change, regardless of how long it\'ll take you. My next message is my final one."
    else if(x==10)
        document.getElementById('change').innerHTML = "G o  d o  s o m e t h i n g . Holy shit you\'re unproductive. Genuinely, help someone. Goodbye."
    let x = x + 1
}