import React, { useContext } from 'react';
import { userContext } from '../../context/UserContext';
import NombreUsuario from './NombreUsuario';

export default function Detalles() {
    const { user } = useContext(userContext)
    return <div>
        <p>{user.foto}</p>
        <NombreUsuario />
    </div>;
}
