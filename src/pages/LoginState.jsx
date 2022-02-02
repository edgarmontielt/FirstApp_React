import React, { useRef, useState } from 'react';

export default function LoginState() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [data, setData] = useState({})

  const iniciarSesion = (event) => {
    event.preventDefault()
    // const {password:{value:password},email:{value:email}} = event.target
    console.log(password, email)
    setPassword("")
    setEmail("")
  }

  const handleChange = ({target:{name, value}}) => { //desestructurando la propiedad target

    data[name] = value
    console.log(data)
    setData({...data})
  }

  return <>
    <form onSubmit={iniciarSesion}>
      <input value={email} onChange={(event) => { setEmail(event.target.value) }} type="email" name='email'></input>
      <input value={password} onChange={(event) => { setPassword(event.target.value) }} type="password" name='password'></input>
      
      <input value={data.email} onChange={handleChange} type="email" name='email2'></input>
      <input value={data.password} onChange={handleChange} type="password" name='password2'></input>
      <button>Iniciar sesión</button>
      {<div></div>}
    </form>
  </>;
}

// useRef: es valido para una cantidad considerable de inputs