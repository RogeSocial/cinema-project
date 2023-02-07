const audioPlayer = new Audio()
audioPlayer.controls = true  // if we want to use our own controls, set this to false

document.querySelector('#audio-container').appendChild(audioPlayer)

function playAudio(id){
  audioPlayer.src = '/data/audio-stream/' + id
  audioPlayer.play()
}

loadAudios()

async function loadAudios(){
  const response = await fetch('/data/audios/')
  if(response.ok){
    const audios = await response.json()
    for(let audio of audios){
      document.querySelector('#audios').insertAdjacentHTML("beforeend", `<a href="#" onclick="playAudio(${audio.id})">${audio.name}</a><br>`)
    }
  }
}
