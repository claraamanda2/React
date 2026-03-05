import Button from './Button'
import "./imcTabela.css"


const ImcTable = ({ data, orcamento, info, infoClass, resetCalc }) => {
    return (
        <div id="result-container">
            <p id="imc-number">Valor do Orçamento: <span className={infoClass}> {orcamento} </span></p>
            <br />
            <p id="imc-info"> Projeto: <span className={infoClass}> {info} </span> </p>
<br />
            <h3>Confira as classificações:</h3>
            <br />
            <div className="orc-table">
                <div className="table-header">
                    <h4>Projeto</h4>
                    <h4>classificação</h4>
                </div>
                {data.map((item) => (
                    <div className="table-data" key={item.info}>
                        <p>{item.classification}</p>
                        <p>{item.info}</p>
                    </div>
                ))}
            </div>
            <br />
            <Button id="back-btn" text="voltar" action={resetCalc} />
        </div>
    )
}

export default ImcTable