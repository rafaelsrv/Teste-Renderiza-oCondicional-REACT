

function estados(){
let Itens = []    
    
        
        fetch('dados/estados.json',{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            },
        })
            .then(resp => resp.json())
            .then(estados => {
                const Itens = estados.reduce (
                    (html, estado ) => html + `<li>${estado.nome}</li>`, ''
                )
                
            })
        // ...
    
    
    return(
    <div>
        <ul>{Itens}</ul>

    </div>)
}
export default estados