fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
.then((res) => res.json())
.then((movies) => {

    //All movie title-1
    const getTilte = movie => movie.title;

    const getAllTilte = movies.map(getTilte);

    const keywords = ["The", "dog", "who", "is", "not", "a", "man"];

    const getByWords = getAllTilte.filter(name => {
        const FindByWords = name.split(/[^\w]/);

        return keywords.some(keys => FindByWords.includes(keys))
    });

    console.log(getByWords); 

    //Newer movie title-2
    const getNewMovie = movie => movie.year > 2015;

    const getAllNew = movies.filter(getNewMovie).map(getTilte);

    const getNewTitle = getAllNew.filter(name => {
        const FindByWords = name.split(/[^\w]/);
         for(const keys of keywords){
             if(FindByWords.includes(keys))
             {
                 return true;
             }
         }
         return false;
    });

    // const getAllTilte = getyAllNew.map(getTilte);
    console.log(getNewTitle);

})

