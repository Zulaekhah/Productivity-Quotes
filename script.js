const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

const productivityQuotes = [
  { text: "Productivity is never an accident. It is always the result of a commitment to excellence, intelligent planning, and focused effort.", author: "Paul J. Meyer" },
  { text: "Amateurs sit and wait for inspiration, the rest of us just get up and go to work.", author: "Stephen King" },
  { text: "Your future is created by what you do today, not tomorrow.", author: "Robert Kiyosaki" },
  { text: "Focus on being productive instead of busy.", author: "Tim Ferriss" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Lost time is never found again.", author: "Benjamin Franklin" },
  { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Until we can manage time, we can manage nothing else.", author: "Peter Drucker" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "Productivity is never an accident. It is always the result of a commitment to excellence, intelligent planning, and focused effort.", author: "Paul J. Meyer" },
  { text: "Amateurs sit and wait for inspiration, the rest of us just get up and go to work.", author: "Stephen King" },
  { text: "Your future is created by what you do today, not tomorrow.", author: "Robert Kiyosaki" },
  { text: "Focus on being productive instead of busy.", author: "Tim Ferriss" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Lost time is never found again.", author: "Benjamin Franklin" },
  { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Until we can manage time, we can manage nothing else.", author: "Peter Drucker" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "Productivity is being able to do things that you were never able to do before.", author: "Franz Kafka" },
  { text: "Simplicity boils down to two steps: Identify the essential. Eliminate the rest.", author: "Leo Babauta" },
  { text: "It's not always that we need to do more, but rather that we need to focus on less.", author: "Nathan W. Morris" },
  { text: "Do the hard jobs first. The easy jobs will take care of themselves.", author: "Dale Carnegie" },
  { text: "The key is in not spending time, but in investing it.", author: "Stephen R. Covey" },
  { text: "Ordinary people think merely of spending time. Great people think of using it.", author: "Arthur Schopenhauer" },
  { text: "You don’t need more time in your day. You just need to decide.", author: "Seth Godin" },
  { text: "Work gives you meaning and purpose, and life is empty without it.", author: "Stephen Hawking" },
  { text: "Small daily improvements over time lead to stunning results.", author: "Robin Sharma" },
  { text: "It’s not knowing what to do, it’s doing what you know.", author: "Tony Robbins" },
  { text: "Don’t confuse activity with productivity. Many people are simply busy being busy.", author: "Robin Sharma" },
  { text: "If you spend too much time thinking about a thing, you’ll never get it done.", author: "Bruce Lee" },
  { text: "You can do anything, but not everything.", author: "David Allen" },
  { text: "Nothing is less productive than to make more efficient what should not be done at all.", author: "Peter Drucker" },
  { text: "When we truly need to do something, we will find the time. Otherwise, we will find an excuse.", author: "Unknown" },
  { text: "You will never find time for anything. If you want time, you must make it.", author: "Charles Buxton" },
  { text: "Saying no to unnecessary things is one of the most productive skills you can cultivate.", author: "James Clear" },
  { text: "One always has time enough, if one will apply it well.", author: "Johann Wolfgang von Goethe" },
  { text: "What gets measured, gets managed.", author: "Peter Drucker" },
  { text: "Clarity equals productivity.", author: "Robin Sharma" },
  { text: "Your future is created by what you do today, not tomorrow.", author: "Robert Kiyosaki" },
  { text: "Focus on being productive instead of busy.", author: "Tim Ferriss" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Lost time is never found again.", author: "Benjamin Franklin" },
  { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Until we can manage time, we can manage nothing else.", author: "Peter Drucker" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "Productivity is being able to do things that you were never able to do before.", author: "Franz Kafka" },
  { text: "Simplicity boils down to two steps: Identify the essential. Eliminate the rest.", author: "Leo Babauta" },
  { text: "It's not always that we need to do more, but rather that we need to focus on less.", author: "Nathan W. Morris" },
  { text: "Do the hard jobs first. The easy jobs will take care of themselves.", author: "Dale Carnegie" },
  { text: "The key is in not spending time, but in investing it.", author: "Stephen R. Covey" },
  { text: "Ordinary people think merely of spending time. Great people think of using it.", author: "Arthur Schopenhauer" },
  { text: "You don’t need more time in your day. You just need to decide.", author: "Seth Godin" },
  { text: "Work gives you meaning and purpose, and life is empty without it.", author: "Stephen Hawking" },
  { text: "Small daily improvements over time lead to stunning results.", author: "Robin Sharma" },
  { text: "It’s not knowing what to do, it’s doing what you know.", author: "Tony Robbins" },
  { text: "Don’t confuse activity with productivity. Many people are simply busy being busy.", author: "Robin Sharma" },
  { text: "If you spend too much time thinking about a thing, you’ll never get it done.", author: "Bruce Lee" },
  { text: "You can do anything, but not everything.", author: "David Allen" },
  { text: "Nothing is less productive than to make more efficient what should not be done at all.", author: "Peter Drucker" },
  { text: "When we truly need to do something, we will find the time. Otherwise, we will find an excuse.", author: "Unknown" },
  { text: "You will never find time for anything. If you want time, you must make it.", author: "Charles Buxton" },
  { text: "Saying no to unnecessary things is one of the most productive skills you can cultivate.", author: "James Clear" },
  { text: "One always has time enough, if one will apply it well.", author: "Johann Wolfgang von Goethe" },
  { text: "What gets measured, gets managed.", author: "Peter Drucker" },
  { text: "Clarity equals productivity.", author: "Robin Sharma" },
  { text: "The difference between successful people and very successful people is that very successful people say ‘no’ to almost everything.", author: "Warren Buffett" },
  { text: "A goal without a plan is just a wish.", author: "Antoine de Saint-Exupéry" },
  { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { text: "Time is what we want most, but what we use worst.", author: "William Penn" },
  { text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer" },
  { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
  { text: "Don’t be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
  { text: "The bad news is time flies. The good news is you’re the pilot.", author: "Michael Altshuler" },
  { text: "Effort only fully releases its reward after a person refuses to quit.", author: "Napoleon Hill" },
  { text: "You don’t have to see the whole staircase, just take the first step.", author: "Martin Luther King Jr." },
  { text: "Being busy and being productive are two different things.", author: "Unknown" },
  { text: "Success is getting what you want. Happiness is wanting what you get.", author: "Dale Carnegie" },
  { text: "If opportunity doesn’t knock, build a door.", author: "Milton Berle" },
  { text: "Time stays long enough for those who use it.", author: "Leonardo da Vinci" },
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "Most people spend more time and energy going around problems than in trying to solve them.", author: "Henry Ford" },
  { text: "The most efficient way to live reasonably is every morning to make a plan of one’s day and every night to examine the results obtained.", author: "Alexis Carrel" },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { text: "The best preparation for good work tomorrow is to do good work today.", author: "Elbert Hubbard" },
  { text: "Half-knowledge is worse than ignorance.", author: "Thomas B. Macaulay" },
  { text: "Do more than belong: participate. Do more than care: help. Do more than believe: practice. Do more than be fair: be kind. Do more than forgive: forget. Do more than dream: work.", author: "William Arthur Ward" },{ text: "Discipline is choosing between what you want now and what you want most.", author: "Abraham Lincoln" },
  { text: "Success doesn’t come from what you do occasionally. It comes from what you do consistently.", author: "Marie Forleo" },
  { text: "You have power over your mind—not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius" },
  { text: "Do what you have to do until you can do what you want to do.", author: "Oprah Winfrey" },
  { text: "The price of excellence is discipline. The cost of mediocrity is disappointment.", author: "William Arthur Ward" },
  { text: "What you do today can improve all your tomorrows.", author: "Ralph Marston" },
  { text: "Discipline is the bridge between goals and accomplishment.", author: "Jim Rohn" },
  { text: "You will never always be motivated, so you must learn to be disciplined.", author: "Unknown" },
  { text: "We must all suffer one of two things: the pain of discipline or the pain of regret.", author: "Jim Rohn" },
  { text: "Work hard in silence; let success make the noise.", author: "Frank Ocean" },
  { text: "Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine.", author: "Jack Ma" },
  { text: "Your level of success is determined by your level of discipline and perseverance.", author: "Unknown" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "Don’t count the days. Make the days count.", author: "Muhammad Ali" },
  { text: "If you want to be more productive, you need to become the master of your minutes.", author: "Crystal Paine" },
  { text: "Success is nothing more than a few simple disciplines practiced every day.", author: "Jim Rohn" },
  { text: "If you do not conquer self, you will be conquered by self.", author: "Napoleon Hill" },
  { text: "Motivation gets you going, but discipline keeps you growing.", author: "John C. Maxwell" },
  { text: "Hard work beats talent when talent doesn’t work hard.", author: "Tim Notke" },
  { text: "Self-discipline is the magic power that makes you virtually unstoppable.", author: "Dan Kennedy" },
  { text: "You can’t have a million-dollar dream with a minimum-wage work ethic.", author: "Stephen C. Hogan" },
  { text: "Success doesn’t just happen. You have to be intentional about it, and that takes discipline.", author: "John C. Maxwell" },
  { text: "You do not rise to the level of your goals. You fall to the level of your systems.", author: "James Clear" },
  { text: "It’s not about having time. It’s about making time.", author: "Unknown" },
  { text: "You can either experience the pain of discipline or the pain of regret. The choice is yours.", author: "Unknown" },
  { text: "Dream big, start small, but most of all, start.", author: "Simon Sinek" },
  { text: "Self-discipline begins with the mastery of your thoughts. If you don’t control what you think, you can’t control what you do.", author: "Napoleon Hill" },
  { text: "Excellence is not a skill. It is an attitude.", author: "Ralph Marston" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Don’t wish it were easier, wish you were better.", author: "Jim Rohn" },
  { text: "Self-discipline is when your conscience tells you to do something and you don’t talk back.", author: "W.K. Hope" },
  { text: "Discipline weighs ounces, regret weighs tons.", author: "Jim Rohn" },
  { text: "There are no shortcuts to any place worth going.", author: "Beverly Sills" },
  { text: "If you don’t sacrifice for what you want, what you want becomes the sacrifice.", author: "Unknown" },
  { text: "Do something today that your future self will thank you for.", author: "Sean Patrick Flanery" },
  { text: "The road to success is dotted with many tempting parking spaces.", author: "Will Rogers" },
  { text: "Your habits will determine your future.", author: "Jack Canfield" },
  { text: "The discipline of writing something down is the first step toward making it happen.", author: "Lee Iacocca" },
  { text: "Success isn’t overnight. It’s when every day you get a little better than the day before. It all adds up.", author: "Dwayne Johnson" },
  { text: "Small disciplines repeated with consistency every day lead to great achievements gained slowly over time.", author: "John C. Maxwell" },
  { text: "Ordinary people believe only in the possible. Extraordinary people visualize not what is possible or probable, but rather what is impossible. And by visualizing the impossible, they begin to see it as possible.", author: "Cherie Carter-Scott" },
  { text: "Effort only fully releases its reward after a person refuses to quit.", author: "Napoleon Hill" },
  { text: "Self-discipline is the key ingredient for success.", author: "Unknown" },
  { text: "Be so good they can’t ignore you.", author: "Steve Martin" },
  { text: "Your results are the product of either personal focus or personal distractions. The choice is yours.", author: "John Di Lemme" },
  { text: "No matter how talented you are, your talent will fail you if you’re not skilled, if you don’t study, if you don’t work hard and dedicate yourself to being better every single day.", author: "Will Smith" },
  { text: "Focus on being productive instead of busy.", author: "Tim Ferriss" },
  { text: "An ounce of action is worth a ton of theory.", author: "Ralph Waldo Emerson" },
  { text: "Until we can manage time, we can manage nothing else.", author: "Peter Drucker" },
  { text: "Lost time is never found again.", author: "Benjamin Franklin" },
  { text: "You don’t have to see the whole staircase, just take the first step.", author: "Martin Luther King Jr." },
  { text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "Amateurs sit and wait for inspiration, the rest of us just get up and go to work.", author: "Stephen King" }
];

function getRandomQuote() {
  const quote = productivityQuotes[Math.floor(Math.random() * productivityQuotes.length)];
  authorText.textContent = quote.author;
  // Check Quote Length to determine the styling
  if (quote.text.length > 120){
  quoteText.classList.add('long-quote');
  }else {
  quoteText.classList.remove('long-quote')
}
  quoteText.textContent = quote.text;
  }
getRandomQuote()

// Tweet Quote

function tweetQuote() {
  const quote = quoteText.textContent;
  const author = authorText.textContent;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', getRandomQuote);
twitterBtn.addEventListener('click', tweetQuote);