function rotation (bandName, albumName, songName){
    let songDuration = (albumName.length * bandName.length) * songName.length / 2;
    let countRotation = Math.ceil(songDuration / 2.5);

    console.log(`The plate was rotated ${countRotation} times.`)
}
