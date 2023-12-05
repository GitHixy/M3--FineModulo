const movies = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    length: 142,
    image: "https://picsum.photos/300/165?image=1",
    description: "A story of hope and redemption as two men bond while serving life sentences in prison.",
    genre: "Drama"
  },
  {
    title: "The Godfather",
    year: 1972,
    length: 175,
    image: "https://picsum.photos/300/165?image=2",
    description: "The story of the Corleone family under patriarch Vito Corleone, focusing on the transformation of his youngest son, Michael, from reluctant family outsider to ruthless mafia boss.",
    genre: "Crime"
  },
  {
    title: "The Dark Knight",
    year: 2008,
    length: 152,
    image: "https://picsum.photos/300/165?image=3",
    description: "When the menacing Joker wreaks havoc and chaos on Gotham City, the Dark Knight must rise to protect his city and everything he holds dear.",
    genre: "Action"
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    length: 154,
    image: "https://picsum.photos/300/165?image=4",
    description: "A Tarantino classic that interweaves the lives of two hitmen, a gangster's wife, a boxer, and a washed-up actress.",
    genre: "Crime"
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    length: 201,
    image: "https://picsum.photos/300/165?image=5",
    description: "The final chapter in the epic Lord of the Rings trilogy, where Frodo must make a perilous journey to destroy the One Ring and save Middle-earth.",
    genre: "Fantasy"
  },
  {
    title: "The Matrix",
    year: 1999,
    length: 136,
    image: "https://picsum.photos/300/165?image=6",
    description: "A computer hacker learns from mysterious rebels that the world he lives in is actually a computer simulation.",
    genre: "Action"
  },
  {
    title: "Schindler's List",
    year: 1993,
    length: 177,
    image: "https://picsum.photos/300/165?image=7",
    description: "The true story of Oskar Schindler, a German businessman who saved the lives of more than 1,000 Jews during the Holocaust.",
    genre: "Biography"
  },
  {
    title: "12 Angry Men",
    year: 1957,
    length: 96,
    image: "https://picsum.photos/300/165?image=8",
    description: "A jury in a New York City murder trial must decide if the defendant is guilty beyond a reasonable doubt.",
    genre: "Drama"
  },
  {
    title: "The Silence of the Lambs",
    year: 1991,
    length: 119,
    image: "https://picsum.photos/300/165?image=9",
    description: "A young FBI trainee must seek the help of an incarcerated cannibalistic psychiatrist to catch another serial killer.",
    genre: "Crime"
  },
  {
    title: "Forrest Gump",
    year: 1994,
    length: 144,
    image: "https://picsum.photos/300/165?image=10",
    description: "The story of an IQ-challenged Alabama man who unknowingly witnesses and influences key events in American history.",
    genre: "Drama"
  },
  {
    title: "Inception",
    year: 2010,
    length: 148,
    image: "https://picsum.photos/300/165?image=11",
    description: "A professional thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    genre: "Action"
  },
  {
    title: "The Good, the Bad and the Ugly (1966)",
    year: 1966,
    length: 177,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fe/The_Good_the_Bad_and_the_Ugly_%281966_film_poster%29%29re-release_poster%29%292016%29%29cropped%29%29220x315%29.jpg/220px-The_Good_the_Bad_and_the_Ugly_%281966_film_poster%29%29re-release_poster%29%292016%29%29cropped%29%29220x315%29.jpg",
    description: "A bounty hunter, a bandit, and a Yankee soldier hunt for a cache of hidden Confederate gold during the American Civil War. This spaghetti Western masterpiece is known for its epic action sequences, its iconic Ennio Morricone score, and its three unforgettable antihero characters.",
    genre: "Western"
  },
  {
    title: "Fight Club (1999)",
    year: 1999,
    length: 139,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Fight_Club_poster.jpg/220px-Fight_Club_poster.jpg",
    description: "An insomniac office worker and a soap salesman form an underground fight club that evolves into a violent movement against consumerism and the establishment. The film explores themes of masculinity, consumerism, and the destructive power of nihilism.",
    genre: "Drama"
  },
  {
    title: "Spirited Away (2001)",
    year:

 2001,
    length: 125,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Spirited_Away_movie_poster.jpg/220px-Spirited_Away_movie_poster.jpg",
    description: "A ten-year-old girl is spirited away to a magical world inhabited by strange and fantastical creatures. She must work in a bathhouse to earn her freedom and find a way back to her own world. This animated film from Studio Ghibli is a visually stunning and heartwarming tale of self-discovery and resilience.",
    genre: "Animation"
  },
  {
    title: "The Big Lebowski (1998)",
    year: 1998,
    length: 117,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/da/The_Big_Lebowski_%281998_%29film_poster%29%29US%29theatrical_release_poster%29%29cropped%29%220x279%29220px-The_Big_Lebowski_%281998_%29film_poster%29%29US%29theatrical_release_poster%29%29cropped%29%220x279%29.jpg/220px-The_Big_Lebowski_%281998_%29film_poster%29%29US%29theatrical_release_poster%29%29cropped%29%220x279%29.jpg",
    description: "An eccentric bowler, known for his unkempt appearance and deadpan demeanor, becomes entangled in a case of kidnapping, mistaken identity, and international crime. The film is a neo-noir comedy that explores themes of nihilism, absurdity, and the American lifestyle.",
    genre: "Comedy"
  },
  {
    title: "Whiplash (2014)",
    year: 2014,
    length: 106,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Whiplash_%282014_film_poster%29%29cropped%29%29220x315%29.jpg/220px-Whiplash_%282014_film_poster%29%29cropped%29%220x315%29.jpg",
    description: "A young jazz drummer at a prestigious music conservatory seeks the guidance of a demanding and ruthless instructor, leading to intense conflict and personal sacrifice as he pursues his dream of becoming a great musician.",
    genre: "Drama"
  },
  {
    title: "Blade Runner 2049 (2017)",
    year: 2017,
    length: 164,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Blade_Runner_2049_poster.jpg/220px-Blade_Runner_2049_poster.jpg",
    description: "Thirty years after the events of the original Blade Runner, a new blade runner tracks down his predecessor and uncovers a long-buried secret that threatens to plunge society into chaos.",
    genre: "Sci-Fi"
  },
  {
    title: "The Grand Budapest Hotel (2014)",
    year: 2014,
    length: 99,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Grand_Budapest_Hotel_poster.jpg/220px-Grand_Budapest_Hotel_poster.jpg",
    description: "A renowned European hotel concierge and his loyal employees find themselves embroiled in a series of escapades and mysteries during the 1930s.",
    genre: "Comedy"
  },
];

function generateCarousel(containerId, movies) {
  const container = document.getElementById(containerId);
  const numberOfMoviesPerSlide = 6;
  const numberOfCarousels = Math.ceil(movies.length / numberOfMoviesPerSlide);

  for (let i = 0; i < numberOfCarousels; i++) {
    const startIndex = i * numberOfMoviesPerSlide;
    const endIndex = startIndex + numberOfMoviesPerSlide;
    const carouselMovies = movies.slice(startIndex, endIndex);

    const carouselId = `carousel-${i}`;
    const carouselElement = document.createElement('div');
    carouselElement.classList.add('carousel', 'slide');
    carouselElement.setAttribute('id', carouselId);

    const innerElement = document.createElement('div');
    innerElement.classList.add('carousel-inner');

    carouselMovies.forEach((movie, index) => {
      const isActive = index === 0 ? 'active' : '';
      const movieCard = `
        <div class="carousel-item ${isActive}">
          <div class="row">
            ${generateMovieCards(movie)}
          </div>
        </div>
      `;
      innerElement.innerHTML += movieCard;
    });

    carouselElement.appendChild(innerElement);

    const prevButton = `
      <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
    `;

    const nextButton = `
      <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    `;

    carouselElement.innerHTML += prevButton;
    carouselElement.innerHTML += nextButton;

    container.appendChild(carouselElement);
  }
}

function generateMovieCards(movie) {
  return `
    <div class="col-md-2">
      <div class="card movie-card" data-bs-toggle="tooltip" data-bs-placement="top" title="${movie.title}">
        <img src="${movie.image}" class="card-img-top" alt="${movie.title}">
        <div class="card-body">
          <p class="card-text">${movie.title}</p>
        </div>
      </div>
    </div>
  `;
}

generateCarousel('carousel-container', movies);

// Enable Bootstrap tooltips
$(function () {
  $('[data-bs-toggle="tooltip"]').tooltip();
});