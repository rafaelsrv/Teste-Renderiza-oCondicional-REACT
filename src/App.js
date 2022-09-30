import {useState } from 'react';
import './App.css';

function App() {
  
  let [Resultado, setResultado] = useState(0)
  let [Message, setMessage] = useState("")
  let [visible, setVisible] = useState(false)
  

  let zerar = function(){
    
    Message="";
    setVisible(visible=false)
    console.log(Message)
    

    
  }

  if (visible === true){
    setTimeout((zerar), 2000)
    
  }
  
  
  

  return (
<div>
    <p className="Resultado">{Resultado}</p>

      
      <div className="DivCentral">
      {visible===true && (<div className="Mensagem">{Message}</div>)}  
      <button id="mais" onClick={()=>{setResultado(Resultado+1); setMessage(Message="Incrementando 1"); setVisible(visible=true)}}>Mais</button>
      <button id="menos" onClick={()=>{setResultado(Resultado-1); setMessage(Message="Decrementando 1"); setVisible(visible=true)}}>Menos</button>
      <button id="zero" onClick={()=>{setResultado(Resultado=0); setMessage(Message="Zerando Total"); setVisible(visible=true)}}>Zerar</button>
      
    </div>
    </div>
  )
  
}

export default App;
