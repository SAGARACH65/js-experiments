var checkIfSelected = function (dimension) {
    return ((dimension.x === 150 && dimension.y === 200) ? true : false);
}

var getMovies = function (movieLists) {
    var resultMovies = [];
    for (let k = 0; k < movieLists.length; k++) {

        var videos = movieLists[k].videos;

        for (var i = 0; i < videos.length; i++) {

            for (var j = 0; j < videos[i].boxarts.length; j++) {

                var videoBoxart = videos[i].boxarts[j];
                var result = {};

                var dimension = {
                    x: videoBoxart.width,
                    y: videoBoxart.height
                }

                if (checkIfSelected(dimension)) {
                    result['id'] = videos[i].id;
                    result['title'] = videos[i].title;
                    result['url'] = videoBoxart.url;

                    resultMovies.push(result);
                }
            }
        }
    }
    return resultMovies;
}

console.log(getMovies(movieLists));