import React, { useState } from 'react'

const Dados = () => {

    const [anotherNumber, setAnotherNumber] = useState(0);

    const [Nome, setNome] = useState("Maria");

    const [Desafio, setDesafio] = useState(10);

    const Diminui = () => {
        if (Desafio - 5 >= 0) {
            setDesafio(Desafio - 5)
        }
    }

    return (
        <div>

            <div>
                <h3>Exercício 1 – Contador Simples</h3>
                <p>valor: {anotherNumber}</p>

                <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
                    Mudar valor
                </button>
            </div>

            <div>
                <h3>Exercício 2 – Alterando Nome</h3>
                <p>Nome: {Nome}</p>

                <button onClick={() => setNome("João")}>
                    Mudar nome
                </button>
            </div>

            <div>
                <h3>Desafio Extra</h3>
                <p>Valor: {Desafio}</p>

                <button onClick={() => setDesafio(Desafio + 5)}>
                    Aumentar 5
                </button>

                <button onClick={() => Diminui()}>
                    Diminuir 5
                </button>
            </div>


        </div>
    )
}

export default Dados