import  {useState, useEffect} from 'react';

import Header from '../../components/Header';
import avatar from '../../assets/avatar.jpg'

import api from '../../service/api'

import {Tweet, Container} from './style'

function Home(){
  const [message, setMessage] = useState('');
  const [amount, setAmount] = useState('');
  const [tweets, setTweets] = useState(['']);
  
  async function handleSearch(e){
    const dataForm = {
      message,
      amount, 
    };
     try{
        const response = await  api.post('search', dataForm);
        setTweets(response.data);
    }catch(erro) {
        alert('Erro no Cadastro, tente novamente. ');
    } 
}
useEffect(()=>{
  async function loadApi(){
    const response = await api.get('/');
    const result = response.data;
    setTweets(result[0])

  }
  loadApi();
}, []);
  return(
    <>
      <Header />
    <Container>
      <form onSubmit={handleSearch}>
        <input
            placeholder="Pesquise a #hashtag"
            value={message}
            onChange={e => setMessage(e.target.value) }
          />
      
        <input
          placeholder="Quantidade"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
          <button className="btn" type="submit">Pesquisar <i class="fas fa-search"></i></button>
      </form>
     {tweets ? 
          tweets.map(item => (
              <Tweet key={item.id}>
                <div>
                  <img src={avatar} alt="avatarDoUsuario"/>
                  <div>
                    <strong>{item.name} </strong>
                    <span>{item.text}</span>
                  </div>
                </div>
              </Tweet>
          ))
          :
          <h1>Sem registros</h1>
    }
    </Container>
    </>
  )
}

export default Home;