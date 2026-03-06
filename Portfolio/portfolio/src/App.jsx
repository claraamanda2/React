
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      <Navbar/>
      <div style={{ paddingTop: "70px" }}>
        <Hero/>
        <Gallery/>
        <About/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
