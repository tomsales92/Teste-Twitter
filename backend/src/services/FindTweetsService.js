const Tweet = require('../models/Tweet');
const TweetsRepository = require ('../repositories/TweetsRepository');
var Twit = require('twit')
const config = require('../config/authTwitter');
const { v4: uuid_v4 } = require('uuid');

const twit = new Twit(config);


class FindTweetsService {

    execute(message, amount) {
    let repository = new TweetsRepository;
    let lista = [];

     twit.get(
      'search/tweets',
       { q: `${message} since:${Date.now()}`, count: `${amount}` },
        function(err, data, response)
      {
        var tweets = data.statuses;

        if(tweets.length == 0){
            console.log('Não tem nada')
        } else {
          for (var i = 0; i < tweets.length; i++) {
            lista.push({id: uuid_v4(), name: tweets[i].user.name,text:tweets[i].text}) 
          } 
         repository.create(lista);
        }
        
    }) 
  
      var result = repository.All();
      return result;
    
    }

}

module.exports =  FindTweetsService;
