import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Investimentos from './pages/Investimentos.jsx'
import EducacaoFinanceira from './pages/EducacaoFinanceira.jsx'
import ControleGastos from './pages/ControleGastos.jsx'
import Contatos from './pages/Contatos.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/investimentos" element={<Investimentos />} />
          <Route path="/educacao-financeira" element={<EducacaoFinanceira />} />
          <Route path="/controle-de-gastos" element={<ControleGastos />} />
          <Route path="/contatos" element={<Contatos />} />
        </Routes>
      </main>
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </>
  )
}
