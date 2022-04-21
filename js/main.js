const API_KEY = 'api_key=ab99ca370824001a5f5eb28e9943b30b'

const HTTP_TMDB = 'https://api.themoviedb.org/3'

const MOST_POP_MOVIES_URL = HTTP_TMDB + '/discover/movie?sort_by=popularity.desc&' + API_KEY
const IMG_URL = 'https://image.tmdb.org/t/p/w500'
const SEARCH_URL = HTTP_TMDB + '/search/movie?' + API_KEY
//api.json generos
const gener_URL = {
   "genres":[
      {
         "id":28,
         "name":"Action"
      },
      {
         "id":12,
         "name":"Adventure"
      },
      {
         "id":16,
         "name":"Animation"
      },
      {
         "id":35,
         "name":"Comedy"
      },
      {
         "id":80,
         "name":"Crime"
      },
      {
         "id":99,
         "name":"Documentary"
      },
      {
         "id":18,
         "name":"Drama"
      },
      {
         "id":10751,
         "name":"Family"
      },
      {
         "id":14,
         "name":"Fantasy"
      },
      {
         "id":36,
         "name":"History"
      },
      {
         "id":27,
         "name":"Horror"
      },
      {
         "id":10402,
         "name":"Music"
      },
      {
         "id":9648,
         "name":"Mystery"
      },
      {
         "id":10749,
         "name":"Romance"
      },
      {
         "id":878,
         "name":"Science Fiction"
      },
      {
         "id":10770,
         "name":"TV Movie"
      },
      {
         "id":53,
         "name":"Thriller"
      },
      {
         "id":10752,
         "name":"War"
      },
      {
         "id":37,
         "name":"Western"
      }
   ]
}

//=================taking the tags html
const caroussel = document.querySelector('.caroussel-movies')

const heroContainer = document.querySelector('.hero-container')
const form = document.getElementById('form')
const search = document.getElementById('search')

async function getMovies(url) {
  try {
    const fetchedUrl = await fetch(url)
    const promissed = await fetchedUrl.json()
    
    return promissed
    
  } catch (e) {
    console.log(e)
  }
  
}


function showMovies(data){
  caroussel.innerHTML= ''
  heroContainer.innerHTML=''
  
  
  data.forEach((movie)=>{
    const {title, poster_path, overview,vote_average} = movie;
    
    const movieEl = document.createElement('div')
    movieEl.classList.add('box')
        movieEl.innerHTML = `<img src="${IMG_URL + poster_path}" alt="${title}" class="model">
      
      <div class="details">
        <h3>${title}</h3>
      <p>${overview}</p>
      </div>
      
      `
      
      caroussel.appendChild(movieEl)
      
      
      const divHero =document.createElement('div')
      divHero.classList.add('box-hero')
      
      
  divHero.innerHTML = `<img src="${IMG_URL + poster_path}" alt="${title}">
    <div class="movie-info">
    <div class="basics-informations">
      <h3>${title}</h3>
      <span id="rate-green">${vote_average}</span>
    </div>
    
    <div class="overview">
        <h1>Overview</h1>
        <p>${overview}</p>
    </div>
  `
    
    heroContainer.appendChild(divHero)
  })
  
  
  
}



document.addEventListener('DOMContentLoaded', ()=>{
  getMovies(MOST_POP_MOVIES_URL).then(data =>{
  
  console.log(data.results)
  showMovies(data.results)
  

  })
  
  
})
