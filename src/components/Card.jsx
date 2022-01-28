import React, { useState } from "react";
import '../css/Card.css';

export default function Card(props) {
  const [numero, setNumero] = useState(0); // 5: valor inicial
  let id = 1



  return (
    <div className="card">
      {/* Esta entre llaves porque es expresion de JS*/}
      <h2>{props.titulo}</h2>
      <button onClick={() => { props.eliminar(props.numero) }}>Eliminar Tarjeta</button>
      <p>Mi Contenido {props.number}</p>
      <p>Numero: {numero}</p>/
      <p>Numero: {numero}</p>
      <p>Numero: {numero}</p>
      <button onClick={() => { setNumero(numero + 1) }}>Aumentar</button>
      <button onClick={() => { setNumero(0) }}>Reset</button>
      <button onClick={() => { setNumero(numero - 1) }}>Reduce</button>

      {/* Mi comentario*/}
    </div>
  )
}
