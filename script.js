const movies = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    duration: 142,
    image: "./assets/shawshank.jpg",
    description: "A story of hope and redemption as two men bond while serving life sentences in prison.",
    genre: "Drama"
  },
  {
    title: "The Godfather",
    year: 1972,
    duration: 175,
    image: "./assets/Godfather.jpg",
    description: "The story of the Corleone family under patriarch Vito Corleone, focusing on the transformation of his youngest son, Michael, from reluctant family outsider to ruthless mafia boss.",
    genre: "Crime"
  },
  {
    title: "The Dark Knight",
    year: 2008,
    duration: 152,
    image: "./assets/dark knight.jpg",
    description: "When the menacing Joker wreaks havoc and chaos on Gotham City, the Dark Knight must rise to protect his city and everything he holds dear.",
    genre: "Action"
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    duration: 154,
    image: "./assets/pulp fiction.jpg",
    description: "A Tarantino classic that interweaves the lives of two hitmen, a gangster's wife, a boxer, and a washed-up actress.",
    genre: "Crime"
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    duration: 201,
    image: "./assets/return of the king.jpg",
    description: "The final chapter in the epic Lord of the Rings trilogy, where Frodo must make a perilous journey to destroy the One Ring and save Middle-earth.",
    genre: "Fantasy"
  },
  {
    title: "The Matrix",
    year: 1999,
    duration: 136,
    image: "./assets/matrix.jpg",
    description: "A computer hacker learns from mysterious rebels that the world he lives in is actually a computer simulation.",
    genre: "Action"
  },
  {
    title: "Schindler's List",
    year: 1993,
    duration: 177,
    image: "./assets/schindler's list.jpg",
    description: "The true story of Oskar Schindler, a German businessman who saved the lives of more than 1,000 Jews during the Holocaust.",
    genre: "Biography"
  },
  {
    title: "12 Angry Men",
    year: 1957,
    duration: 96,
    image: "./assets/12 Angry men.jpg",
    description: "A jury in a New York City murder trial must decide if the defendant is guilty beyond a reasonable doubt.",
    genre: "Drama"
  },
  {
    title: "The Silence of the Lambs",
    year: 1991,
    duration: 119,
    image: "./assets/the silence of the lambs.jpg",
    description: "A young FBI trainee must seek the help of an incarcerated cannibalistic psychiatrist to catch another serial killer.",
    genre: "Crime"
  },
  {
    title: "Forrest Gump",
    year: 1994,
    duration: 144,
    image: "./assets/forrest gump.jpg",
    description: "The story of an IQ-challenged Alabama man who unknowingly witnesses and influences key events in American history.",
    genre: "Drama"
  },
  {
    title: "Inception",
    year: 2010,
    duration: 148,
    image: "./assets/inception.jpg",
    description: "A professional thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    genre: "Action"
  },
  {
    title: "The Good, the Bad and the Ugly",
    year: 1966,
    duration: 177,
    image: "./assets/good bad ugly.jpg",
    description: "A bounty hunter, a bandit, and a Yankee soldier hunt for a cache of hidden Confederate gold during the American Civil War. This spaghetti Western masterpiece is known for its epic action sequences, its iconic Ennio Morricone score, and its three unforgettable antihero characters.",
    genre: "Western"
  },
  {
    title: "Fight Club",
    year: 1999,
    duration: 139,
    image: "./assets/fight club.jpg",
    description: "An insomniac office worker and a soap salesman form an underground fight club that evolves into a violent movement against consumerism and the establishment. The film explores themes of masculinity, consumerism, and the destructive power of nihilism.",
    genre: "Drama"
  },
  {
    title: "Spirited Away",
    year: 2001,
    duration: 125,
    image: "./assets/spirited away.jpg",
    description: "A ten-year-old girl is spirited away to a magical world inhabited by strange and fantastical creatures. She must work in a bathhouse to earn her freedom and find a way back to her own world. This animated film from Studio Ghibli is a visually stunning and heartwarming tale of self-discovery and resilience.",
    genre: "Animation"
  },
  {
    title: "The Big Lebowski",
    year: 1998,
    duration: 117,
    image: "./assets/big lebowski.jpg",
    description: "An eccentric bowler, known for his unkempt appearance and deadpan demeanor, becomes entangled in a case of kidnapping, mistaken identity, and international crime. The film is a neo-noir comedy that explores themes of nihilism, absurdity, and the American lifestyle.",
    genre: "Comedy"
  },
  {
    title: "Whiplash",
    year: 2014,
    duration: 106,
    image: "./assets/whiplash.jpg",
    description: "A young jazz drummer at a prestigious music conservatory seeks the guidance of a demanding and ruthless instructor, leading to intense conflict and personal sacrifice as he pursues his dream of becoming a great musician.",
    genre: "Drama"
  },
  {
    title: "Blade Runner 2049",
    year: 2017,
    duration: 164,
    image: "./assets/blade runner.jpg",
    description: "Thirty years after the events of the original Blade Runner, a new blade runner tracks down his predecessor and uncovers a long-buried secret that threatens to plunge society into chaos.",
    genre: "Sci-Fi"
  },
  {
    title: "The Grand Budapest Hotel",
    year: 2014,
    duration: 99,
    image: "./assets/grand budapest hotel.jpg",
    description: "A renowned European hotel concierge and his loyal employees find themselves embroiled in a series of escapades and mysteries during the 1930s.",
    genre: "Comedy"
  },
];


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


shuffleArray(movies);

function populateCarousel(carouselId, movies) {
  const carouselInner = document.querySelector(`#${carouselId} .carousel-inner`);

  
  for (let i = 0; i < movies.length; i += 6) {
    const activeClass = i === 0 ? 'active' : '';

    const carouselItem = document.createElement('div');
    carouselItem.className = `carousel-item ${activeClass}`;

   
    const row = document.createElement('div');
    row.className = 'row';

    
    for (let j = i; j < i + 6 && j < movies.length; j++) {
      const col = document.createElement('div');
      col.className = 'col-md-2';

      const img = document.createElement('img');
      img.src = movies[j].image;
      img.alt = movies[j].title;
      img.className = 'd-block w-100';
  
      img.addEventListener('mouseover', () => showMovieTooltip(movies[j], img));
      img.addEventListener('mouseout', () => tooltip.hide());


      col.appendChild(img);
      row.appendChild(col);
    }

    carouselItem.appendChild(row);
    carouselInner.appendChild(carouselItem);
  }
}

function createMovieCard(movie) {
  const card = document.createElement('div');
  card.className = 'card';

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  const cardTitle = document.createElement('h5');
  cardTitle.className = 'card-title';
  cardTitle.textContent = movie.title;

  const cardSubtitle = document.createElement('h6');
  cardSubtitle.className = 'card-subtitle mb-2 text-muted';
  cardSubtitle.textContent = `${movie.year} | ${movie.duration} mins`;

  const cardText = document.createElement('p');
  cardText.className = 'card-text';
  cardText.textContent = movie.description;

  const cardGenre = document.createElement('p');
  cardGenre.className = 'card-text';
  cardGenre.textContent = `Genre: ${movie.genre}`;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardSubtitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardGenre);

  card.appendChild(cardBody);

  return card.outerHTML;
}

function showMovieTooltip(movie, target) {
  const tooltip = new bootstrap.Tooltip(target, {
    title: createMovieCard(movie),
    placement: 'top',
    html: true
  });

  tooltip.show();
}


populateCarousel('carousel1', movies.slice(0, 18)); 


shuffleArray(movies);
populateCarousel('carousel2', movies.slice(0, 18)); 


shuffleArray(movies);
populateCarousel('carousel3', movies.slice(0, 18)); 


$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip({
    html: true,
    trigger: 'hover',
    placement: 'top'
  });
});