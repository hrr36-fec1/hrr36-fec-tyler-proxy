
const db = require('./index.js');



function seedDetails() {


  const details = [
    {
      url: "https://s3-us-west-2.amazonaws.com/bzfec/Jurassic+Park.jpg",
      title: "Jurassic Park",
      production: "Universal Pictures",
      release_date: "Release Date: June 11,1993",
      starring: ["Jeff Goldblum, " , "Laura Dern, ", "Richard Attenborough, ", "Sam Neill"],
      summary: "Featuring incredible special effects and action-packed drama, Jurassic Park takes you to a remote island where an amazing theme park with living dinosaurs is about to turn deadly, as five people must battle to survive among the prehistoric predators.",
      director: "Steven Spielberg",
      genre: ["Adventure, ", "Sci-Fi, ", "Thriller"],
      rating: "PG-13",
      runtime: "127 min",
      rating_url: "https://s3-us-west-2.amazonaws.com/bzfec/RATED_PG-13.svg"
    },
    {
      url: "https://s3-us-west-2.amazonaws.com/bzfec/Reality+Bites.jpg",
      title: "Reality Bites",
      production: "Universal Pictures",
      release_date: "Release Date: February 18, 1994",
      starring: ["Ben Stiller, ", "Ethan Hawke, ", "Harry O'Reilly, ", "Janeane Garofalo"],
      summary: "A documentary filmmaker and her fellow Gen X graduates face life after college, looking for work and love in Houston.",
      director: "Ben Stiller",
      genre: ["Comedy, ", "Drama, ", "Romance, "],
      rating: "PG-13",
      runtime: "99 min",
      rating_url: "https://s3-us-west-2.amazonaws.com/bzfec/RATED_PG-13.svg"
    },
    {
      url: "https://s3-us-west-2.amazonaws.com/bzfec/Atomic+Blonde.jpg",
      title: "Atomic Blonde",
      production: "Focus Features",
      release_date: "Release Date: July 28, 2017",
      starring: ["Bill Skarsgård, ", "Charlize Theron, ", "Eddie Marsan, ", "James Faulkner, ", "James McAvoy"],
      summary: "The crown jewel of Her Majesty’s Secret Intelligence Service, Agent Lorraine Broughton (Charlize Theron) is equal parts spycraft, sensuality and savagery, willing to deploy any of her skills to stay alive on her impossible mission.",
      director: "David Leitch",
      genre: ["Action, ", "Mystery, ", "Thriller"],
      rating: "R",
      runtime: "115 min",
      rating_url: "https://s3-us-west-2.amazonaws.com/bzfec/RATED_R.svg"
    },
    {
      url: "https://s3-us-west-2.amazonaws.com/bzfec/Magnolia.jpg",
      title: "Magnolia",
      production: "New Line Cinema",
      release_date: "Release Date: December 17, 1999",
      starring: ["Julianne Moore, ", "Tom Cruise, ", "John C. Reilly, ", "Philip Seymour Hoffman"],
      summary: "On one random day in the San Fernando Valley, a dying father, a young wife, a male caretaker, a famous lost son, a police officer in love, a boy genius, an ex-boy genius, a game show host and an estranged daughter will each become part of a dazzling multiplicity of plots, but one story.",
      director: "Paul Thomas Anderson",
      genre: ["Drama"],
      rating: "R",
      runtime: "188 min",
      rating_url: "https://s3-us-west-2.amazonaws.com/bzfec/RATED_R.svg"
    },
    {
      url: "https://s3-us-west-2.amazonaws.com/bzfec/Molly's+Game.jpg",
      title: "Molly's Game",
      production: "STX Entertainment",
      release_date: "Release Date: December 25, 2017",
      starring: ["Jessica Chastain, ", "Chris O'Dowd, ", "Graham Greene, ", "Idris Elba"],
      summary: "Molly's Game is the true story of Molly Bloom a beautiful, young, Olympic-class skier who ran the world's most exclusive high-stakes poker game for a decade before being arrested in the middle of the night by 17 FBI agents wielding automatic weapons.",
      director: "Aaron Sorkin",
      genre: ["Biography, ", "Drama, ", "Crime"],
      rating: "R",
      runtime: "140 min",
      rating_url: "https://s3-us-west-2.amazonaws.com/bzfec/RATED_R.svg"
    },
    {
      url: "https://s3-us-west-2.amazonaws.com/bzfec/Donnie+Darko.jpg",
      title: "Donnie Darko",
      production: "New Market Films",
      release_date: "Release Date: October 26, 2001",
      starring: ["Jake Gyllenhaal, ", "Mary McDonnell, ", "Drew Barrymore"],
      summary: "A genre-busting fable that blasts the American suburban drama into a wildly imaginative realm of time travel, alternative universes and the manipulation of one's fate.",
      director: "Richard Kelly",
      genre: ["Sci-Fi, ", "Drama, ", "Mystery"],
      rating: "R",
      runtime: "113 min",
      rating_url: "https://s3-us-west-2.amazonaws.com/bzfec/RATED_R.svg"
    },
    {
      url: "https://s3-us-west-2.amazonaws.com/bzfec/Hackers.jp",
      title: "Hackers",
      production: "MGM/UA Distribution Company",
      release_date: "Release Date: September 15, 1995",
      starring: ["Angelina Jolie, ", "Jonny Lee Miller"],
      summary: "A neophyte hacker becomes the target of the FBI after he unknowingly taps into a high-tech embezzling scheme which could cause a horrific environmental disaster in this suspenseful drama.",
      director: "",
      genre: ["Action, ", "Crime, ", "Thriller"],
      rating: "PG-13",
      runtime: "107 min",
      rating_url: "https://s3-us-west-2.amazonaws.com/bzfec/RATED_PG-13.svg"
    },
    {
      url: "https://s3-us-west-2.amazonaws.com/bzfec/The+Favourite.jpg",
      title: "The Favourite",
      production: "Fox Searchlight Pictures",
      release_date: "Release Date: November 23, 2018",
      starring: ["Emma Stone, ", "Nicholas Houl, ", "Olivia Colman, ", "Rachel Weisz"],
      summary: "Early 18th century. England is at war with the French. Nevertheless, duck racing and pineapple eating are thriving. A frail Queen Anne (Olivia Colman) occupies the throne and her close friend Lady Sarah (Rachel Weisz) governs the country in her stead while tending to Anne’s ill health and mercurial temper.",
      director: "Giorgos Lanthimos",
      genre: ["Biography, ", "Drama, ", "History, ", "Comedy"],
      rating: "R",
      runtime: "119 min",
      rating_url: "https://s3-us-west-2.amazonaws.com/bzfec/RATED_R.svg"
    },
    {
      url: "https://s3-us-west-2.amazonaws.com/bzfec/The+Lost+Boys.jpg",
      title: "The Lost Boys",
      production: "Warner Bros. Pictures",
      release_date: "Release Date: July 31, 1987",
      starring: ["Jason Patric, ", "Corey Feldman, ", "Corey Haim"],
      summary: "Strange events threaten an entire family when two brothers move with their divorced mother to a California town where the local teenage gang turns out to be a pack of vampires.",
      director: "Joel Schumacher",
      genre: ["Thriller, ", "Fantasy, ", "Horror, ", "Comedy"],
      rating: "R",
      runtime: "97 min",
      rating_url: "https://s3-us-west-2.amazonaws.com/bzfec/RATED_R.svg"
    },
    {
      url: "https://s3-us-west-2.amazonaws.com/bzfec/Kill+Bill.jpg",
      title: "Kill Bill: Vol. 1",
      production: "Miramax Films",
      release_date: "Release Date: October 10, 2003",
      starring: ["Daryl Hannah, ", "David Carradine, ", "Lucy Liu, ", "Michael Madsen, ", "Uma Thurman"],
      summary: "An epic tale of one woman's quest for justice presented in two installments.",
      director: "Quentin Tarantino",
      genre: ["Action, ", "Thriller, ", "Crime"],
      rating: "R",
      runtime: "111 min",
      rating_url: "https://s3-us-west-2.amazonaws.com/bzfec/RATED_R.svg"
    },
    {
      url:"https://s3-us-west-2.amazonaws.com/bzfec/The+Anniversary+Party.jpg",
      title: "The Anniversary Party",
      production: "Fine Line Features",
      release_date: "Release Date: June 8, 2001",
      starring: ["Alan Cumming, ", "Jennifer Jason Leig, ", "Jennifer Beale, ", "Phoebe Cates"],
      summary: "Taking place over the course of one night, The Anniversary Party is a serio-comic, sometimes scathing inspection of a group of friends gathered for a celebration that becomes a scorching dissection of a marriage on the brink.",
      director: "Alan Cumming and Jennifer Jason Leigh",
      genre: ["Drama, ", "Comedy"],
      rating: "R",
      runtime: "115 min",
      rating_url: "https://s3-us-west-2.amazonaws.com/bzfec/RATED_R.svg"
    },
    {
      url: "https://s3-us-west-2.amazonaws.com/bzfec/Bridesmaids.jpg",
      title: "Bridesmaids",
      production: "Universal Pictures",
      release_date: "Release Date: May 13, 2011",
      starring: ["Kristen Wiig, ", "Maya Rudolph, ", "Rose Byrne"],
      summary: "Annie's life is a mess. But when she finds out her lifetime best friend is engaged, she simply must serve as Lillian's maid of honor. Though lovelorn and broke, Annie bluffs her way through the expensive and bizarre rituals. With one chance to get it perfect, she'll show Lillian and her bridesmaids just how far you'll go for someone you love.",
      director: "Paul Feig",
      genre: ["Comedy"],
      rating: "R",
      runtime: "125 min",
      rating_url: "https://s3-us-west-2.amazonaws.com/bzfec/RATED_R.svg"
    }
  ]

  for (detail of details) {

    //console.log(detail)
    db.save(detail);
    //return db.disconnect();
  }
};
seedDetails();



module.exports = seedDetails;














