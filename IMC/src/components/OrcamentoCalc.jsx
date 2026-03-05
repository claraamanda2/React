import { useState } from "react";
import Button from './Button'
import "./ImcCalc.css"

const OrcamentoCalc = ({ calcOrc }) => {
  const[valor, setValor] = useState();
  const[horas, setHoras] = useState();

  const clearForms = (e) => {
    e.preventDefault();

    setValor("");
    setHoras("");
  }

    const validDigits = (text) => {
      return text.replace(/[^0-9,]/g, "");
    }

    const handleValorChange = (e) => {
      const updateValue = validDigits(e.target.value);
      setValor(updateValue)
    }

    const handleHorasChange = (e) => {
      const updateValue = validDigits(e.target.value);
      setHoras(updateValue)
    }

  return (
    <div id="calc-container">
      <h2>Orçamento Freelancer</h2>
      <form id="orc-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="valor">Valor da sua Hora:</label>
            <input type="text" 
             name="valor"
             id="valor"
             placeholder="Exemplo: 50"
             value={valor}
             onChange={(e) => handleValorChange(e)} />
             
          </div>

            <div className="form-control">
            <label htmlFor="horas">Estimativa de Horas do Projeto:</label>
            <input type="text" 
             name="horas"
             id="horas"
             placeholder="Exemplo: 40"
             value={horas}
             onChange={(e) => handleHorasChange(e)} />
             
          </div>


        </div>
        <div className="action-control">
          <Button id="calc-btn" text="Calcular" action={(e) => calcOrc(e, horas, valor)} />
          <Button id="clear-btn" text="Limpar" action={clearForms}/>
        </div>
      </form>
    </div>
  )
}

export default OrcamentoCalc