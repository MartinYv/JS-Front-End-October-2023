function printSongs(input){

class Song{
    constructor(style, name, duration){
        this.style = style,
        this.name = name,
        this.duration = duration
    }
}

    let numberOfSongs = input.shift();
    let styleOfSongs = input.pop();

    let songs = [];

    for (const line of input) {
        
        const[style, name, duration] = line.split("_");
        

        const song = new Song(style, name, duration);

        songs.push(song);
    }

    if (styleOfSongs == "all") {
        for (const song of songs) {
        
            console.log(`${song.name}`);
        }
    }
    else{
        songsSorted = songs.filter(obj => obj.style == styleOfSongs);

        for (const song of songsSorted) {
            
            console.log(`${song.name}`);
        }
    }
}

printSongs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'all']);