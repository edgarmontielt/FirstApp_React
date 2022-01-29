import React, { useContext, useEffect, useState } from "react";
// import Characters from "../components/Characters";
import Movies from "../components/Movies";
import { userContext } from "../context/UserContext";
import Post from "../components/Post/Post";

export default function Home() {
    // fetch("https://thronesapi.com/api/v2/Characters")

    const [characters, setCharacters] = useState([]);

    const contexto = useContext(userContext)

    const {user, setUser} = useContext(userContext)


    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://thronesapi.com/api/v2/Characters")
            const data = await res.json()
            setCharacters(data)
        }

        fetchData()
    }, []); //No omitir causa ciclos infinitos

    return <div>
        <p>{user.nombre}</p>
        <button onClick={() => {setUser({nombre:"Edgar", foto:"Mi foto"})}}>Iniciar Sesión</button>
        <Movies movies={characters} />

        <Post usuario={user}></Post>
        {console.log(contexto)}
    </div>;
}
