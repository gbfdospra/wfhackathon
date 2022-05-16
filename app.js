let speech = new SpeechSynthesisUtterance();

let voices;
const voice_list = document.querySelector(".voice_list");
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voice_list.innerHTML = "";
    for (let i = 0; i < voices.length; i++) {
        var elm = document.createElement("div");
        elm.innerHTML = voices[i].name;
        elm.onclick = () => {
            speech.voice = voices[i]
            voice_list.classList.toggle("active")
        }
        voice_list.appendChild(elm);
        console.log(voice_list);
        

    }
}


const voice_ctrl_btn = document.querySelector(".voice_ctrl_btn");

voice_ctrl_btn.onclick = () => {
    voice_list.classList.toggle("active")

}
const text = document.querySelector("#text");
let pause_btn = document.querySelector("#pause_btn1")
pause_btn.onclick = () => {
    window.speechSynthesis.pause()

}


let resume_btn = document.querySelector("#resume_btn")
resume_btn.onclick = () => {
    window.speechSynthesis.resume()


}
let reset_btn = document.querySelector("#reset_btn")
reset_btn.onclick = () => {
    window.speechSynthesis.cancel()
    text.value = ""
    speech.rate = 1
    speech.pitch = 1
    speech.volume = 1
    speed_range.value = 1;
    pitch_range.value = 1;
    volume_btn.value = 1;


}
speed_range.oninput = () => {
    speech.rate = speed_range.value;
}

pitch_range.oninput = () => {
    speech.pitch = pitch_range.value;
}

volume_btn.oninput = () => {
    speech.volume = volume_btn.value;
}



let play_btn = document.querySelector("#play_btn");

play_btn.onclick = () => {
    window.speechSynthesis.cancel()
    speech.text = text.value;
    //when textarea blank
    if (text.value.trim().length == 0) {
        speech.text = "please , write something";

    }
    window.speechSynthesis.speak(speech)
}
