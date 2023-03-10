import React from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import Form from './components/Form'
import './styles/fonts.scss'

function App() {

  return (
    <div className="App">
        <Navbar />
        <Main />
        <Form />
        <Footer />
    </div>
  )
}

export default App
