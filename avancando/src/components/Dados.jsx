import React, { useState } from 'react'

const dados = () => {
    //variavel comum (react nao monitora)
let valor = 10

const [anotherNumber, setAnotherNumber] = useState (15);

//outro numero = anotherNumber

  return ( 
    <div>
        <div>
            <p>Valor: {valor} </p>

        {/*Evento de click, mas nao consegue mudar a variavel por nao conter o useState */}

        <button onClick={() => (valor = 15)}>
            Mudar variavel 
        </button>
        
        </div>
        <div>
            <p>valor: {anotherNumber} </p>
            {/*Aqui o react vai mudar o valor desse numero! */}
            <button onClick={() => setAnotherNumber(20)}>
                Mudar Valor
            </button>
        </div>
    </div>
  )
}

export default dados
