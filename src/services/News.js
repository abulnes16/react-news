const API_KEY = "d85932ed46de43c9b574c1230ee7e1ce";


export const getURLNews = (categoria, pais) =>{
    return `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=${API_KEY}`
}