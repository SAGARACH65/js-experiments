let checkIfSelected = dimension => {
    return ((dimension.x === 150 && dimension.y === 200) ? true : false);
}

let getMovies = movieLists => {

    let resultMovies = [];
    movieLists.map(movieList => {

        movieList.videos.map(video => {

            video.boxarts.map(boxart => {
                let result = {};
                let dimension = {
                    x: boxart.width,
                    y: boxart.height
                }

                if (checkIfSelected(dimension)) {
                    result['id'] = video.id;
                    result['title'] = video.title;
                    result['url'] = boxart.url;

                    resultMovies.push(result);
                }
            })

        })
    })

    return resultMovies;
}

console.log(getMovies(movieLists));