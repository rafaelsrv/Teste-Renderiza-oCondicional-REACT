import {useState } from 'react';
import styles from './Contador.module.css'

function Contador() {
    
    let [Resultado, setResultado] = useState(0)
    let [Message, setMessage] = useState("")
    let [visible, setVisible] = useState(false)
    
    let vamosFechar = false
    let zerar = function(){
      
      Message="";
      setVisible(visible=false)
      console.log(Message)
      vamosFechar = true
      
      
  
      
    }
    
      if (visible === true){
        setTimeout((zerar), 1800)
        
      
    
    }    
    
    
    
    return(

        <div>
   {visible===true && (<div className="Mensagem">{Message}</div>)}
    <p className="Resultado">{Resultado}</p>

      
      
        
      <div className="DivCentral">
      <button id="mais" onClick={()=>{setResultado(Resultado+1); setMessage(Message="Incrementando 1"); setVisible(visible=true)}}>Maiss</button>
      <button id="menos" onClick={()=>{setResultado(Resultado-1); setMessage(Message="Decrementando 1"); setVisible(visible=true)}}>Menos</button>
      <button id="zero" onClick={()=>{setResultado(Resultado=0); setMessage(Message="Zerando Total"); setVisible(visible=true)}}>Zerar</button>
      
    </div>
    </div>
    )
}

export default Contador
