import api from './components/Api';
import './App.css';
//import estados from './components/Estados';
//import Contador from './components/Contador';
import React, {Component} from 'react';

class App extends Component{
  
  state={
    filmes:[],      //Array onde serão guardadas as respostas, no caso os filmes que serão recebidos.
  }
  async componentDidMount(){
    const response = await api.get('');     //O método GET irá procurar na api, o resultado será a resposta.

    
    
    this.setState({ filmes: response.data})
  }

  render(){

    const {filmes} = this.state;
    return(
   
   <div>
      <h1>Listar Filmes</h1>
      
      {filmes.map(filme => (
        <li key={filme.show.id}>
        <h2><strong>Título:</strong>
        {filme.show.name}
        </h2>
        <p>{filme.show.url}</p>
        
        </li>
      ))}
    </div>)
  }
}



export default App;
