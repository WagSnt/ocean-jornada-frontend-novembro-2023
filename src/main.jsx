import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' //Importando o arquivo de estilização CSS

// Cria a página HTML usando React (app - exibe a nossa aplicação)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
)
