import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MyButton() {
  return (
    <button className = "bun" >Clique aqui!</button>
  );
}

export default function App() {

  return (

      <>
        <h1>Seja bem-vinda, Yasmin! s2 </h1>
        <MyButton/>
        <p> Um parágrafo aleatório para aprender.</p>
      </>
  );
}


