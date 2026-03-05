import OrcamentoCalc from "./components/OrcamentoCalc";
import OrcamentoTable from "./components/ImcTable";
import { data } from "./components/data/projetoData"
import { useState } from "react";
import "./App.css"

function App() {

  const [orcamento, setOrcamento] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  const calcOrc = (e, valor, horas) => {
    e.preventDefault();

    if(!horas || !valor) return;

    const horasFloat = +horas.replace(",",".");
    const valortFloat = +valor.replace(",",".");

    const imcResult = ((horasFloat * valortFloat)).toFixed(2)

    setOrcamento(imcResult);

    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max){
        setInfo(item.info);
      setInfoClass(item.infoClass);
    }
  });

  if(!info) return;

}

 const resetCalc = (e) => {
    setOrcamento("");
    setInfo("");
    setInfoClass("");
  }
  

  return (
    <div className="container">
      {!orcamento ? (<OrcamentoCalc calcOrc={calcOrc}/>):<OrcamentoTable data={data} orcamento={orcamento} info={info} infoClass={infoClass} resetCalc={resetCalc} /> }
    </div>
  )
}

export default App