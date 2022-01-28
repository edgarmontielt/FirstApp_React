import React, { useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function Fundamentos() {
    const [tarjetas, setTarjetas] = useState([]);
  
    //Return elements of JSX
    const number = 1;
    const persona = {
      name: "Juan",
    };
    const listStudentsBasic = ["Ivan", "Esteban", "Daniel"];
  
    const listJSX = [];
    listStudentsBasic.forEach((alumno) => {
      listJSX.push(<p>{alumno}</p>);
    });
    // const listStudents = [<p>Ivan</p>, <p>Esteban</p>, <p>Daniel</p>]
  
    //   const tarjets = [];
    //   for (let i = 1; i <= 10; i++) {
    //     tarjets.push(
    //       <Card key={i} titulo={`La tarjeta numero ${i}`} numero={number} />
    //     );
    //   }
  
    const agregarTarjetas = () => {
      tarjetas.push(Card);
  
      setTarjetas([...tarjetas]); // Spread Operator
    };
  
    const eliminarTarjetas = (id) => {
      const nuevasTarjetas = tarjetas.filter((Card, index) => index !== id);
      setTarjetas(nuevasTarjetas);
      console.log(nuevasTarjetas)
    };
  
    return (
      <>
        <p id="greeting">Hello, World</p>
        <a href="/got">GoT API</a>
        <Link to="/got">Game of Thrones API</Link>
        <h2>Prueba de CSS</h2>
        <button onClick={agregarTarjetas}>Agregar Tarjeta</button>
        <button
          onClick={() => {
            document.querySelector(".card").remove();
          }}
        >
          Borrar
        </button>
  
        <div className="tarjetas">
          {tarjetas.map((Card, index) => (
            <Card
              eliminar={eliminarTarjetas}
              key={`Tarjeta numero: ${index}`}
              numero={index}
              titulo={`La tarjeta numero: ${index}`}
            />
          ))}
        </div>
  
        {/* <div className="cards_container">{tarjets}</div> */}
        {/* Es importante añadir la key para renderizar el contenido */}
  
        {listStudentsBasic.map((alumno, index) => (
          <p key={index}>{alumno}</p>
        ))}
      </>
    );
  }
  