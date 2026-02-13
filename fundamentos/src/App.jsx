import './App.css'
import FirstComponet from './components/FirstComponet'
import TemplateExpression from './components/TemplateExpression'

// 1 - Chamar o componente

function App() {
  return (
    <div>
      <h1>Teste</h1>
      <p>paragrafo</p>
      {/*chamando o componente que nós criamos*/}
      <FirstComponet />

      {/* 2 - USAR ESSE COMPONENTE */}
      <TemplateExpression />
    </div>
  )
}

export default App
