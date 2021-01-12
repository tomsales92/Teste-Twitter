var tweets =  [];

class TweetsRepository{

   All(){
    return tweets;
  }

   create(lista) {
     tweets = [];
      tweets.push(lista);
      return lista
    }
  
  
}

module.exports = TweetsRepository;