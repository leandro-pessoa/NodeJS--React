import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 

import Login from './componentes/login/Login'
import Cadastro from './componentes/cadastro/Cadastro'
import MainPage from './MainPage'

export default function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={ <Login/> }/>
          <Route path='/cadastro' element={ <Cadastro/> }/>
          <Route path='/' element={ <MainPage/> }/>
          <Route path='' element={''}/>
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
