function moviePrint(inputMovies){

    let movies = [];

class Movie{
    constructor(name, director, date){
        this.name = name,
        this.director = director,
        this.date = date
    }
}

for (let i = 0; i < inputMovies.length; i++) {
    
    let line = inputMovies[i];

    if (line.includes("addMovie")) {
       let movieName = line.substring("addMovie".length +1, line.length);
       
        let movie = {
            name: movieName,
            director: null,
            date: null
        };

        movies.push(movie);
    }
    else if (line.includes("directedBy")) {
        let index = line.lastIndexOf("directedBy");

        let director = line.substring(index + "directedBy".length + 1, line.length);
        let movieName = line.substring(0, index -1);
        
        if (movies.some(m => m.name == movieName)) {
           let currMovie = movies.find(x=> x.name == movieName);

               currMovie.director = director;
        }
    }
    else if(line.includes("onDate")){
        let index = line.lastIndexOf("onDate");

        let date = line.substring(index + "onDate".length + 1, line.length);
        let movieName = line.substring(0, index -1);

        if (movies.some(m => m.name == movieName)) {
            let currMovie = movies.find(x=> x.name == movieName);

                currMovie.date = date;
         }
    }
}

movies.filter(x => x.name != null && x.director != null && x.date != null).forEach(movie => console.log(JSON.stringify(movie)));
}

moviePrint([
    'addMovie Fast and Furious',    
    'addMovie Godfather',   
    'Inception directedBy Christopher Nolan', 
    'Godfather directedBy Francis Ford Coppola',  
    'Godfather onDate 29.07.2018', 
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);

moviePrint([

    'addMovie The Avengers',
    
    'addMovie Superman',
    
    'The Avengers directedBy Anthony Russo',
    
    'The Avengers onDate 30.07.2010',
    
    'Captain America onDate 30.07.2010',
    
    'Captain America directedBy Joe Russo'
    
    ]);