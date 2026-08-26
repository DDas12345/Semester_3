const EventEmitter = require('events');

const netflixCricketMatch = new EventEmitter();

netflixCricketMatch.on('CHAKKA', () => {
  console.log(`We are going to lose the match, but we are going to win the hearts of the audience`);
});

netflixCricketMatch.on('CHAKKA', () => {
  console.log(`Hurray! We are going to win the match, and we are also going to win the hearts of the audience`);
});

netflixCricketMatch.emit('CHAKKA');