import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//dom arbol html que vamos creando las diferentes etiquetas y lo copia de forma virtual
//react dom es el que se encarga de renderizar el arbol virtual en el arbol real
//agarra un componente y lo prueba para ver si funciona

ReactDOM.createRoot(document.getElementById('root')).render(
  //verifica si existe algun error en el componente, solo funciona en modo desarrollo
  //esto ya es un componente react
  //usa javascript con xml
  //jsx solo retorna un elemento, que es el react strict mode
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
