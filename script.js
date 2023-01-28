document.body.addEventListener('keyup', (event)=>{
//console.log(event.code);
    playSound(event.code.toLowerCase());
});


//composer é o nome da classe é composer e o elemento que iremos manipular dentro da classe é o button
document.querySelector('.composer button').addEventListener('click',()=>{
    //input é o botão que esta dentro da classe composer
    let song = document.querySelector('#input').value; //value é para pegar o valor de dentro do input e aramazenar em song
    //console.log(`Musica ${song}`)

    if(song !==''){
        let songArray = song.split('');
        playComposition(songArray);
        console.log(`${songArray}`)

    }
})


function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)
    
    if (audioElement){
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if (keyElement){
        keyElement.classList.add('active');

        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300)
    }
}


function playComposition(songArray){
    let wait = 0;

    for (let songItem of songArray){
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait);

        wait += 250
         
    }
}



