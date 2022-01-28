import React, { useEffect, useState } from "react";
// import Characters from "../components/Characters";
import Movies from "../components/Movies";

export default function Home() {
    // fetch("https://thronesapi.com/api/v2/Characters")

    const [active, setActive] = useState(false);

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        console.log("Efecto secundario");
    }, [active]); // [] Solo se realiza una vez

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://thronesapi.com/api/v2/Characters")
            const data = await res.json()
            setCharacters(data)
        }

        fetchData()
    }, []); //No omitir causa ciclos infinitos
    return <div>    
        <Movies movies={characters}/>
    </div>;
}
