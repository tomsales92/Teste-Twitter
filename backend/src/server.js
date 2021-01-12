const express = require('express');
const cors =require('cors');

const app = express();
app.use(cors());
app.use(express.json())
const reposityTwwet = require('./repositories/TweetsRepository')
const FindTweetService = require('./services/FindTweetsService');

const tweetsRepository = new reposityTwwet();
app.get('/', (request, response)=>{
  const tweets = tweetsRepository.All();
  response.json(tweets)
})


app.post('/search', async (request, response)=>{
  const {message, amount} = request.body;
  console.log(message, amount);
  const createTweet = new FindTweetService();
  const tweets = createTweet.execute(message, amount);
  response.json(tweets)
});

app.listen(3333, () => { console.log("Servidor Ok") })