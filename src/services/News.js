const API_KEY = "You're api key goes here";


export const getURLNews = (categoria, pais) =>{
    return `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=${API_KEY}`
}
