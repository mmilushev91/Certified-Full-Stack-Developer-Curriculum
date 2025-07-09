const books = [
  {
    title: 'Your Next Five Moves: Master the Art of Business Strategy',
    authorName: 'Patrick Bet-David and Greg Dinkin',
    releaseYear: 2021,
  },

  {
    title: 'Atomic Habits',
    authorName: 'James Clear',
    releaseYear: 1999,
  },
  {
    title: 'Choose Your Enemies Wisely: Business Planning for the Audacious Few',
    authorName: 'Patrick Bet-David',
    releaseYear: 1922,
  },
]

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  }

  else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  }

  return 0;
}
const filteredBooks = books.filter(book => book.releaseYear > 1950);
filteredBooks.sort(sortByYear);

console.log(filteredBooks);
