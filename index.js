var recognition = new webkitSpeechRecognition(),
    previous = null;
recognition.interimResults = true;
recognition.continuous = true;
recognition.onresult = function(event) { 
    var text = event.results[event.results.length -1][0].transcript;
    console.log(text);
    var current = text.replace(previous, '').trim();
    console.log(current);
    previous = text;
    if(current){
        document.body.style.backgroundColor = current;
    }
}
recognition.start();
