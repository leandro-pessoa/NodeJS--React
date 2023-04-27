// imports dos módulos
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 

// imports dos componentes
import Login from './componentes/login/Login'
import Cadastro from './componentes/cadastro/Cadastro'
import MainPage from './MainPage'
import Esqueci from './componentes/novaSenha/Esqueci'

export default function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={ <Login/> }/>
          <Route path='/cadastro' element={ <Cadastro/> }/>
          <Route path='/' element={ <MainPage/> }/>
          <Route path='/esqueci_minha_senha' element={ <Esqueci/> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
)
