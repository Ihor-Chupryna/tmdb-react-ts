const baseURL = 'https://api.themoviedb.org/3';

const apiToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWZhN2JiOWVhNzA4YjA3ZjEwM2FjOGIwM2VjOTk0YiIsInN1YiI6IjYwY2UwOWMzNTFlNmFiMDA1OGVkM2IzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lmUNsg3Wu41etbi32KK1UswcmseHmW0uvcRXWE1xrBI';

const movie = '/movie';
const genre= '/genre';
const urls = {
    movies: {
        all: `/discover${movie}`,
        byId: (id: string) => `${movie}/${id}`,
        search:`/search${movie}`,
        topRated:`${movie}/top_rated`
    },
    genres: {
        list: `${genre}${movie}/list`
    },
    image: (widthImg: string, imgUrl: string) => `https://image.tmdb.org/t/p/w${widthImg}/${imgUrl}`
}

export {
    baseURL,
    apiToken,
    urls,
}